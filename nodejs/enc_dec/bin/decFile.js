#! /usr/bin/env node

//core module
const fs = require('fs');
const path = require('path');
//npm module
const chalk = require('chalk');
const yargs = require("yargs");

const inputFile = yargs.argv._;


if(!inputFile) return console.log(chalk.red.bold('No file provided for decryption'))

inputFile.forEach(name =>{
	try {

		let base64File = fs.readFileSync(name, 'utf8')
		const arr = base64File.toString().replace(/\r\n/g, '\n').split('\n');
		let decode = Buffer.from(arr[1], 'base64')
		fs.writeFile(arr[0], decode, function(err) {
			console.log(chalk.green.bold(`\nFile created suceesfully => ${arr[0]}\n`));
		})

	} catch(err) {

		console.log(chalk.red.bold(`\nFile not found\n`));

	}
})
