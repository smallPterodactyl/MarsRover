"use strict";
exports.__esModule = true;
exports.askQuestion = exports.clear = exports.print = void 0;
var readline = require("node:readline");
function print(str) {
    console.log(str);
    console.log();
}
exports.print = print;
function clear(addTopBorder) {
    console.clear();
    if (addTopBorder) {
        print('------------------------------------');
    }
}
exports.clear = clear;
// Reads from node interface
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Prompt and call a callback using the input
function askQuestion(question, callback) {
    reader.question("".concat(question, " "), callback);
}
exports.askQuestion = askQuestion;
