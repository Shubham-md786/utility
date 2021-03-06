#! /usr/bin/env node

const yargs = require("yargs");
const chalk = require("chalk");
let hash = yargs.argv._.join(' ');
let params = yargs.argv;
if(!hash) {
	return console.log(chalk.red.bold('\nNo Data provided for decryption\n'))
}
if(!params.p) {
	return console.log(chalk.red.bold('\nplease provide password\n'));
}
if(!params.s) {
	params.s = 'En-crypt'
}
const options = {
	password: process.env.encryptionPassword || `${params.p}`,
	passwordSalt: `${params.s}`
};

const encryption = require('encryption-se')(options);
encryption.decrypt(`${hash}`).then((text) => {
	// 'enc' contains encrypted string in base64 format
	//console.log(chalk.blue(`Hash ==> ${hash}`))
	console.log(chalk.green(`\nDecoded-text ==> ${text}\n`))
	//console.log(chalk.yellow(`Password ==> ${params.p}`))
	//console.log(chalk.white.bold(`Salt ==> ${params.s}`))
	//console.log(chalk.white.bold(`Algorithm ==> `))
}).catch((err) => {
	// This is to handle errors
	console.log(chalk.red.bold('\nWrong password or hash or salt or algotithm\n'))
})
