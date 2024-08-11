/////////////------------Function---------------- ///////////////////////

// 1.Function Expression

// const myFunction = function() {
//     // Function body
// };

//2.Function Declaration

// function myFunction() {
//     // Function body
// }

// 3.Anonymous function

// const myFunction = function() {
//     // Function body
// };

//4.Named Function Expression

// const myFunction = function namedFunction() {
//     // Function body
// };

//----Scope and lexical scope-----------//
// // Global scope variable
// let globalVar = "I'm global";

// function outerFunction() {
//     // Outer function scope variable
//     let outerVar = "I'm in outer function";

//     function innerFunction() {
//         // Inner function scope variable
//         let innerVar = "I'm in inner function";

//         // Accessing variables from different scopes
//         console.log(innerVar); // Outputs: I'm in inner function
//         console.log(outerVar); // Outputs: I'm in outer function
//         console.log(globalVar); // Outputs: I'm global
//     }

//     innerFunction();

//     // Trying to access innerVar here would result in a ReferenceError
//     // console.log(innerVar);
    
//     // Redefining outerVar here will create a new variable within outerFunction's scope
//      outerVar = "I'm redefined in outer function";
//     console.log(outerVar); // Outputs: I'm redefined in outer function
// }

// outerFunction();

// // Accessing outerVar or innerVar here would result in ReferenceError as they are not in global scope
// // console.log(outerVar);
// // console.log(innerVar);

// // Global variables are accessible anywhere
// console.log(globalVar); // Outputs: I'm global

//-----------Closure-----------------//

// function outer(){
//     let a = 10
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// outer()()

//-----------Hoisting--------------//

// x=10
// console.log(x);
// greet()
// console.log(greet());
// var x 
// function greet(){
//     console.log('Hello');
// }
// console.log(x);

// //-----------Call------------//

// let details = {
//     name :'Anamika',
//     age : 21,
//     print: function(){
//       console.log(this.name,',',this.age);
//     }
// }

// details.print()

// let details2 = {
//     name : 'Sachin',
//     age:50,

// }

// function Printdetails(hometown,state){
//     console.log(this.name,',',this.age,',',hometown,state);
// }

// details.print.call(details2)
// Printdetails.call(details,'Tanur','Kerala')

// //--------------Apply-------------//
// Printdetails.apply(details,['Tanur','Kerala'])
// //--------------Bind---------------//

// let printing = Printdetails.bind(details,'Tanur','Kerala')
// printing()

//--------------String Methods-------------//

// let text = 'Hello'
// let text1 = 'Java script'
// let food = ['a','b','c']
// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text1.trim());
// console.log(text1.padStart(15,'*'));
// console.log(text1.charAt(2))
// console.log(text1.split('a'))
// console.log(text.concat(text1))
// console.log(text1.substring(0,2))

//----------Array Methods----------------------//

//MAP

// let arr = [ 1,2,3,4,5]

// let output = arr.map(x=>x*2)
// console.log(output);

// Filter

// let arr = [ 1,2,3,4,5]
// let output = arr.filter(x =>x<4)
// console.log(output);

//Reduce
// let arr = [ 1,2,3,4,5]

// let output = arr.reduce((acc,curr)=>acc+curr,0)
// console.log(output);


//Find
// let arr = [ 1,2,3,4,5]
// let output = arr.find(x =>x<4)
// console.log(output);


//sort
// let arr = [ 1,2,3,4,5,30,20]
// console.log(arr.sort());
// console.log(arr.sort((a,b)=>a-b));


//Foreach

// let arr = [ 1,2,3,4,5]

//  arr.forEach((v,i,a)=>{
//     a[i] = v*2
//  })
// console.log(arr);

let arr = [ 1,2,3,4,5]

// let out = arr.push(10)
// console.log(arr);
// let a = arr.pop()
// console.log(arr);
// let b = arr.shift()
// console.log(arr);
// let c = arr.unshift(20)
// console.log(arr);

// let output =arr.slice(0,-1)
// let output = arr.splice(2,2,6,7)
// console.log(arr);
// console.log(output);


// let detail = {
//     name:'Anamika',
//     age:20
// }

// Object.seal(detail)
// console.log(Object.isSealed(detail));
// detail.name ='Habeeba'
// detail.place = "lkdsjf"
// console.log(detail);


// function abc (callback){
//      let a = 10
//     callback(a)
    
// }

// function callback(a){
//     console.log(a);
//     console.log('Its a ');
    
// }

// abc(callback)

// const promise =new Promise((res,rej)=>{
//     let a = 10
//     if(a === 10){
//         res('success')
//     }else{
//         rej('Failed')
//     }
// })

// promise.then(response=>{
//     console.log(response);
// }).catch(err=>{
//     console.log(err);
// })
    

// const promise1 = new Promise((res,rej)=>{
    
//     rej('failed')
// })

// const promise2 = new Promise((res,rej)=>{
//     res('success')
// })

// const allpromises = Promise.race([promise1,promise2])

// allpromises.then(response=>{
//     console.log(response);
// }).catch(err=>{
//     console.log(err);
// })

// const promise = new Promise((res,rej)=>{
//     res("success");
// });

// async function fetchData(){
//     const response = await promise;
//     console.log(response);
// }
// fetchData();

// const fetchData = async()=>{
//     const response = await promise;
//     console.log(response);
// }

// fetchData();



// (async function(){
//   const ress = await promise;
//   console.log(ress);
// })()

// const promise = new Promise((res, rej) => {
//     res("success");
// });

// (async () => { // Changed to arrow function to ensure compatibility
   
//         const ress = await promise;
//         console.log(ress);
    
// })();
// (async ()=>{
//     const respons = await promise;
//     console.log(respons);
// })();


//--------Async await----------//

// // Function that returns a promise to simulate fetching data from an API
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data successfully fetched');
//         }, 2000); // Simulating a delay of 2 seconds
//     });
// }

// // Async function using async/await
// async function getData() {
//     try {
//         console.log('Fetching data...');
//         const data = await fetchData(); // Wait until fetchData promise resolves
//         console.log('Data received:', data);
//         console.log('Data processing...');
//         // Simulating additional processing
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating a 1 second delay
//         console.log('Data processed and ready to use!');
//     } catch (error) {
//         console.error('Error fetching or processing data:', error);
//     }
// }

// // Call the async function
// getData();





