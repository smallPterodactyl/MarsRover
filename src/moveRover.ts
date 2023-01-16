import * as fs from 'fs';
import { initialiseRover } from '..';
import { clear, print, askQuestion } from '../console';

export interface RoverPosition {
  Roverid: string;
  xPosition: number;
  yPosition: number;
  orientation: string,   
};

export function move (lastPosition: RoverPosition, instructions: string) {

  function findNextPosition (position: RoverPosition, instruction: string) {

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

   //Pass back the Rover's updated position
   return movingPosition     

  } //findNextPosition ends here


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

    //This is horrible, non-existent error-handling: even considering this operation would never be used in the real word
    fs.appendFileSync('./Rover_log/position_log.txt', finalPosition);

}


function restartOrStop (decision: string) {

  if (decision === 'N') {
    print (`Press Control+C to exit the program. Please activate alien spider 🕷 alarms before leaving the Control Room.`);
  }
  
  else if (decision === 'Y') {initialiseRover ()}
  
  else ;
    

}
