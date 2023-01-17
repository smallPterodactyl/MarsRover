"use strict";
exports.__esModule = true;
exports.coordinatesUnoccupied = exports.coordinatesInRange = exports.validInstructions = exports.validRoverID = exports.activeRovers = void 0;
exports.activeRovers = ['a1', 'g56'];
var plateau = {
    x: 4,
    y: 4
};
//Only valid IDs can be entered
function validRoverID(ID) {
    return (exports.activeRovers.find(function (activeRover) { return activeRover === ID; }));
}
exports.validRoverID = validRoverID;
//Instructions are invalid if undefined, longer than 15 characters, or contain non-L/M/R characters
function validInstructions(userInstructions) {
    var isNotValid = /[^LMR]/i;
    var MAX_INSTR = 15;
    return ((userInstructions.length > MAX_INSTR) ||
        (userInstructions === undefined) || (userInstructions === '') ||
        ((userInstructions).match(isNotValid))) ? false : true;
}
exports.validInstructions = validInstructions;
//No single instruction can allow the Rover to go 'off plateau'
function coordinatesInRange(workingCoordinates) {
    return ((workingCoordinates.x >= 0) && (workingCoordinates.x <= plateau.x) &&
        (workingCoordinates.y >= 0) && (workingCoordinates.y <= plateau.y)) ? true : false;
}
exports.coordinatesInRange = coordinatesInRange;
//This is a stub: it will check the Rover's position against others
function coordinatesUnoccupied(workingCoordinates) {
    var otherRoverLocations;
    //if current coordinates are not found in the list,true; else false
    //other Rover coords would be retrieved from the positions file
    return true;
}
exports.coordinatesUnoccupied = coordinatesUnoccupied;
