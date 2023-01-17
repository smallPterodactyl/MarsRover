import * as fs from 'fs';
import { initialiseRover } from '..';
import { clear, print, askQuestion } from '../console';
import { coordinatesInRange, coordinatesUnoccupied } from './validateTasks';

export interface RoverPosition {
  Roverid: string;
  xPosition: number;
  yPosition: number;
  orientation: string,   
};

export type coordinates = {
  x: number;
  y: number,
};

export function move (lastPosition: RoverPosition, instructions: string) {

  function findNextPosition (position: RoverPosition, instruction: string) {

    let workingCoordinates: coordinates = {
      x: position.xPosition,
      y: position.yPosition,
    }

    //Move one point along the same axis
    if (instruction === "M") {
      if (position.orientation === "N") { movingPosition.yPosition += 1 }
      else if (position.orientation === "S" ) { movingPosition.yPosition -= 1 }
      else if (position.orientation ===  "E") { movingPosition.xPosition += 1 } 
      else if (position.orientation ===  "W") { movingPosition.xPosition -= 1 }
    } 

    //Pivot left 90º
    if (instruction === "L") {
      if (position.orientation === "N") { movingPosition.orientation = "W" }
      else if (position.orientation === "S") { movingPosition.orientation = "E" }
      else if (position.orientation === "W") { movingPosition.orientation = "S" } 
      else if (position.orientation === "E") { movingPosition.orientation = "N" } 
    }     

    //Pivot right 90º
    if (instruction === "R") {
      if (position.orientation === "N") { movingPosition.orientation = "E" }
      else if (position.orientation === "S") { movingPosition.orientation = "W" }
      else if (position.orientation ===  "E") { movingPosition.orientation = "S" } 
      else if (position.orientation ===  "W") { movingPosition.orientation = "N" } 
    }  

    //Check that the Rover's next location is accessible: within the plateau and not in another Rover's space
    workingCoordinates.x = movingPosition.xPosition;
    workingCoordinates.y = movingPosition.yPosition;

    if (coordinatesInRange(workingCoordinates)) /*&& coordinatesUnoccupied(x and y) */ {

   //Pass back the Rover's updated position

   return movingPosition     }

   //else print a message and go to update.

  } 


   //Start up the Rover from its initial position 
  let movingPosition = lastPosition;    
    
  for (let i = 0; i < (Array.from(instructions).length); i++) {

     //The Rover's next position is calculated from its previous coordinates
    findNextPosition (movingPosition, instructions[i]);
  }  
    
    //The Rover's final position is recorded and communicated
    updateLastPosition (movingPosition);

    print
      (`New position ${movingPosition.xPosition}${movingPosition.yPosition}${movingPosition.orientation} now logged for Rover ID ${movingPosition.Roverid}.\n`)

      //The user can now navigate another Rover or exit.
      askQuestion(`Enter Y to navigate another Rover or N to close and send data to Mission Control.`, restartOrStop);
} 
    
  
function updateLastPosition (position: RoverPosition) {

    const finalPosition = '\n' + position.Roverid.concat(' ', position.xPosition.toString(),position.yPosition.toString(),
    position.orientation, ' ', (Date.now()/1000).toString());

    //Requires betterr errror-handling
    fs.appendFileSync('./Rover_log/position_log.txt', finalPosition);

}


function restartOrStop (decision: string) {

  if (decision === 'N') {
    print (`Press Control+C to exit the program. Please activate alien spider 🕷 alarms before leaving the Control Room.`);
  }
  
  else if (decision === 'Y') {initialiseRover ()}
  
  else ;
    
}
