export function move (RoverID: string, startingPoint: string, instructions: string) {

  console.log (RoverID, startingPoint, instructions);

    interface RoverPosition {
        Roverid: string;
        xPosition: number;
        yPosition: number;
        orientation: string,   
    };

    //The Rover is set up for initialisation
    let restingPosition: RoverPosition = {
      Roverid: "",
      xPosition: 0,    
      yPosition: 0,
      orientation: "",
    };

    initialiseRover(RoverID, startingPoint);

    function initialiseRover (RoverID: string, startingPoint: string) {

      restingPosition.Roverid = RoverID;
      restingPosition.xPosition = Number(startingPoint[0]); 
      restingPosition.yPosition = Number(startingPoint[1]); 
      restingPosition.orientation = (startingPoint[2]);

    }

    function findNextPosition (position: RoverPosition, instruction: string) {

          //Move one point along the same axis
          if (instruction === "M") {
            if (position.orientation === "N") {movingPosition.yPosition += 1}
             else if (position.orientation === "S" ) {movingPosition.yPosition -= 1}
             else if (position.orientation ===  "E") {movingPosition.xPosition -= 1} 
             else if (position.orientation ===  "W") {movingPosition.xPosition += 1}
          } 

         //Pivot left 90º
         if (instruction === "L") {
          if (position.orientation === "N") {movingPosition.orientation = "W"}
          else if (position.orientation === "S") {movingPosition.orientation = "E"}
          else if (position.orientation === "E") {movingPosition.orientation = "N"} 
          else if (position.orientation === "W") {movingPosition.orientation = "S"} 
        }

        //Pivot right 90º
        if (instruction === "R") {
            console.log ('in R');
          if (position.orientation === "N") {movingPosition.orientation = "E"; console.log (movingPosition)}
          else if (position.orientation === "S") {movingPosition.orientation = "W"}
          else if (position.orientation ===  "E") {movingPosition.orientation = "N"} 
          else if (position.orientation ===  "W") {movingPosition.orientation = "S"} 

             console.log (movingPosition, 'inside positionfunction');
          }  

        //Pass the Rover's updated position back to the next instruction 
        return movingPosition

        }

        //Start the Rover from its initial position
        let movingPosition = restingPosition;

        for (let i = 0; i < (Array.from(instructions).length); i++) {

            //The Rover's next position is calculated from the most recent movingPosition values set in findNextPosition
            findNextPosition (movingPosition, instructions[i]);
        }

        //Write final cooordinates out for unit test purposes

       const cooordinates = (movingPosition.Roverid + ' ' + movingPosition.xPosition.toString() +  movingPosition.yPosition.toString () + movingPosition.orientation);
       return cooordinates
       
     }





