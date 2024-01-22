// console.log("Hello World")

//packages
//1. In Built packages
//2. Third Party Packages
//3. Custom build packages

// const os = require('os')

// console.log(os.cpus())
// console.log(os.uptime())
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(os.freemem())


//fs - filesystem
// const fs = require('fs')

//asynchronus
// fs.writeFile('sample.txt',"This is new content",'utf8',(err)=>{
//     if(err)
//         console.log(err)
//     else
//     {
//         fs.readFile('sample.txt','utf8',(err,data)=>{
//             if(err)
//                 console.log(err)
//             else
//                 console.log(data)
//         })
//     }
// })

//synchronous
// try {
//     fs.writeFileSync('sample1.txt',"This is synchronous way of writing the file",'utf8')
//     fs.appendFileSync('sample1.txt'," I am appended data",'utf8')
//     let data = fs.readFileSync('sample1.txt','utf8')
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }



// const PORT = 8000
// const http = require('http')
// let students = [{"firstname":"Srinidhi","lastname":"Sridhar","email":"srinidhi123@gmail.com","batch":"B52WEE","address":{"state":"Bihar","city":"Patna","zipcode":"12345"},"id":"2"},{"firstname":"Aravinth","lastname":"Senthil Kumar","email":"aravinth@gmail.com","batch":"B53WEE","address":{"state":"Tamil Nadu","city":"Trichy","zipcode":"43211"},"id":"3"},{"firstname":"Manuneethi","lastname":"Cholan","email":"cholan@yahoo.com","batch":"B20","address":{"state":"Tamil Nadu","city":"Coimbatore","zipcode":"632000"},"id":"5"},{"firstname":"Rishi","lastname":"Somnath","email":"rishi@gmail.com","batch":"B22","address":{"state":"Karnataka","city":"Bangalore","zipcode":"738789"},"id":"6"}]

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "Content-Type":"application/json"
//     })
//     res.end(JSON.stringify(students))
// })

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "Content-Type":"text/html"
//     })
//     res.end(`
//     <h1>Welcome to Node Server</h1>
//     `)
// })

// server.listen(PORT,()=>console.log(`App listening to ${PORT}`))


// const PORT = 8000
// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req,res)=>{
//     let data = fs.readFileSync('index.html','utf8')
//     res.writeHead(200,{
//         "Content-Type":"text/html"
//     })
//     res.end(data)
// })
// server.listen(PORT,()=>console.log(`App listening to ${PORT}`))
