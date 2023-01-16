import { move } from './moveRover';

export const activeRovers = ['a1', 'g56'] as const;

const MAX_INSTR = 15;

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
    console.log (userInstructions);
    console.log (userInstructions.match(/^L|M|N/));

   if ((userInstructions.length > MAX_INSTR) || (userInstructions === undefined) || (userInstructions.match(/^L|M|N/)))
    {return undefined}

   else {return userInstructions}  
   
}    

export function coordinatesInRange () {

}

export function isUnoccupied () {

}

