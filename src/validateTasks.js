"use strict";
exports.__esModule = true;
exports.isUnoccupied = exports.coordinatesInRange = exports.validInstructions = exports.validRoverID = exports.activeRovers = void 0;
exports.activeRovers = ['a1', 'g56'];
var MAX_INSTR = 15;
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
    console.log(userInstructions);
    console.log(userInstructions.match(/^L|M|N/));
    if ((userInstructions.length > MAX_INSTR) || (userInstructions === undefined) || (userInstructions.match(/^L|M|N/))) {
        return undefined;
    }
    else {
        return userInstructions;
    }
}
exports.validInstructions = validInstructions;
function coordinatesInRange() {
}
exports.coordinatesInRange = coordinatesInRange;
function isUnoccupied() {
}
exports.isUnoccupied = isUnoccupied;
