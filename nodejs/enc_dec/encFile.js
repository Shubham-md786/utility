#! /usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
readline.question('Enter file path name => ', name => {
	try {
		let fileName = (path.basename(name));
		let fileCreate = fileName.split(".")[0];

		function base64_encode(file) {
			var bitmap = fs.readFileSync(file);
			const buffer = new Buffer(bitmap).toString('base64');
			return `${fileName}\n${buffer}`
		}
		var base64str = base64_encode(name);
		fs.writeFileSync(`${fileCreate}.txt`, base64str);
		console.log(chalk.green.bold(`\nFile has been created => ${fileCreate}.txt\n`))
		readline.close();
	} catch(err) {
		console.log(chalk.red.bold("\nFile not found\n"));
		readline.close();
	}
});
