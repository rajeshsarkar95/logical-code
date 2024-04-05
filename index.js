const { isUtf8 } = require("buffer");
const fs =require("fs");
const path =require("path");
const dirPath = path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'this is a simple txt')

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filePath,'and file is apple.txt',(err)=>{
//     if(!err) console.log('file is updated')
// })
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('file is renameed') 
// })

fs.unlinkSync(`${dirPath}/fruit.txt`)

