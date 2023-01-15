"use strict";
exports.__esModule = true;
exports.move = void 0;
;
function move(lastPosition, instructions) {
    function findNextPosition(position, instruction) {
        //Move one point along the same axis
        if (instruction === "M") {
            console.log('in M');
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
            console.log('in L');
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
            console.log('in R');
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
        //Pass the Rover's updated position back to the next instruction 
        console.log('passing back from findNext ', movingPosition);
        return movingPosition;
    }
    //Start the Rover from its initial position
    var movingPosition = lastPosition;
    for (var i = 0; i < (Array.from(instructions).length); i++) {
        console.log('in for', movingPosition);
        //The Rover's next coordinates are always calculated from its previous coordinates in the movingPosition object  
        findNextPosition(movingPosition, instructions[i]);
    }
    //Write final cooordinates out for unit test purposes
    console.log('after for', movingPosition);
}
exports.move = move;
