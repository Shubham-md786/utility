#! /usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const { base64encode } = require('nodejs-base64');


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter file path name => ', name => {

  try{

     let fileCreate = name.split(".")[0];

     if(fileCreate === "") fileCreate = "encFile"

     function base64_encode(file) {

     var bitmap = fs.readFileSync(file);
     
     return new Buffer(bitmap).toString('base64');
  }
     var base64str = base64_encode(name);

     fs.writeFileSync(`${fileCreate}.txt`,base64str);

     console.log(chalk.green.bold(`\nFile has been created => ${fileCreate}.txt\n`))
     readline.close();

  }catch(err){

     console.log(chalk.red.bold("\nFile not found\n"));
     readline.close();

  }
});
