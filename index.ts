import { clear, print, askQuestion } from './console';
import { readFileSync } from 'fs';
import { RoverPosition } from './src/moveRover.js';
import { move } from './src/moveRover.js';
import {activeRovers, validRoverID, validInstructions} from './src/validateTasks';


export function initialiseRover(): void {
	clear(false);
	print('.............................................................');
	print('User credentials recognised. Please wait for Rover signals.');
	print('.............................................................');

	let lastPosition: RoverPosition = {
		Roverid: '',
		xPosition: 0,
		yPosition: 0,
		orientation: ''
	}	

	let instructions = '';
	
	//Ask the user to select a Rover using its ID
	const RoverInventory = readFileSync('./Rover_log/inventory.txt');
	print (RoverInventory.toString());
    askQuestion(`Enter the ID of the active Rover that you want to navigate.   `, selectRover);


    //Use the ID to find the Rover's most recent coordinates from a log	
    function selectRover (ID: string): void {

	  if (validRoverID (ID) === undefined) {
		print (`Invalid or inactive Rover ${ID} . Enter another ID.`);
	    askQuestion(`Enter the ID of the Rover that you wish to navigate.   `, selectRover);

	  }

      const data = readFileSync('./Rover_log/position_log.txt');
      const RoverData = data.toString().split('\n');	
	  const lastCoordinates = [...RoverData].find (coordinates => coordinates.match(ID));

	 
	  //Set the Rover to move from its last position if valid coordinates are retrieved
	  if (lastCoordinates === undefined) {'error - contact mission control'}

	  else {

	    const arrLastCoords = lastCoordinates.split(' ');
		lastPosition.Roverid = arrLastCoords[0],
	    lastPosition.xPosition = Number(arrLastCoords[1][0]),
        lastPosition.yPosition =  Number(arrLastCoords[1][1]),
        lastPosition.orientation = arrLastCoords[1][2]
		print
		(`Rover ID ${lastPosition.Roverid} successfully located at ${lastPosition.xPosition}${lastPosition.yPosition}${lastPosition.orientation} .\n`)

	}


	 //Ask the user to enter navigation instructions
	 askQuestion(`Enter navigation instructions of no more than 15 characters (M, L or R).   `, inputInstructions);

     function  inputInstructions (userInstructions: string) {

	   if (validInstructions(userInstructions)) {

		instructions = userInstructions;
		move (lastPosition, instructions); 
		 
		}

		else {	 

		print (`Invalid instructions. Please re-enter.`);
		askQuestion(`Enter navigation instructions of no more than 15 characters (M, L or R).   `, inputInstructions);

	   }  
    }	
  }
} 

initialiseRover ();


/*More sophisticated functionality is needed to handle multiple log entries with different dates:
	
The current 'match' function will only find the first instance of the Rover's location but we really
need something like a filter or an indexed read to find all the Rover's locations by date, e.g.
const loggedCoordinates = Array.from(RoverData).filter (coordinates => coordinates.match(matchWithID));
 lastPowerDownDate (loggedCoordinates);

    function lastPowerDownDate (loggedCoordinates) {
     Compare dates and pass back the coordinates with the max date
   }
*/  
 

