import { coordinates } from "./moveRover";

export const activeRovers = ['a1', 'g56'] as const;

const plateau = {
    x: 4,
    y: 4, 
}


//Only valid IDs can be entered
export function validRoverID (ID: string): "a1" | "g56" | undefined {

  return (activeRovers.find (activeRover => activeRover === ID))
}

//Instructions are invalid if undefined, longer than 15 characters, or contain non-L/M/R characters
export function validInstructions (userInstructions: string) {

    const isNotValid = /[^LMR]/i;
    const MAX_INSTR = 15;

   return (
     (userInstructions.length > MAX_INSTR) || 
     (userInstructions === undefined) || (userInstructions === '') || 
     ((userInstructions).match(isNotValid))
   )? false : true

}    

//No single instruction can allow the Rover to go 'off plateau'
export function coordinatesInRange (workingCoordinates: coordinates) {

    return (
    (workingCoordinates.x >= 0) && (workingCoordinates.x <= plateau.x) &&
    (workingCoordinates.y >= 0) && (workingCoordinates.y <= plateau.y)
    ) ?  true : false

}

//This is a stub: it will check the Rover's position against others
export function coordinatesUnoccupied (workingCoordinates: coordinates) {

    let otherRoverLocations: coordinates[];
    //if current coordinates are not found in the list,true; else false
    //other Rover coords would be retrieved from the positions file

    return true

}

