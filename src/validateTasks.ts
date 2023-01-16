import { isValidDNA } from '../../js_coding_exercises/challenges/exercise006';
import { move } from './moveRover';

export const activeRovers = ['a1', 'g56'] as const;



const plateau = {
    length: 5,
    width: 5,
    flat: true,
    alienSpiders: 2   
}


export function validRoverID (ID: string) {

  return (activeRovers.find (activeRover => activeRover === ID))

}

export function validInstructions (userInstructions: string) {

    const isNotValid = /[^LMR]/i;
    const MAX_INSTR = 15;

    //Instructions are invalid if undefined, longer than 15 characters, or contain non-L/M/R characters
   
   return ((userInstructions.length > MAX_INSTR) || (userInstructions === undefined) || ((userInstructions).match(isNotValid)))? false : true
 
}    

export function coordinatesInRange () {

}

export function isUnoccupied () {

}

