// Async CRUD Challenge
const fs = require("fs");

// fs.mkdir("Async",(err)=>{
//     console.log("new Folder Created");
// });

// fs.writeFile("./Async/bio.txt","New File Created",()=>{
//     console.log("New File Created");
// })

// fs.appendFile("./Async/bio.txt"," More and More Data" ,(err)=>{
//     console.log("More Data Added");
// });

// fs.readFile("./Async/bio.txt","utf8",(err,data)=>{
//     console.log(data);
// })

// fs.rename("./Async/bio.txt","./Async/mybio.txt",(err)=>{
//     console.log("File Name Changed");
// });

// fs.unlink("./Async/mybio.txt",(err)=>{
//     if(err) throw err;
//     console.log("Done Deleting");
// })

fs.rm("Async",() => console.log("ok"));