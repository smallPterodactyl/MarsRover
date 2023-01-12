
import {
    move
   
   } from "../src/moveRover";

      
describe("move", () => {

    /* Define error handling later */
  /*test ("throws on errors", () => {
      function aLotOfErrors () {
      moveRover (undefined);
      }
      expect(aLotOfErrors).toThrow (new Error("bla bla bla"));  
  }); 

  //file import fails
  //too many or incorrect instructions
  //incorrect characters
  //HANDLE IN ANOTHER FILE?

 */

  //Unit tests, moveRover.ts

  test("converts a single instruction (L, R, M) correctly", () => {
    expect(move('a1', '1 1 N', 'L')).toBe('a1', '1 2 N', 'M');
  });


});
   
 
