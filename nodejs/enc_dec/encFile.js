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

if(!inputFile) return console.log(chalk.red.bold('No file provided for encryption'));

if(params.z){fs.mkdirSync('enc_file');}

inputFile.forEach(name =>{

	try {
		let fileName = (path.basename(name));
		let fileCreate = fileName.substring(0, fileName.lastIndexOf(".") );

		function base64_encode(file) {
			var bitmap = fs.readFileSync(file);
			const buffer = new Buffer(bitmap).toString('base64');
			return `${fileName}\n${buffer}`
		}
		var base64str = base64_encode(name);
		
		fs.writeFileSync(`${fileCreate}.txt`, base64str);
		
		if(params.z){
			fs.rename(`./${fileCreate}.txt`,`./enc_file/${fileCreate}.txt`,(err)=>{if(err) console.log(chalk.red.bold(`\nCannot zip\n`))})
		}else{
			console.log(chalk.green.bold(`\nFile has been created => ${fileCreate}.txt\n`))
		}
		
	} catch(err) {
		console.log(err)
		console.log(chalk.red.bold(`\nFile not found => ${name}\n`));
		
	}
})
if(params.z){
  async function createZipArchive() {
    try {
      const zip = new AdmZip();
      const outputFile = "encrypt_file.zip";
      zip.addLocalFolder("./enc_file");
      zip.writeZip(outputFile);
      console.log(chalk.green.bold(`\nCreated ${outputFile} successfully\n`));                                } catch (e) {
        console.log(`Something went wrong. ${e}`);
      }
   }
   createZipArchive();
   fs.rmSync('./enc_file',{recursive: true, force: true});
}
