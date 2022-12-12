//core module file system
/*
consider core module to be same as javscript libs.
a set of function you want to include in your application


Node.js had a set of build-in modules which you an use without any further installation.

Node modules gives us power to play with os and file system etc
*/

//to use a module we first require it

const fs = require("fs");

//it work like maps
// if a file is not preset it create a file
// else replace old data with new data to existing file
fs.writeFileSync('read.txt',"Welcome to Node");

// want to add some data to existing data
//will append it 
const dta = "How are you";
//create new file if not present or append data at the end if present
fs.appendFileSync('read.txt',dta);

//reading file data of a file


// const buf = fs.readFileSync('read.txt');
// console.log(buf);


// if we do this we will get data in the form of buffer
//(not available in brower's javascript)
//buffer is mainly used to store binary data
//while reading form a file or receiving packets over the network


const buf = fs.readFileSync('readWrite.txt');
let originalData = buf.toString();

console.log(originalData);


//to rename a file
fs.renameSync('read.txt','read.txt');

const buff = fs.readFileSync('read.txt');
originalData = buff.toString();

console.log(originalData);
