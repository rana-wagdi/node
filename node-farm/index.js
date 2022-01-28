const fs = require('fs'); //fs stand for file system
//=> By using fs this module here will get access to function for reading and writing data to the file system


//Blocking, synchronous way
// const textIn= fs.readFileSync('text/input.txt', 'utf-8')

// console.log(textIn)

// const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()};`

// fs.writeFileSync('text/output.txt', textOut) ///write file ya3ni add a new file fo el output da

// console.log('File Written!')



//Non-blocking, asynchronous way
fs.readFile('text/starttttt.txt', 'utf-8', (err, data1)=>{
    if(err){
        return console.log('ERROR!')
    }
    fs.readFile(`text/${data1}.txt`, 'utf-8', (err, data2)=>{
    
        console.log(data2)
   
    fs.readFile('text/append.txt', 'utf-8', (err, data3)=>{
    
        console.log(data3)

        fs.writeFile('text/final.txt', `${data2} \n ${data3}`, 'utf-8', err =>{
                console.log('yoy file has been written')
        })
    })
})
})
console.log('File Writtens!')