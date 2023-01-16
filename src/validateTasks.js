"use strict";
exports.__esModule = true;
exports.isUnoccupied = exports.coordinatesInRange = exports.validInstructions = exports.validRoverID = exports.activeRovers = void 0;
exports.activeRovers = ['a1', 'g56'];
var plateau = {
    length: 5,
    width: 5,
    flat: true,
    alienSpiders: 2
};
function validRoverID(ID) {
    return (exports.activeRovers.find(function (activeRover) { return activeRover === ID; }));
}
exports.validRoverID = validRoverID;
function validInstructions(userInstructions) {
    var isNotValid = /[^LMR]/i;
    var MAX_INSTR = 15;
    //Instructions are invalid if undefined, longer than 15 characters, or contain non-L/M/R characters
    return ((userInstructions.length > MAX_INSTR) || (userInstructions === undefined) || ((userInstructions).match(isNotValid))) ? false : true;
}
exports.validInstructions = validInstructions;
function coordinatesInRange() {
}
exports.coordinatesInRange = coordinatesInRange;
function isUnoccupied() {
}
exports.isUnoccupied = isUnoccupied;
