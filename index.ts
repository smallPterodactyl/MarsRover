import { clear, print, askQuestion } from './console';
import { readFileSync } from 'fs';
import { RoverPosition } from './src/moveRover.js';
import { move } from './src/moveRover.js';


export function initialiseRover(): void {
	clear(false);
	print('...................................................................');
	print('User credentials recognised. Please wait for Rover incoming signals.');
	print('....................................................................');

	const RoverInventory = readFileSync('./Rover_log/inventory.txt');
	print (RoverInventory.toString());



   askQuestion(`Enter the ID of the active Rover that you want to navigate. `, selectRover);

	let lastPosition: RoverPosition = {
		Roverid: '',
		xPosition: 0,
		yPosition: 0,
		orientation: ''
	}	

	let instructions = '';

    //Use the Rover's id to find its most recent coordinates from the log	
   function selectRover (ID: string): void {

     const data = readFileSync('./Rover_log/position_log.txt');
     const RoverData = data.toString().split('\n');	
	 const lastCoordinates = RoverData.find (coordinates => coordinates.match(ID));

	 if (lastCoordinates === undefined) {'error - contact mission control'} //end if

	 else {

	//Prepare the Rover to move
	  lastPosition.Roverid = lastCoordinates[0],
	  lastPosition.xPosition = Number(lastCoordinates[1][0]),
      lastPosition.yPosition =  Number(lastCoordinates[1][1]),
      lastPosition.orientation = lastCoordinates[1][2]

	 }	 //end else

	 askQuestion(`Enter navigation instructions of no more than 15 characters (M, L or R) Rover`, inputInstructions);

     function  inputInstructions (userInstructions: string) {
       
		if ((userInstructions.length > 15) || (userInstructions === undefined)) 
		  { print('Invalid instructions')} //end print instructions

		else {
			instructions = userInstructions;
		} //end else instructions
     }	//end input function
  }	//end of selection

  console.log (instructions, lastPosition );
 
} //end of initialise

initialiseRover ();



/*More sophisticated functionality is needed to handle for multiple log entries with different dates
	
	//const loggedCoordinates = Array.from(RoverData).filter (coordinates => coordinates.match(matchWithID));
	//lastPowerDownDate (loggedCoordinates);

    /*function lastPowerDownDate (loggedCoordinates) {
     const logDates = loggedCoordinates.map (coordinates => Number(coordinates.split(' ')[2]));
   }
 */  

