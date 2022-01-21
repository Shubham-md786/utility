#! /usr/bin/env node

const yargs = require("yargs");
const chalk = require("chalk");
let hash = yargs.argv._.join(' ');
let params = yargs.argv;
if(!hash) {
	return console.log('No Data provided for decryption')
}
if(!params.p || !params.password) {
	return console.log('please provide password');
}
if(!params.s || !params.salt) {
	return console.log('please provide salt');
}
const options = {
	password: process.env.encryptionPassword || `${params.p || params.password}`,
	passwordSalt: `${params.s || params.salt}`
};

const encryption = require('encryption-se')(options);
encryption.decrypt(`${hash}`).then((text) => {
	// 'enc' contains encrypted string in base64 format
	console.log(chalk.blue(`Hash ==> ${hash}`))
	console.log(chalk.green(`Decoded-text ==> ${text}`))
	console.log(chalk.yellow(`Password ==> ${params.password}`))
	console.log(chalk.yellow(`Salt ==> ${params.salt}`))
	console.log(chalk.white.bold(`Algorithm ==> `))
}).catch((err) => {
	// This is to handle errors
	console.log(err)
})
