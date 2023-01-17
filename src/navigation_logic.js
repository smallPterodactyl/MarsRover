"use strict";
exports.__esModule = true;
function callingFunction(movingPosition, instructions) {
    for (var i = 0; i < (instructions.length); i++) {
        //The Rover's next position is calculated from its previous coordinates
        findNextPosition(movingPosition, instructions[i]);
    }
    function findNextPosition(position, instructions) {
        //Move one point along the same axis
        if (instructions === "M") {
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
        if (instructions === "L") {
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
        if (instructions === "R") {
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
        return movingPosition;
    }
}
