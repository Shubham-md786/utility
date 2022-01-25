#! /usr/bin/env node

//core module
const fs = require('fs');
const path = require('path');
//npm module
const chalk = require('chalk');
const yargs = require("yargs");

const inputFile = yargs.argv._

if(!inputFile) return console.log(chalk.red.bold('No file provided for encryption'))

inputFile.forEach(name =>{

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
		
	} catch(err) {

		console.log(chalk.red.bold(`\nFile not found => ${name}\n`));
		
	}
})
