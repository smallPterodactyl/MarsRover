import * as readline from 'node:readline';

export function print(str: string): void {
	console.log(str);
	console.log();
}

export function clear(addTopBorder: boolean): void {
	console.clear();
	if (addTopBorder) {
		print('------------------------------------');
	}
}

// Reads from node interface
const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

//Prompt and call a callback using the input
export function askQuestion(question: string, callback: (arg: string) => void) {
	reader.question(`${question} `, callback);
}
