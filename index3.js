const fs = require("fs");

// const data = fs.readFileSync("read.txt","utf8");
// console.log(data);
// console.log("after the data");

const data = fs.readFile("read.txt","utf8",(err,data)=>{
    console.log(data);
    // return data;
});
// console.log(data);
console.log("before the data");
