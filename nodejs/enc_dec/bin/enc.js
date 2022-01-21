#! /usr/bin/env node

const yargs = require("yargs");
const chalk = require("chalk");

let text = yargs.argv._.join(' ');
let params = yargs.argv;

if(!text) {return console.log('No text provided for encryption')}

if(!params.p || !params.password){
   params.password = 'En-crypt'
}
if(!params.s || !params.salt){
   params.salt = 'En-crypt'
}

const options = {
	password: process.env.encryptionPassword || `${params.p || params.password}`,
	passwordSalt: `${params.s || params.salt}`
};
const encryption = require('encryption-se')(options);
encryption.encrypt(`${text}`).then(enc => {
	// 'enc' contains encrypted string in base64 format
       console.log (chalk.blue(`Message ==> ${text}`))
       console.log(chalk.green(`Encoded-text ==> ${enc}`))
       console.log(chalk.yellow(`Password ==> ${params.password}`))
       console.log(chalk.yellow(`Salt ==> ${params.salt}`))
       console.log(chalk.white.bold(`Algorithm ==> `))

}).catch((err) => {
	// This is to handle errors
	console.log(err)
})
