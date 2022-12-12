const fs = require("fs");

// fs.writeFile("./FaAsync/read.txt","today is awesome day :) ", (err)=>{
//     console.log("File is created");
// });

// fs.appendFile("./FaAsync/read.txt"," have a good day",(err)=>{
//     console.log("Task Completed");
// })

fs.readFile('./FaAsync/read.txt','utf8',(err,data)=>{
    console.log(data);
});