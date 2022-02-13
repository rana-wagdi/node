const fs = require('fs');
const http = require('http');
const url = require('url');


const data = fs.readFileSync(`${__dirname}/data-json/products.json`, 'utf-8')
const dataObj = JSON.parse(data);




const server = http.createServer((req, res)=>{
const pathName = req.url

console.log(pathName)

if(pathName ==='/' || pathName === '/home'){

    res.end('<h1>welcome to our APIs</h1>')
    
} else if (pathName === '/product') {
    res.writeHead(200, {'Content-type': 'application/json' })
    res.end(data)
}
})







server.listen(4000, '127.0.0.1', ()=>{
console.log('Listen to requsets on port 4000')
})