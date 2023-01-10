
interface RoverPosition {
  Roverid: string;
  xPosition: number;
  yPosition: number;
  orientation: string;    
};

export function move (RoverID: string, startingPoint: string, instructions: string) {

  console.log ('start');

    interface RoverPosition {
        Roverid: string;
        xPosition: number;
        yPosition: number;
        orientation: string;    
    };

    //The file has been read in. We populate instructions array.
    // We then split incoming position string into x, y, and orientation.
    
      let movingPosition: RoverPosition = {
        Roverid: RoverID,
        xPosition: 1,    //populate with functions
        yPosition: 2,
        orientation: "N",
      };

      function initialiseRover (_RoverID: string, _startingPoint: string) {
        movingPosition.Roverid = _RoverID;
        movingPosition.xPosition = Number(_startingPoint); //char or split
        movingPosition.yPosition = Number(_startingPoint); //char or split
        movingPosition.orientation = _startingPoint; //char or split

      }
    

      function findNextPosition (position: RoverPosition, instruction: string) {
        console.log ('function start ', position, instruction);


        switch (instruction) {
          case "M":
            if (position.orientation === "N") {movingPosition.yPosition += 1}
             else if (position.orientation === "S" ) {movingPosition.yPosition -= 1}
             else if (position.orientation ===  "E") {movingPosition.xPosition -= 1} 
             else if (position.orientation ===  "W") {movingPosition.xPosition += 1}


          case "R":
            if (position.orientation === "N") {movingPosition.orientation = "W";}
             else if (position.orientation === "S" ) {movingPosition.orientation = "E";}
             else if (position.orientation ===  "E") {movingPosition.orientation = "N";} 
             else if (position.orientation ===  "W") {movingPosition.orientation = "S";} 


          case "L":
            if (position.orientation === "N") {position.orientation = "E"}
             else if (position.orientation === "S" ) {movingPosition.orientation = "W"}
             else if (position.orientation ===  "E") {movingPosition.orientation = "S"} 
             else if (position.orientation ===  "W") {movingPosition.orientation = "N"} 

             //for the last iteration we need to set resting position

           //we should have a separate function for setting the resting position

        }

        //console.log (movingPosition, 'in function');

      }

      for (let i = 0; i < (Array.from(instructions).length); i++) {

        findNextPosition (movingPosition, instructions[i]);
        console.log (movingPosition, 'after function executes');

      }



      }

    
    move ('a1','2 3 S', 'L');

