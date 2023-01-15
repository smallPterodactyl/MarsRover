import { clear, print, askQuestion } from './console';
import { readFileSync } from 'fs';
import { RoverPosition } from './src/moveRover.js';
import { move } from './src/moveRover.js';


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
    askQuestion(`Enter the ID of the active Rover that you want to navigate. `, selectRover);


    //Use the ID to find the Rover's most recent coordinates from a log	
    function selectRover (ID: string): void {

      const data = readFileSync('./Rover_log/position_log.txt');
      const RoverData = data.toString().split('\n');	
	  const lastCoordinates = [...RoverData].find (coordinates => coordinates.match(ID));

	 
	  //Set the Rover to move from its last position if valid coordinates are retrieved
	  if (lastCoordinates === undefined) {'error - contact mission control'} //end if

	  else {

	    const arrLastCoords = lastCoordinates.split(' ');
		lastPosition.Roverid = arrLastCoords[0],
	    lastPosition.xPosition = Number(arrLastCoords[1][0]),
        lastPosition.yPosition =  Number(arrLastCoords[1][1]),
        lastPosition.orientation = arrLastCoords[1][2]

	 }	 //end else


	 //Ask the user to enter navigation instructions
	 askQuestion(`Enter navigation instructions of no more than 15 characters (M, L or R)`, inputInstructions);

     function  inputInstructions (userInstructions: string) {

		if ((userInstructions.length > 15) || (userInstructions === undefined)) 
		  { print('Invalid instructions')}

		else {
			instructions = userInstructions;
		} 

	  move (lastPosition, instructions); 
     }	//end input function

  }	//end of selection
 
} 

initialiseRover ();


/*More sophisticated functionality needed to handle multiple log entries with different dates:
	
 const loggedCoordinates = Array.from(RoverData).filter (coordinates => coordinates.match(matchWithID));
 lastPowerDownDate (loggedCoordinates);

    function lastPowerDownDate (loggedCoordinates) {
     Compare dates and pass back the coordinates with the max date
   }
 */  

