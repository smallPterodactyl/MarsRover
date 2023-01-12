/*import { clear, print, xxx } from './console'; */
import { move } from './src/moveRover.js';

/*export function initialiseRovers(): void {
	clear(false);
	print('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
	print('User <McUser> cleared for security');
	print('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'); */

	//selecttRover(`Please select an active Rover` ');
	//selecttRover(`Please enter Rover navigation instructions using characters L, M and/or R. Instructions must be no more than 15 characters.` ');

	//Temporary parameters:


let _RoverID = '';
let _startingPoint = '';
let _instructions = '';

move(_RoverID, _startingPoint, _instructions);
