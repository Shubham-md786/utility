#! /usr/bin/env node

const yargs = require("yargs");
const chalk = require("chalk");

let text = yargs.argv._.join(' ');
let params = yargs.argv;

if(!text) return console.log(chalk.red.bold('\nNo text provided for encryption\n'))

if(!params.p){
   return console.log(chalk.red.bold('\nplease provide password\n'));
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
       console.log (chalk.blue(`\nMessage ==> ${text}`))
       console.log(chalk.green(`\nEncoded-text ==> ${enc}`))
       console.log(chalk.yellow(`\nPassword ==> ${params.p}`))
       console.log(chalk.white.bold(`\nSalt ==> ${params.s}\n`))
       //console.log(chalk.white.bold(`Algorithm ==> `))

}).catch((err) => {
	// This is to handle errors
	console.log(chalk.red.bold('\nSomething went wrong\n'))
})
