#! /usr/bin/env node

const yargs = require("yargs");
const chalk = require("chalk");

let text = yargs.argv._.join(' ');
let params = yargs.argv;

if(!text) return console.log(chalk.red.bold('No text provided for encryption'))

if(!params.p){
   return console.log(chalk.red.bold('please provide password'));
}
if(!params.s){
   params.s = 'En-crypt'
}

const options = {
	password: process.env.encryptionPassword || `${params.p}`,
	passwordSalt: `${params.s}`,
};
const encryption = require('encryption-se')(options);
encryption.encrypt(`${text}`).then(enc => {
	// 'enc' contains encrypted string in base64 format
       console.log (chalk.blue(`Message ==> ${text}`))
       console.log(chalk.green(`Encoded-text ==> ${enc}`))
       console.log(chalk.yellow(`Password ==> ${params.p}`))
       console.log(chalk.white.bold(`Salt ==> ${params.s}`))
       //console.log(chalk.white.bold(`Algorithm ==> `))

}).catch((err) => {
	// This is to handle errors
	console.log(chalk.red.bold('Something went wrong'))
})
