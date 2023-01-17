"use strict";
exports.__esModule = true;
exports.move = void 0;
var fs = require("fs");
var __1 = require("..");
var console_1 = require("../console");
var validateTasks_1 = require("./validateTasks");
;
function move(lastPosition, instructions) {
    function findNextPosition(position, instruction) {
        var currentPosition = position;
        //Move one point along the same axis
        if (instruction === "M") {
            if (position.orientation === "N") {
                movingPosition.yPosition += 1;
            }
            else if (position.orientation === "S") {
                movingPosition.yPosition -= 1;
            }
            else if (position.orientation === "E") {
                movingPosition.xPosition += 1;
            }
            else if (position.orientation === "W") {
                movingPosition.xPosition -= 1;
            }
        }
        //Pivot left 90º
        if (instruction === "L") {
            if (position.orientation === "N") {
                movingPosition.orientation = "W";
            }
            else if (position.orientation === "S") {
                movingPosition.orientation = "E";
            }
            else if (position.orientation === "W") {
                movingPosition.orientation = "S";
            }
            else if (position.orientation === "E") {
                movingPosition.orientation = "N";
            }
        }
        //Pivot right 90º
        if (instruction === "R") {
            if (position.orientation === "N") {
                movingPosition.orientation = "E";
            }
            else if (position.orientation === "S") {
                movingPosition.orientation = "W";
            }
            else if (position.orientation === "E") {
                movingPosition.orientation = "S";
            }
            else if (position.orientation === "W") {
                movingPosition.orientation = "N";
            }
        }
        /*Check that the Rover's next location is accessible within the plateau and not in another Rover's space,
         * saving the Rover's last position in case it cannot move forward
         */
        var previousPosition = currentPosition;
        if (((0, validateTasks_1.coordinatesInRange)(currentPosition)) && ((0, validateTasks_1.coordinatesUnoccupied)(currentPosition))) {
            return movingPosition;
        }
        //else print a message and go to update.
        else {
            (0, console_1.print)("You may not navigate to position ".concat((currentPosition.xPosition, currentPosition.yPosition), " on the way to your final position.  You present position ").concat((previousPosition.xPosition, previousPosition.yPosition), " will be logged. Permission is denied due to location risk issues.  Please consult Mission Control."));
        }
        updateLastPosition(currentPosition);
    }
    //Start up the Rover from its initial position 
    var movingPosition = lastPosition;
    for (var i = 0; i < (Array.from(instructions).length); i++) {
        //The Rover's next position is calculated from its previous coordinates
        findNextPosition(movingPosition, instructions[i]);
    }
    //The Rover's final position is recorded and communicated
    updateLastPosition(movingPosition);
}
exports.move = move;
function updateLastPosition(position) {
    var finalPosition = '\n' + position.Roverid.concat(' ', position.xPosition.toString(), position.yPosition.toString(), position.orientation, ' ', (Date.now() / 1000).toString());
    //Requires betterr errror-handling
    fs.appendFileSync('./Rover_log/position_log.txt', finalPosition);
    (0, console_1.print)("New position ".concat(position.xPosition).concat(position.yPosition).concat(position.orientation, " now logged for Rover ID ").concat(position.Roverid, ".\n"));
    //The user can now navigate another Rover or exit.
    (0, console_1.askQuestion)("Enter Y to navigate another Rover or N to close and send data to Mission Control.", restartOrStop);
}
function restartOrStop(decision) {
    if (decision === 'N') {
        (0, console_1.print)("Press Control+C to exit the program. Please activate alien spider \uD83D\uDD77 alarms before leaving the Control Room.");
    }
    else if (decision === 'Y') {
        (0, __1.initialiseRover)();
    }
    else
        ;
}
