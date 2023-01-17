"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.initialiseRover = void 0;
var console_1 = require("./console");
var fs_1 = require("fs");
var moveRover_js_1 = require("./src/moveRover.js");
var validateTasks_1 = require("./src/validateTasks");
function initialiseRover() {
    (0, console_1.clear)(false);
    (0, console_1.print)('.............................................................');
    (0, console_1.print)('User credentials recognised. Please wait for Rover signals.');
    (0, console_1.print)('.............................................................');
    var lastPosition = {
        Roverid: '',
        xPosition: 0,
        yPosition: 0,
        orientation: ''
    };
    var instructions = '';
    //Ask the user to select a Rover using its ID
    var RoverInventory = (0, fs_1.readFileSync)('./Rover_log/inventory.txt');
    (0, console_1.print)(RoverInventory.toString());
    (0, console_1.askQuestion)("Enter the ID of the active Rover that you want to navigate.   ", selectRover);
    //Use the ID to find the Rover's most recent coordinates from a log	
    function selectRover(ID) {
        if ((0, validateTasks_1.validRoverID)(ID) === undefined) {
            (0, console_1.print)("Invalid or inactive Rover ".concat(ID, " . Enter another ID."));
            (0, console_1.askQuestion)("Enter the ID of the Rover that you wish to navigate.   ", selectRover);
        }
        var data = (0, fs_1.readFileSync)('./Rover_log/position_log.txt');
        var RoverData = data.toString().split('\n');
        var lastCoordinates = __spreadArray([], RoverData, true).find(function (coordinates) { return coordinates.match(ID); });
        //Set the Rover to move from its last position if valid coordinates are retrieved
        if (lastCoordinates === undefined) {
            'error - contact mission control';
        }
        else {
            var arrLastCoords = lastCoordinates.split(' ');
            lastPosition.Roverid = arrLastCoords[0],
                lastPosition.xPosition = Number(arrLastCoords[1][0]),
                lastPosition.yPosition = Number(arrLastCoords[1][1]),
                lastPosition.orientation = arrLastCoords[1][2];
            (0, console_1.print)("Rover ID ".concat(lastPosition.Roverid, " successfully located at ").concat(lastPosition.xPosition).concat(lastPosition.yPosition).concat(lastPosition.orientation, " .\n"));
        }
        //Ask the user to enter navigation instructions
        (0, console_1.askQuestion)("Enter navigation instructions of no more than 15 characters (M, L or R).   ", inputInstructions);
        function inputInstructions(userInstructions) {
            if ((0, validateTasks_1.validInstructions)(userInstructions)) {
                instructions = userInstructions;
                (0, moveRover_js_1.move)(lastPosition, instructions);
            }
            else {
                (0, console_1.print)("Invalid instructions. Please re-enter.");
                (0, console_1.askQuestion)("Enter navigation instructions of no more than 15 characters (M, L or R).   ", inputInstructions);
            }
        }
    }
}
exports.initialiseRover = initialiseRover;
initialiseRover();
/*More sophisticated functionality is needed to handle multiple log entries with different dates:
    
The current 'match' function will only find the first instance of the Rover's location but we really
need something like a filter or an indexed read to find all the Rover's locations by date, e.g.
const loggedCoordinates = Array.from(RoverData).filter (coordinates => coordinates.match(matchWithID));
 lastPowerDownDate (loggedCoordinates);

    function lastPowerDownDate (loggedCoordinates) {
     Compare dates and pass back the coordinates with the max date
   }
*/
