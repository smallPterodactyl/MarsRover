import {move} from "../src/moveRover";

//Will now need a mock function to work

//Unit tests for central findNextPosition() logic
describe("move", () => {


//Turn left
  test("converts a single instruction (L) correctly", () => {
    expect(move('a1', '12N','L')).toStrictEqual('a1 12W');
  });

  test("converts a single instruction (L) correctly", () => {
    expect(move('a1', '12E','L')).toStrictEqual('a1 12N');
  });

  test("converts a single instruction (L) correctly", () => {
    expect(move('a1', '12S','L')).toStrictEqual('a1 12E');
  });

  test("converts a single instruction (L) correctly", () => {
    expect(move('a1', '12W','L')).toStrictEqual('a1 12S');
  });
  
  

  // Turn right
  test("converts a single instruction (R) correctly", () => {
    expect(move('a1', '21N','R')).toStrictEqual('a1 21E');
  });

 test("converts a single instruction (R) correctly", () => {
    expect(move('a1', '21E','R')).toStrictEqual('a1 21N');
  });

  test("converts a single instruction (R) correctly", () => {
    expect(move('a1', '21S','R')).toStrictEqual('a1 21W');
  });

  test("converts a single instruction (R) correctly", () => {
    expect(move('a1', '21W','R')).toStrictEqual('a1 21S');
  });
 

  //Advance one coordinate in the same direction
   test("converts a single instruction (M) correctly", () => {
    expect(move('a1', '32N','M')).toStrictEqual('a1 33N');
  });

  test("converts a single instruction (M) correctly", () => {
    expect(move('a1', '32E','M')).toStrictEqual('a1 22E');
  });

  test("converts a single instruction (M) correctly", () => {
    expect(move('a1', '32S','M')).toStrictEqual('a1 31S');
  });

  test("converts a single instruction (M) correctly", () => {
    expect(move('a1', '32W','M')).toStrictEqual('a1 42W');
  });

});
   
 
