//READING INPUT& WRITING OUTPUT(Sync)

// const readline=require('readline');
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.question('please enter your name:',(name)=>{
//     console.log('you entered:'+name);
//     rl.close();
// })

// rl.on('close',()=>{
//     console.log('Interface closed');
//     process.exit(0);
// })



//READING & WRITING TO A FILE

// const fs=require('fs');
// const text=fs.readFileSync('./sample.txt','utf-8');
// console.log(text);
// let content=`Data read from input.txt:${text}. \n Date created${new Date()}`
// fs.writeFileSync('./output.txt',content)

//READING & WRITING FILE(ASYNC)

// const fs=require('fs');
// fs.readFile('./file/sample.txt','utf-8',(err1,data1)=>{
//     console.log(data1)
//     fs.readFile(`./file/${data1.trim()}.txt`,`utf-8`,(err2,data2)=>{
//         console.log(data2);
//         fs.readFile('./file/append.txt','utf-8',(err3,data3)=>{
//             console.log(data3);
//             fs.writeFile('./file/sample.txt',`${data2}\n\n${data3}\n\nDate created ${new Date()}`,()=>{
//                 console.log('file written successfully')
//             })
//         })
//     })
   
// })
// console.log('Reading file...')

// CREATE A  WEB SERVER
//STEP 1:CREATE A SERVER
// const fs=require('fs');
// const html=fs.readFileSync('./index.html','utf-8');
// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.end(html)
//     console.log('A new request received');
// });
// //STEP2:START THE SERVER

// server.listen(3000,()=>{
//     console.log('server has started')
// })

//ROUTER CREATION

// const http=require('http');
// const fs=require('fs');
// const html=fs.readFileSync('./index.html','utf-8')
// const server=http.createServer((req,res)=>{
//     let path=req.url;

//     if(path==='/'||path.toLocaleLowerCase()==='/home'){
//         res.end(html);
//     }else if(path==='/'||path.toLocaleLowerCase()==='/about'){
//         res.end('You are in about page');
//     }else if(path==='/'||path.toLocaleLowerCase()==='/contact'){
//         res.end('You are in contact page');
//     }else {
//         res.end('Error 404:Page not found')
//     }
// });

// server.listen(3000,()=>{
//     console.log('server has started');
// })
// const fs=require('fs');
// console.log('Program has started');
//Stored in the 1st phase


//Stored in 2nd phase
// fs.readFile('./output.txt',()=>{
//     console.log('File read complete');
//     setTimeout(() => {
//         console.log('Timer callback executed')
//     }, 0);

//     setImmediate(()=>{console.log('SetImmediate callback executed')})

//     process.nextTick(()=>{console.log('Process .nextTick callback executed')})
// })
// //Stored in 3rd phase

// console.log('Programm has completed')

//EVENT EMITTER

// const EventEmitter=require('events');
// const myEmitter=new EventEmitter;

// myEmitter.on('someEvent',()=>{
//     console.log('Event occured');
// });
// myEmitter.emit('someEvent');

//MIDDLEWARE

// const express=require('express');
// var bodyParser=require('body-parser');
// var app=express();
// app.listen(3000);
// app.use((req,res,next)=>{
//     console.log('hit on middle ware');
//     next();
// });

// app.get('/',(req,res)=>{
//     console.log(req);
//     res.send('index page');
// });

//URL PARAMS

// const express=require('express');
// const bodyParser=require('body-parser');
// const app=express();
// app.listen(3000);
// app.get('/',(req,res)=>{
//     console.log(req);
//     res.send('index page');
// });
// app.get('/about',(req,res)=>{
//     res.s

// end(req.query.name)
// });

// Asynchronous callbacks

// function callback(){
//     document.getElementById('demo').innerHTML='Hello world';

// }
// document.getElementById("btn").addEventListener("click",callback);

