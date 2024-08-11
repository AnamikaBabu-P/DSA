// var url=require("url");
// var http=require("http");
// var fs=require("fs");
// http.createServer(function(req,res{
//   var parsed=url.parse(req.url);
//   fs.readFile('.'+parsed.pathname,function(err,data){
//     if(err){
//         res.writeHead(404,{'Content-type':'text/html'});
//         return res.end('Error page not found');
//     }
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(3000);
// 

// var express=require("express");
// var bodyParser=require("body-parser")
// var app=express();
// app.listen(8000);
// app.use(function(req,res,next){
    
//     next();
// })
// app.get('/',function(req,res){
   
//       res.send('index page');
     
// })
// app.get("/about",function(req,res){
//     res.send("about page")
// })
// app.get ('/students',function(req,res){
//     console.log(req.body);
//     res.send('students')
// })
// app.post('/login',function(req,res){
//     res.send("it is a login request")
// })

// What is Node js?

//*It is a javascript runtime environment built on Chrome's v8 javascript engine.
//*we can only execute javascript in runtime environment of a browser.
//*It is an open-source ,cross-platform,back-end JavaScript runtime environment that
// runs on the v8 engine and executes JavaScript code outside a web browser.
//*Open Source=source code is publicly available for sharing and modification.
//*Cross Platform =available on Mac,Windows and Linux
//*JavaScript runtime environment =provides all the necessary components in order to use and run
//a javascript program outside the browser.

//JavaScript Engine

//It is a program that converts javascript code that developers write into machine code 
//that allows a computer to perform specific tasks.
//It is a program whose responsibility is to execute javascript code.
//*All modern browsers come with their own version of the javascript engine but the most popular one is google's v8 engine.


//V8 JavaScript Engine

//*V8 is a free and open-source javascript engine written in c++ ,developed by 
//google that powers google chrome.

//ADVANTAGE OF Node Js

//*Very fast in code execution
//*can generate dynamic page content
//*can create,open,read,write,delete,and close files on the server.
//*can collect form data.
//*can add ,delete,modify data in your database

//DISADVANTAGE of node js

//*It has limited process power.
//*It has asynchronous programming
//*it offers a limited standerd library
//*it has some immature modules
//*it is not ideal for CPU-intensive tasks

//REPL(Read Evaluate Print Loop)

//*It is a programming language environment (console window) that takes single expression as user input and returns the result 
//back to the console after execution
//*It provides a convenient way to quickly test simple Javascript code.

//CLI(command line interface/Interpreter/Input)

//CLI is a command line program that accepts text input to execute operating system functions
 
//NPX(Node Package eXecute)

//*npm is a package management that is used to install, uninstall, and update javascript packages on your workstation.
//*It is used for executing command-line tools that are part of a package without the need for a global or local installation.

//GLOBAL OBJECTS

//*The objects that are available in all modules.
//*These are built in objects/functions that are part of 
//javascript and can be used in our applications without 
//importing any particular module.

//DIR NAME
// console.log(__dirname);

//FILE NAME
// console.log(__filename);

//MODULE

//*A module is an encapsulated and reusable chunk of code that has its own context.
//*In node js each file is treated as a separte module
//*Consider them same as the javascript libraries.A set of functions
//you want to include in your application.
//*A simple or complex functionality organized in single or multiple
//javascript files(library) which can be reused throughout the node.js application

//CORE Modules/BUILT-IN modules

//*Node js has  many built-in modules that are part of the platform and comes with node.js installation
// var http=require('http');
// http.createServer(function(req,res){
//     res.write('Hello from HTTP module');
//     res.end();
// }).listen(3000);



//LOCAL Modules

//we can create our own modules and we can use it in our project.
//1.
// var Calc=require("./ModuleSample.js")
// console.log(Calc.addition(10,20))
// console.log(Calc.multiplication(10,100))
//2.
// var greeting=require('./ModuleSample.js')
// console.log(greeting.name);
// greeting.greet();

//  NPM(Node Package Manager) /THIRD PARTY MODULES

// *When you install node.js you also get npm.
//npm is a node package manager that allows you to install and
// use third-party npm libraries in your code.
// var slug=require("slug");
// console.log(slug('hai how are you'))

// ECMAScript Module (ESM):

//* ESM is considered the official module system of JavaScript and is 
//natively supported in modern browsers. ESM allows for the import and export of modules
// using import and export keywords. This provides more opportunities for optimizations such as static analysis and tree shaking
//*Instead of module.exports,we use the export keyword.
//*It can be default or named;
//*We import the exported variables or functions using the import keyword.
//*If it is a default export, we can assign any name while importing
//*It it is a named export,the import name must be the same.
//  const add=(a,b)=>{
//     return a+b;
//  }
//  export default add;
//NPM LOCAL

//*npm install <package>
//1.This package/module will find on your local node_modules folder and can only be usable for this project.
//2.This package/module can be accessible in using require("package") from code.
//3.This package/module can't be accessible in command line interface.

//NPM GLOBAL

// npm install <package> -g
//This package/module will find on where node is installed in your machine like /usr/local and can be usable everywhere.
//This package/module can't be accessible in using require("package") from code.
//This package/module can be accessible in command line interface.

//NPM INIT

//npm init <initializer> can be used to set up a new or existing npm package.
//Initialize project and create package.json.

//NPM Install

//*It downloads a package and it's dependencies.
//*It can be run with or without arguments.

//NODEMON

//Nodemon is a command-line tool that helps with the speedy development of Node. js applications. It monitors your project 
//directory and automatically restarts your node application when it detects any changes. This means that you do not have to stop and 
//restart your applications in order for your changes to take effect.
//Add a script in your package.json file to start your Node.js application with nodemon. Typically, people use scripts like "start" or "dev."+

//NPM RUN DEV
//A command often used during the development phase of a project to execute the command specified for the "dev" script.

//PACKAGE.JSON

//*Every node.js project has package.json file located in the root folder 
//*Information about node.js project.
//*List of dependencies with version.

//PACKAGE-LOCK.JSON

//*It is automatically generated for any operations where npm modifies either the node_modules tree, or package.json.
//*Dependency Tree: Detailed information on each installed package, its version, sub-dependencies, and their versions.

//CALLBACK(A function that can be passed as a argument)

// function greet (name){
// console.log(`Hello ${name}`);
// }
// function higherOrderFunction(callback){
//     const name='Vishwas';
//     callback(name);
// }
// higherOrderFunction(greet);

//1.SYNCHRONOUS CALLBACKS(A callback which is executed immediately is called a synchronous callback)

// let numbers=[1,2,4,7,3,5,6];
// console.log(numbers.sort((a,b)=>a-b))
// console.log(numbers.filter(n=>n%2 ===0))
// console.log(numbers.map(n=>n/2))

//2.ASYNCHRONOUS CALLBACKS(A callback that is often used to continue or resume code execution after an asynchronous operation has completed.
//                       Callbacks are used to delay the execution of a function until a particular time or event has occured)

// function callback(){
//     document.getElementById('demo').innerHTML='Hello world';
// }
// document.getElementById('btn').addEventListener('click',callback)

//EVENT LOOP

//*Its a mechanism that constantly checks the event queue for pending tasks and executes them one by one.
//*It enables Node js to perform non-blocking I/O operations by delegating these tasks to the operating system and continuing to execute other code in the meantime.
//*A design pattern that orchestrates or co-ordinates the execution of synchronous and asynchronous code in node.js.
//*Event loop-Execution order=1.Any callbacks in the micro task queues are executed.First,tasks in the nextTick queue and only then tasks in the promise queue.
//    2.All callback within the timer queue are executed
//    3.Callbacks in the micro task queues if present are executed.Again,first tasks in the nextTick queue and then tasks in the promise queue
//    4.All callbacks within the I/O queue are executed
//    5.Callbacks in the micro task queues if present are executed.nextTick queue followed by promise queue.
//EVENTS MODULE

//*The events module allows us to work with events in Node.js
//*An event is an action or an occurence that has happened in our application that we can respond to
//*Using the events module ,we can dispatch our own custom events and respond to those custom events in a non-blocking manner.

//EVENT EMITTER

// event emitter is an object that allows developers to implement and work with the observer pattern.
// The observer pattern is a behavioral design pattern where an object, known as the subject or observable, maintains a list of dependents, known as observers, that are notified of any state changes, typically by calling one of their methods.
//You can define custom events using the on method, and you can handle those events with callbacks using the emit method
//Besides on, there are other methods like once for one-time event handling and removeListener to remove a specific listener
//The EventEmitter also has a special event named 'error'. If an error is emitted and there is no listener for it, the program will terminate
//The event emitter pattern is widely used in Node.js for handling various asynchronous operations, such as file I/O, network operations, and more. It provides a flexible and scalable way to manage and respond to events in a program.

// const EventEmitter=require('events');

// const emitter=new EventEmitter;
// emitter.on('order-pizza',(size,topping)=>{
//     console.log(`order received .Baking a ${size} pizza with ${topping}`)
// });
// emitter.emit('order-pizza','large','mushroom');



//HTTP (Hypertext Transfer Protocol)

//*A protocol that defines a format for clients and severs to speak to each other.
//*The client sends an HTTP request and the server responds with an HTTP response.

//HTTP HEADER FIELDS

//1.General:*Request URL,*Request Method,*Status Code,*Remote Address,*Referrer Policy
//2.Response:*Sever,*Set-Cookie,*Content-type,*Content-length,*Date
//3.Request:*Cookies,*Accept-xxx,*Content-type,*content-Length,*Authorization,*User-Agent,*Referrer


//STREAMS

//*A stream is a sequence of data that is being moved from one point to another over time.
//*Ex: a stream of data over the internet being moved from one computer to another .
//*EX: a stream of data being transferred from one file to another within the same computer
//*Process streams of data in chunks as they arrive instead of waiting for the entire data to be available before processing.
//*Ex:Watching a video on YouTube.
//*The data arrives in chunks and you watch in chunks while the rest of the data arrives over time.
//*EX:Transfering file contents from fileA to fileB
//*The contents arrive in chunks and you transfer in chunks while the remaining contents arrive over time.
//*preventing unnecessary data downloads and memory usage.
//*1.Readable stream(from which data can be read);
//Ex:Reading from a file as readable stream.
//*2.Writable stream(to which we can write data);
//Ex:Writing to a file as writable stream
//*3.Duplex stream (both readable and writable)
//EX:Sockets as a duplex stream
//*4.Transform strams (can modify or transform the data as it is written and read)

//READABLE STREAMS/WRITABLE STREAMS

// const fs=require('fs');
// const readableStream=fs.createReadStream('./file1.txt',{
//     encoding:'utf-8',
//     highWaterMark:2
// });

// const writableStream=fs.createWriteStream('./file2.txt');
// readableStream.on('data',(chunk)=>{
//    console.log(chunk)
//    writableStream.write(chunk);
// })

//PIPE

//The pipe() method is used to connect the output of one stream to the input of another, facilitating the seamless transfer of data between two streams.
// This is particularly useful for chaining together multiple stream operations.

// const fs=require('fs');
// const readableStream=fs.createReadStream('file1.txt');
// // console.log(readableStream);
// const writableStream=fs.createWriteStream('file2.txt');
// readableStream.pipe(writableStream);
// // console.log(writableStream);


//BUFFERS

//*Node js cannot control the pace at which data arrives in the stream.
//*It can only decide when is the right time to send the data for processing.
//*If there is data already processed or too little data to process, Node puts the arriving data in a buffer.
//*It is an intentionally small area that node maintains in the runtime to process a stream of data.
//*Ex:Streaming a video online
//*If your internet connectio is fast enough , the speed of the stream will be fast enough to instantly fill up the buffer and send it out for processing.
//*that will repeat till the stream is finished.
//*If your connection is slow,after processing the first chunk of data that arrived, the video
//player will display a loading spinner which indicates it is waiting for more data to arrive
//Once the buffer is filled up and the data is processed, the video player shows the video
//While the video is playing,more data will continue to arrive and wait in the buffer.

//  const buffer=new Buffer.from('vishwas','utf-8')
//  console.log(buffer)
//  console.log(buffer.toJSON());


//HTTPS
// HTTPS stands for Hypertext Transfer Protocol Secure. It is an extension of the HTTP (Hypertext Transfer Protocol) used for secure communication over a computer network, typically the internet.
// The "S" in HTTPS stands for "Secure," indicating that the communication between the user's web browser and the website is encrypted.
// When you access a website using HTTPS, the data exchanged between your browser and the website is encrypted to protect it from unauthorized access or tampering.
// This is particularly important when sensitive information, such as login credentials, personal details, or financial data, is being transmitted.
// HTTPS relies on cryptographic protocols, such as SSL (Secure Sockets Layer) or its successor, TLS (Transport Layer Security), to establish a secure connection between the client (your browser) and the server hosting the website.
// This secure connection helps ensure the confidentiality and integrity of the data being exchanged, providing a more secure and private browsing experience for users. Many websites today use HTTPS by default to enhance the security of online communication and protect user privacy.

//REQUEST RESPONSE CYCLE
//The request-response cycle is a fundamental concept in web development that describes the process of communication between a client (typically a web browser) and a server. This cycle involves a series of steps in which the client sends a request to the server, and the server responds accordingly. Here is an overview of the basic request-response cycle:

// Client Sends a Request:

// A user interacts with a web application by clicking a link, submitting a form, entering a URL in the browser, or performing other actions.
// The client (web browser) generates an HTTP request based on the user's action.
// The request includes information such as the HTTP method (GET, POST, etc.), headers, and, in the case of certain requests like POST, data from the user (e.g., form input).
// Server Processes the Request:

// The server receives the HTTP request from the client.
// It interprets the request, extracting information like the requested resource (URL), method, and any additional data.
// The server determines how to handle the request based on the application's logic and routes the request to the appropriate handler or controller.
// Server Generates a Response:

// The server processes the request, executing the necessary code, accessing databases, or performing other actions as needed.
// It generates an HTTP response, which includes a status code indicating the success or failure of the request and any relevant data.
// The response also contains headers providing information about the response, such as content type and length.
// Client Receives the Response:

// The client receives the HTTP response from the server.
// The web browser interprets the response, handles any redirects, and processes the content, such as rendering HTML, executing JavaScript, or displaying images.
// Rendering and Display:

// The client (browser) renders and displays the content received in the response.
// If the response includes HTML, the browser renders the page, and any accompanying CSS styles are applied.
// If the response includes JavaScript, the browser may execute the scripts, enabling dynamic behavior on the page.
// This cycle repeats as the user interacts with the web application, triggering new requests and responses. The request-response cycle is the foundation of how web applications function, allowing users to interact with dynamic and responsive content on the internet.

//STATELESS PROTOCOL
//A stateless protocol is a communication protocol that does not store information about the state of the communicating entities between multiple transactions.
// Each communication or transaction is independent and self-contained, and the protocol does not retain any memory of previous interactions.
// In the context of web development and networking, the Hypertext Transfer Protocol (HTTP) is a notable example of a stateless protocol.
// When a client (such as a web browser) makes a request to a server using HTTP, the server processes the request and sends back a response. However, the server does not retain any information about the client's previous requests. Each request from the client is treated as a new, isolated transaction.

// Key characteristics of stateless protocols include:
// No Session State: Stateless protocols do not maintain any information about the state of a user's session between requests. Each request is processed independently.
// Simplicity: Stateless protocols are often simpler to implement and manage because there is no need to maintain and synchronize state information between the client and server.
// Scalability: Stateless protocols can be more scalable because each request is independent, and servers do not need to store and manage session-specific data for individual clients.
// While stateless protocols like HTTP are suitable for many types of interactions on the web, there are situations where maintaining state information between transactions is necessary.
// In such cases, additional mechanisms, such as cookies or session tokens, may be employed to establish and maintain a session state between the client and the server. These mechanisms help overcome the statelessness of the underlying protocol when persistent information needs to be shared across multiple requests.

//LOCAL STORAGE
// Local Storage is a web storage mechanism that allows web applications to store data locally within a user's web browser. It provides a simple key-value pair storage system and is a part of the Web Storage API along with sessionStorage.
// Here are some key features and characteristics of Local Storage:
// Persistence: Data stored in Local Storage persists even when the browser is closed and reopened. This makes it suitable for storing long-term user preferences, settings, or cached data.
// Capacity: Local Storage typically provides more storage space compared to sessionStorage. The exact amount of space available varies between browsers but is generally larger than the storage capacity of sessionStorage.
// Scope: Local Storage is scoped to the domain of the web application. This means that data stored in Local Storage is accessible only to the web application on the same domain.
// Synchronous API: The API for working with Local Storage is synchronous, which means that the data retrieval and manipulation are performed in a blocking manner. This makes it straightforward to use but can potentially lead to performance issues if misused.

//COOKIES
//Definition: Cookies are small pieces of data stored on the user's device by the web browser. They are sent back and forth between the client and the server with each HTTP request and response.
// Key Features:
// Persistence: Cookies can be either session cookies (stored temporarily and deleted when the browser is closed) or persistent cookies (stored for a specified duration or until manually deleted).
// Size Limitations: Cookies have size limitations (usually a few kilobytes). They are suitable for storing small amounts of data, such as user preferences or session identifiers.
// Scope: Cookies can be set to be accessible to a specific domain or to a broader range of domains, depending on their attributes.
// Security Considerations: Cookies can pose security risks if not used properly, such as cross-site scripting (XSS) and cross-site request forgery (CSRF). Developers need to implement secure practices, like using HTTPS and setting secure and HttpOnly flags.

//SESSIONS
// Definition: Sessions involve the server creating a unique identifier (session ID) for each user, and this identifier is passed back and forth between the client and the server to maintain state.
// Key Features:
// Server-Side Storage: Session data is stored on the server. A unique session ID is typically stored as a cookie on the client's side to associate subsequent requests with the same session.
// Persistence: Sessions are typically more secure than cookies, as the session data is stored server-side. Session data persists as long as the user is actively interacting with the application or for a configurable duration of inactivity.
// Size Limitations: Since session data is stored on the server, it can handle larger amounts of data compared to cookies.
// Security Considerations: Sessions can provide better security because the session data is stored on the server. However, developers must still be cautious about session hijacking and implement secure session management practices.



//  OS MODULE

// var os=require("os");
// console.log(os.totalmem());

// READ File

// var fs=require("fs");
// fs.readFile("./sample.txt",'utf-8',function(err,data){
//     if(err){
//         console.error(err);
//     }
//     console.log(data);
// })



// CREATE FILE(if there is any other file with same name it may over right it.)

// var fs=require ('fs')
// fs.writeFile(
//     'new.txt',
//     'This is a new file created by ',
//     (err)=>{
//         if(err){
//       console.log(err)
//     }
//     console.log('File created');
// })


// UPPEND FILE

// var fs=require ('fs')
// fs.appendFile(
//     'new.txt',
//     'This is a new file created by node js\n',
//     (err)=>{
//         if(err){
//       console.log(err)
//     }
//     console.log('File created');
// })

// RENAME FILE

// var fs=require('fs');
// fs.rename('new.txt','sample.txt',(err)=>{
//     if (err){
//         console.log(err)
//     }
//     console.log('File renamed');
// })

// DELETE FILE

// var fs=require('fs');
// fs.unlink('./sample.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('File deleted')
// })

// PATH MODULE

// var path =require ('path');
// const p='/home/tutorial/nodejs/sample.txt';
// console.log(path.extname(p));


// HTTP MODULE (http module allows Node.js to transfer data over the Hyper Text Transfer Protocol(HTTP).
//              That HTTP module can create an Http server that listens to server parts and gives a response back to the client.)
//* HTTP  is a protocol,or a definite set of rules,for accessing resources on the web. Resources could mean anything from HTMl files
// to data from a database , photos, text,and so on.It is necessary for client -server communication.

// const http=require('http');
// const url=require ('url');
// const server=http.createServer((req,res)=>{
//     const rurl=url.parse(req.url,true).pathname;
//     if(rurl=='/'){
//         res.write('home page');
//         res.end();
//     }
//    else if(rurl=='/about'){
//     res.write('aboutpage' );
//     res.end();
//    }
// })
// server.listen(8080);

//HTTP METHODS
// GET -Retrieve resources from a server
// POST -Submit/Create data to the server 
//PUT-Update an existing data 
//DELETE -Delete a resources.
//HEAD -The HEAD method is similar to the GET method but is used to request the headers of a resource without actually retrieving the resource's body.
// It is often used to check the status of a resource, retrieve metadata, or check if a resource has been modified without downloading the entire content.
//OPTIONS -The OPTIONS method is used to describe the communication options for the target resource. It allows the client to determine the options and/or requirements associated with a resource, or the capabilities of a server, without actually fetching the resource.
//It is commonly used to check what HTTP methods are supported by a server or to inquire about other available communication options.


//IDEMPOTENT
//In the context of HTTP methods, idempotence refers to the property where repeating the same operation multiple times has the same effect as performing it once.
// In Node.js, this concept is relevant when handling HTTP requests, as certain HTTP methods are designed to be idempotent.

//STATUS CODE
//The status codes indicate the result of the HTTP request, and they are a crucial part of the communication between the server and the client
//  const express=require("express");
//  const app=express();
//  app.get('/example',(req,res)=>{
//     res.status(200).send('OK');
//  });
//

//  app.listen(3000,()=>{
//     console.log('Server is running');
//  })



//Basic routing
//Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
//Each route can have one or more handler functions, which are executed when the route is matched.

// EXPRESS Js

// const express=require('express');
// const app=express();
// const port =3000;
// app.get('/',(req,res)=>{
//     res.send('Home page')
// })

// app.post('/product',(req,res)=>{
//     res.send('product created')
// })
// app.put('/product',(req,res)=>{
//     res.send('about edited')
// })
// app.delete('/product',(req,res)=>{
//     res.send('contact deleted')
// })

// app.listen(port,()=>{
//     console.log(`app listening on port ${port}`);
// })


//MIDDLEWARE

//It is to modify the req and res of objects,and then compile and execute any code that is required.
//It is also helps to terminate the request-response session and call for the next middleware in the stack.

//HTML adding

// const express=require('express');
// const app=express();
// const path=require('path');
// const port=3000;
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))
// })

//     app.get('/about',(req,res)=>{
//         res.sendFile(path.join(__dirname,'about.html'))
//     })
//     app.get('/contact',(req,res)=>{
//         res.sendFile(path.join(__dirname,'contact.html'))
//     })
// app.listen(port,()=>{
//     console.log(`app listening on port ${port}`)

// })

//LIBUV

//Written in c++;




//Process
//A process is a what facilitates the execution of a program. In simple words, a process is just a program which is currently executing.

//Thread
//A thread is what is responsible for executing a program code in the process. 
//By default,every process has one main thread.




//READLINE

// const readline=require('readline');
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.question('please enter your name:',(name)=>{
//     console.log('You have entered:'+name);
//     rl.close();
// });
// rl.on('close',()=>{
//     console.log('Interface closed');
//     process.exit(0);
// })

//CONCURRENCY

//Node js is known for its non-blocking,event -driven architecture,
// which enables concurrency through mechanism like event loops and asynchronous programming like callbacks and promises.

//EVENT-DRIVENT ARCHITECTURE

//Event driven architecture is the event loop.