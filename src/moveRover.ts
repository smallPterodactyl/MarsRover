

const moveRover = (RoverID, instructions, startPosition) => {

  console.log ('start');

    interface RoverPosition {
        Roverid: string;
        xPosition: number;
        yPosition: number;
        orientation: string;    
    };

    //The file has been read in. We populate instructions array.
    // We then split incoming position string into x, y, and orientation.
    
      let restingPosition: RoverPosition = {
        Roverid: 'a01',
        xPosition: 1,
        yPosition: 2,
        orientation: 'N',
      };
     
      //REMEMBER SCOPE ISSUES:
      //we need to maintain latest position of Rover while we loop round!
     
      
      let instruction = "R";

      function findNextPosition (position: RoverPosition, instruction) {
        console.log (position, instruction)

        let movingPosition: RoverPosition = {
          Roverid: 'a01',
          xPosition: 1,
          yPosition: 2,
          orientation: 'N',
        };

        switch (instruction) {
          case "M":
            if (position.orientation === "N") {movingPosition.yPosition += 1}
             else if (position.orientation === "S" ) {movingPosition.yPosition -= 1}
             else if (position.orientation ===  "E") {movingPosition.xPosition -= 1} 
             else if (position.orientation ===  "W") {movingPosition.xPosition += 1}


          case "R":
            console.log ('in R');
            if (position.orientation === "N") 
               {console.log ('in W'); movingPosition.orientation = "W"; console.log (movingPosition.orientation); }
             else if (position.orientation === "S" ) {movingPosition.orientation = "E";}
             else if (position.orientation ===  "E") {movingPosition.orientation = "N";} 
             else if (position.orientation ===  "W") {movingPosition.orientation = "S";} 


          case "L":
            if (position.orientation === "N") {position.orientation = "E"}
             else if (position.orientation === "S" ) {movingPosition.orientation = "W"}
             else if (position.orientation ===  "E") {movingPosition.orientation = "S"} 
             else if (position.orientation ===  "W") {movingPosition.orientation = "N"} 

             
             //Could we call this function iteratively and always return the latest x, y, and orientation?
             //for the last iteration we need to set resting position

             //we should have a separate function for setting the resting position

        }

        console.log (movingPosition);

      }

      findNextPosition (restingPosition, instruction);
      

      }

    
   moveRover ('a1', 'M', '1 1 N');

