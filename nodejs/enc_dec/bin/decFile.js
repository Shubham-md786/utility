#! /usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
readline.question('Enter file path name => ', name => {
	try {
		let base64File = fs.readFileSync(name, 'utf8')
		const arr = base64File.toString().replace(/\r\n/g, '\n').split('\n');
		let decode = Buffer.from(arr[1], 'base64')
		fs.writeFile(arr[0], decode, function(err) {
			console.log(chalk.green.bold(`\nFile created suceesfully => ${arr[0]}\n`));
		})
		readline.close();
	} catch(err) {
		console.log(chalk.red.bold(`\nFile not found\n`));
		readline.close();
	}
})
