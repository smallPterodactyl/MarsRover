
import { validRoverID,
         validInstructions,
         coordinatesInRange,
         coordinatesUnoccupied } from "../src/validateTasks";

import { coordinates } from "../src/moveRover";         


   const activeRovers = ['a1', 'g56', 'sky1', 'bigFatRover'] 
   const isNotValid = /[^LMR]/i;
   const MAX_INSTR = 15;
   const plateau = {
    x: 4,
    y: 4, 
}

//Validates Rover IDs
describe("validRoverID", () => {

  test("recognises a Rover ID from activated Rovers", () => {
    expect(validRoverID('a1')).toStrictEqual('a1');
  });

  test("rejects an inactive Rover ID", () => {
    expect(validRoverID('a2')).toStrictEqual(undefined);
  });

  test("rejects a blank user entry", () => {
    expect(validRoverID('')).toStrictEqual(undefined);
  });

});
   
//Validates navigation instruction formats
describe("validInstructions", () => {

    test("recognises a valid instruction string in standard upper case", () => {
      expect(validInstructions('MMLLRRRR')).toBe(true);
    });

    test("recognises a valid instruction string with lowercase/mixed case letters", () => {
        expect(validInstructions('mllRrlm')).toBe(true);
      });
  
    test("rejects empty instructions", () => {
        expect(validInstructions('')).toBe(false);
    });
  
    test("rejects instructions of more than 15 characters", () => {
        expect(validInstructions('MMMLLLRRRRLLMMRRLLLL')).toBe(false);
    });

    test("rejects instructions with invalid characters", () => {
        expect(validInstructions('I Am A Very Naughty Instruction')).toBe(false);
    });
  
  });

//Checks Rover remains in bounds
describe("coordinatesInRange", () => {

    test("returns true for a positive x coordinate less than 4", () => {
      expect(coordinatesInRange({ x:3, y:2 })).toBe(true);
    });

    test("returns true for a positive y coordinate less than 4", () => {
        expect(coordinatesInRange({ x:3, y:2 })).toBe(true);
      });

      test("returns true for an x coordinate of 0", () => {
        expect(coordinatesInRange({ x:0, y:3 })).toBe(true);
      });

      test("returns true for a y coordinate of 0", () => {
        expect(coordinatesInRange({ x:4, y:0 })).toBe(true);
      });

      test("returns false for negative coordinates", () => {
        expect(coordinatesInRange({ x:-3, y:0 })).toBe(false);
      });

      test("returns false for negative coordinates", () => {
        expect(coordinatesInRange({ x:2, y:-4 })).toBe(false);
      });

      test("returns false for out of bounds", () => {
        expect(coordinatesInRange({ x:6, y:2 })).toBe(false);
      });

      test("returns false for out of bounds", () => {
        expect(coordinatesInRange({ x:3, y:5 })).toBe(false);
      });

  
  });


  //Tests that a check is in place to control for other Rover locations*
describe("coordinatesUnoccupied", () => {

  test("returns true for current set of hard-coded locations", () => {
    expect(coordinatesUnoccupied({ x:3, y:2 })).toBe(true);
  });

});
  
 //*stub function will always return true for now for hard-coded locations

