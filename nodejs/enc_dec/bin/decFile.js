#! /usr/bin/env node

//core module
const fs = require('fs');
const path = require('path');
//npm module
const chalk = require('chalk');
const yargs = require("yargs");
const AdmZip = require("adm-zip");

const params = yargs.argv;
const inputFile = yargs.argv._;


if(!inputFile) return console.log(chalk.red.bold('No file provided for decryption'));

if(params.z){fs.mkdirSync('dec_file');}

inputFile.forEach(name =>{
	try {

		let base64File = fs.readFileSync(name, 'utf8')
		const arr = base64File.toString().replace(/\r\n/g, '\n').split('\n');
		let decode = Buffer.from(arr[1], 'base64')
		fs.writeFileSync(arr[0], decode);
		if(params.z){
			fs.rename(`./${arr[0]}`,`./dec_file/${arr[0]}`,(err)=>{if(err) console.log(chalk.red.bold(`\nCannot zip\n`))});
		}else{
		console.log(chalk.green.bold(`\nFile created suceesfully => ${arr[0]}\n`));
		}

	} catch(err) {
		console.log(err)
		console.log(chalk.red.bold(`\nFile not found\n`));

	}
})
if(params.z){
  async function createZipArchive() {
    try {
      const zip = new AdmZip();
      const outputFile = "decrypt_data.zip";
      zip.addLocalFolder("./dec_file");
      zip.writeZip(outputFile);
      console.log(chalk.green.bold(`\nCreated ${outputFile} successfully\n`));                                } catch (e) {
        console.log(`Something went wrong. ${e}`);
      }
   }
   createZipArchive();
   fs.rmSync('./dec_file',{recursive: true, force: true});
}
