//"use strict";//with strict mode u can not use undeclared variables
//*Strict mode helps catch common coding errors and prevents the use of certain "unsafe" actions. This can lead to more robust and maintainable code.
//*Variables must be declared with var, let, or const before being used. In non-strict mode, undeclared variables are automatically assigned to the global scope, leading to potential bugs.
//*In strict mode, the value of this is undefined in functions that are not methods or constructors. This prevents accidental global variable assignments.

//INTERACTION-ALERT,PROMPT,CONFIRM
//ALERT
//The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window.
// In this case – until they press “OK”.
// alert('Hello');

//PROMPT
//The function prompt accepts two arguments:
//It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
//result = prompt(title, [default]);
//let age=prompt('How old are you?',100);

//CONFIRM

//The function confirm shows a modal window with a question and two buttons: OK and Cancel.
//The result is true if OK is pressed and false otherwise.
//result = confirm(question);

//*All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

//TYPE CONVERSIONS
//STRING CONVERSION

//We can also call the String(value) function to convert a value to a string
//String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.
//let value = true;
//alert(typeof value); // boolean
//value = String(value); // now value is a string "true"
//alert(typeof value); // string

//NUMERIC CONVERSION

// alert( "6" / "2" ); // 3, strings are converted to numbers

// let str = "123";
// alert(typeof str); // string
// let num = Number(str); // becomes a number 123
// alert(typeof num); // number

// let age = Number("an arbitrary string instead of a number");
// alert(age); // NaN, conversion failed

// undefined:	NaN
// null:	0
// true and false:	1 and 0
// string	:Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

//BOOLEAN CONVERSION

//Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.Other values become true.
//alert( Boolean("0") ); // true
// alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

//FUNCTIONS

// function sum(a, b) {
//    let result = a + b;
 
//    return result;
//  }

//Values passed to a function as parameters are copied to its local variables.
// A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
// A function can return a value. If it doesn’t, then its result is undefined.
// To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.

// It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.

// Function naming:

// A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
// A function is an action, so function names are usually verbal.
// There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.
// Functions are the main building blocks of scripts. Now we’ve covered the basics, so we actually can start creating and using them. But that’s only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features.

//FUNCTION EXPRESSION

// let sum = function(a, b) {
//    let result = a + b;
 
//    return result;
//  };

// Functions are values. They can be assigned, copied or declared in any place of the code.
// If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.
// In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

//ARROW FUNCTIONS

// let sum = (a, b) => a + b;
// console.log(sum(1,2))

// Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

// Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
// With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.

//VARIABLES

// Can be declared using:
// let
// const (constant, can’t be changed)
// var (old-style, will see later)
// A variable name can include:
// Letters and digits, but the first character may not be a digit.
// Characters $ and _ are normal, on par with letters.
// Non-Latin alphabets and hieroglyphs are also allowed, but commonly not used.

//DATATYPES

// number: for both floating-point and integer numbers,
// bigint: for integer numbers of arbitrary length,
// string :for strings,
// boolean: for logical values: true/false,
// null : a type with a single value null, meaning “empty” or “does not exist”,
// undefined : a type with a single value undefined, meaning “not assigned”,
// object and symbol : for complex data structures and unique identifiers.

//PRIMITIVE VS NON-PRIMITIVE

//primitive--their values contain only a single thing (be it a string or a number or whatever).
//primitive--stored and copied by whole value.
//non-primitve-- store and copied by reference.

//OBJECTS

//objects are used to store keyed collections of various data and more complex entities

//LOOPS
//FOR LOOP
// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//    alert(i);
//  }

//WHILE LOOP
// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }

//DO WHILE LOOP
// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);




// x=10;
// console.log(x);
// let message;
// message="Hello";
// alert(message);
// let age =19;
//  age =20 ;
//   age=21;

// document.write(age);
//  const color_green = 1;
//  const color_red =2;
//  const color_blue=3;
//  let color=color_blue;
//  alert (color);


//function myfunc(){
//     console.log("Running");
// }

// const myfunc=(a,b)=>
//     a+b;
// ;
//  console.log(myfunc(10,20));
   
// const globalPlayer = [{
//     id:0,
//     name:'Ajay',
//     age:20,
// },
// {
//     id:1,
//     name:'Ajay',
//     age:20,
// },
// {
//     id:2,
//     name:'Ajay',
//     age:20,
// }]
// globalPlayer.forEach((value,index,array)=>{
//     console.log(array)
// });
//    const newarray= globalPlayer.filter((value)=>value.age===20);
//    console.log(newarray);
//  const number=1234564444444444444444444444444444n;
//  alert(number);
// let name ='john';
// alert(`Hello,${name}!`);
// alert(`The result is ${1+2}`);

// let isGreater=4>1;
// alert(isGreater);
// let name="Ilya";
// alert(`Hello ${1}`);
// alert(`hello ${"name"}`);
// alert(`hello ${name}`);
// let age=prompt('How old are you?',100);
// console.log(age);
/*let isboss= confirm("Are you the boss?");
alert(isboss);*/
// let str="123";
// alert(typeof str);
// let num=Number(str);
// alert(typeof num);
// let name="jasim";
// alert(`Mandan ${name}`);
// 1.THEORY
//FUNCTION

// a.FUNCTION STATEMENT

//  function a(){
//    console.log("a called");
//  }
//b. FUNCTION EXPRESSION.(function act like values)

// var b=function b(){
//    console.log("b called");
// }
//   c.FUNCTION DECLARATION

//   function a(){
//    console.log("A");
//   }
// d. NAMED FUNCTION EXPRESSION

//  var b=function xyz(){
//    console.log("Named function expression");
//  }
//  b();
//   e.HIGHER ORDER FUNCTION(a function that take another function as an argument or returns  a function)

// function hello(){
//    console.log("Name");
// }
// function higher(name){
   
// }

//  higher(hello());

//f.FIRST CLASS FUNCTION
//*it refers to function that can be treated like any other variable or value.
//*YOu can assign a function to a variable
//*passed as arguments to other functions
//*returned as values from other functions
//*stored in data structures



//  SCOPE AND LEXICAL SCOPE(define accessibility of variables and functions)

//   function a(){
//    var count=10;
//   return function c(){
//       console.log(count);
//       count++;
//    }
   
//   }
//   var b=a();
//  b();
//  b();
//  b();

// 6.CLOSURE(function bundled with its lexical environment)

//   function outer(){
//    var a=10;
//    function inner(){
//       console.log(a);
//    }
//    return inner;
//   }
//   var close=outer();
//   close();

// 7.CONNECTION BETWEEN GARBAGE COLLECTOR AND CLOSURE

// function a(){
//    var x=0;
//    return function b(){
//       console.log(x);
//    }
// }
// var y=a();
// y();

// 8.HOISTING(Accessing variables and functions before initialization.)

//  getName();
//  x=7;
//  console.log(x);
//  console.log(getName);
//  var x;
//  function getName(){
//    console.log("Hello")
//  }

// //  9.ARROW FUNCTION

// getName2();
// getName();
// function getName2(){
// console.log("2")
// }
//    var getName =()=>{
//       console.log("Name");
//    }
      
   // 'use strict';
   // let age=function(){
   //    console.log(this.number);
   // }
   // age();
   
   // let agearrow=()=>{
   //    console.log(this);
   // }
   // agearrow();

//    let udaydetails = {
//       name:'uday',
//       printname:function(){
//          console.log(this);
//          console.log(this.name);
//       }
//    };
// udaydetails.printname();

// CALL (burrowing function from another function)

// let details={
//    Name:"Anamika",
//    age:20,
//    print:function(){
//       console.log(this.Name+" "+this.age);
//    }

// };
// details.print();
// let details2={
//    Name:"Sachin",
//    age:45
// }
// details.print.call(details2);

// let details={
//    Name:"Anamika",
//    Age:20,
// }
// let Printdetails=function(hometown,state){
//    console.log(this.Name+" ,"+this.Age+" ,"+hometown+","+state);
// }
// Printdetails.call(details,"Tanur","Kerala");
// // in apply method pass argument inside an Array.
// Printdetails.apply(details,["Tanur","Kerala"]);
// let Mydetails=Printdetails.bind(details,"Tanur","Kerala");
// // console.log(Mydetails);
// Mydetails();

//STRING METHODS
// 
// let text="Java Script";
// let text1="Learn "
// console.log(text.charAt(2));
// console.log(text1.concat(text));
// console.log(text.toLowerCase());
// console.log(text.slice(0,4));
// console.log(text.length);
// console.log(text.indexOf("v"));
// console.log(text.lastIndexOf("a"))
// console.log(text.search("Java"));
// console.log(text.includes("Java"));
// console.log(text.trimStart());
// console.log(text.padStart(5,"3"));
// console.log(text.split(" "))
// console.log(text.substring(5));
 
// ARRAY METHODS

// 1.MAP

// const arr=[5,1,3,2,6];
// function double(x){
//    return x*2;
// }
// const output=arr.map(double);
// console.log(output);

// 2.FILTER

// const arr=[5,1,3,2,6];
// function isEven(x){
//    return x % 2===1;
// }
// const output=arr.filter(isEven);
// console.log(output);

// const output =arr.filter((x)=> x<3);
// console.log(output);
  
// 3.REDUCE

// const arr=[5,1,3,2,6];
// function findSum(arr){
//    let sum=0;
//    for(let i=0;i<arr.length;i++){
//       sum=sum+arr[i];
//    }
//    return sum;
// }
// console.log(findSum(arr));

// const output=arr.reduce(function(acc,curr){
//    acc=acc+curr;
//    return acc;
// },0);
// console.log(output);

//  const output =arr.reduce(function(max,curr){
//    if(curr>max){
//       max=curr;
//    }
//    return max;
//  },0);
//  console.log(output);

// 4.FIND

//  const persons=[
//    {
//       name:'Florin',
//       age:25
//    },{
//       name:'Ivan',
//       age:20
//    },{
//       name:'Liam',
//       age:18
//    }
//  ];
//  const age=persons.find(findFlorin).age;
//  function findFlorin(person){
//    return person.name ==='Florin';
//  }
//  console.log(age);

// const person=['Florin','Ivan','Liam'];
// const Name=person.find(findperson);
// function findperson(item){
//    return item ==='Florin';
// }
// console.log(Name);

// const Name =person.find(x=>x==='Florin');
// console.log(Name);

// 5.SORT

// const Names=['florin','Ivan','Liam'];
// Names.sort();
// console.log(Names);

// const Numbers=[74,18,10,5,84,24,105];
// const newarray=Numbers.sort((a,b)=>a-b);
// console.log(newarray);
   
// 6.FOREACH
//  const person=[
//    {
//       Name:'Florin',
//       age:25
//    },
//    {
//       Name:'Ivan',
//       age:20
//    },
//    {
//       Name:'Liam',
//       age:18
//    }
//   ];
//  person.forEach((value,index,array)=>
//  console.log(array)
//    );
   

    // 7.PUSH
// const animal=['Lion','Tiger','Cat','Dog'];
// animal.push('Fox');
   
// console.log(animal);

  //  8.SHIFT

//  const animal=['Lion','Tiger','Cat','Dog'];
//  animal.shift();
//  console.log(animal);
  // 9.POP

//  const animal=['Lion','Tiger','Cat','Dog'];
//  animal.pop();
//  console.log(animal);

  // 10.UNSHIFT
// const animal=['Lion','Tiger','Cat','Dog'];
//  animal.unshift('Elephant');
//  console.log(animal);

  // 11.SLICE
//  const Numbers=[1,2,3,4,5];
//  const Numbers2=Numbers.slice(-3);
 
//  console.log(Numbers2)
// const participants=['Florin','Ivan','Liam','Jai','Patrick'];
// const winners=participants.slice(0,3);
// console.log(winners);

   // 12.SPLICE
// const numbers=[1,2,3,4,5];
// const deleted=numbers.splice(2,3,6,7);
// console.log(numbers);
// console.log(deleted);
// in .splice(index,how many wanted to delet,If you want to add something)
  
   // OBJECT METHODS
   //FREEZE

// const details={
//    Name:'Anamika',
//    Age:20
// };

// Object.freeze(details);
// console.log(Object.isFrozen(details));

// details.Name='Nothing';
// console.log(details);

   //  SEAL

//  const details={
//    Name:'Anamika',
//    Age:20
//  };
//  Object.seal(details);
//  console.log(Object.isSealed(details));

// details.Name='Nothing';
// console.log(details);
 
// 3.CALL BACK

// function a(callback){
//    console.log("Its a");
//    callback();
// }
// function b(){
//    console.log("Its b");
// }
// a(b);

// function a(callback){
//  console.log("Its a");
//  callback();
// }
// a(()=>
// console.log("Its b"))

//CALLBACK HELL

// Callback hell, also known as the "pyramid of doom" or "callback pyramid,".
// is a situation in asynchronous programming where multiple nested callback functions make the code difficult to read and maintain.
// This typically occurs when dealing with asynchronous operations such as nested callbacks or promises without proper handling.




// 21.ES6 features 
// a.let var const

// B.TERNARY OPERATOR

//  let num =8;
//  let result;
//  result=num%2===0?"even":"odd";
//  console.log(result);

// C.ARROW FUNCTION

// function myFunc(a,b){
//    sum=a+b;
//    console.log(sum);
// }
// myFunc(10,20);

// myFunc =(a,b)=>{
//    let c=a+b
// console.log(c)
// }
// myFunc(10,20);
// D.TEMPLATE LITERALS

//  const num1=10;
//  const num2=20;
//  const result=num1+num2;
//  console.log(`The sum of ${num1} and ${num2} is ${result}`)

// E.DEFAULT ARGUMENT

// function average(a=getdefault(),b=getdefault()){
   
//    console.log(a,b);
// }
// function getdefault(){
//    return 100;
// }
// average(20);

// F.CLASSES

//  Constructor method

// class details{

// constructor(Name,Age,place){
//   this.Name=Name;
//   this.Age=Age
//   this.place=place;
// }
   
// }
// let d1=new details('Anamika',20,'Malappuram');
// // d1.Name="Anamika";
// let d2=new details('Anamika',20,'Malappuram');
// console.log(d1,d2);

// prototype method

// class details{
//    constructor(Name,Age,place){
//         this.Name=Name;
//         this.Age=Age
//         this.place=place;
//       }
//    myDetails(){
//      console.log("Name:"+this.Name);
//      console.log("Age:"+this.Age);
//      console.log("place:"+this.place);
//    }
//    showAge(){
//      console.log("Age of "+this.Name+" is "+this.Age);
//    }

//    static message(){
//       console.log("It is a static message");
//    }
      
//    }
  
//    let d1=new details('Anamika',20,'Malappuram');
   
//    let d2=new details('Anamika',20,'Malappuram');
//   d1.myDetails();
//   d1.showAge();
//   details.message();
  
// G.ARRAY DESTRUCTURING

// const arr=['Kerala','Malayalam',10000,['TVM',"CNN"]];
// const [state,language,population,[arr1,arr2]]=arr;
// console.log(arr1);

// H.OBJECT DESTRUCTURING

// const obj1={
//    state:"Kerala",
//    language:'Malayalam',
//    population:10000,
//    airports:{
//       a1:'TVM',
//       a2:'CNN'
//    }

// }
// let {state:s1,language,population,airports:{a1,a2}}=obj1;
// console.log(state);
// console.log(a1);
// console.log(s1);

//PASS BY VALUE AND PASS BY REFERENCE

//VALUE
// In pass by value, a copy of the actual value is passed to the function.
// In JavaScript, primitive types (like numbers, strings, booleans) are passed by value. 
// Changes made to the parameter inside the function do not affect the original value outside the function.

//REFERENCE
// In JavaScript, when you pass an object (including arrays and functions) to a function, you are passing a reference to the object.
//  However, it's important to understand that you are still passing a copy of the reference, not the actual object.
//  The reference allows the function to access and modify the object, so changes made to the object inside the function are visible outside as well.




// PROTOTYPE
//  function myButton(name){
//    this.button =document.createElement("button");
//    this.button.innerHTML =name;
//    document.body.appendChild(this.button);
//  }
//  myButton.prototype.onclick=function(fn){
//    this.button.onclick =fn;
//  }
  
//  var b2=new myButton('yo')
//  b2.onclick(function(){
//    console.log("clicked");
//  });
//  console.log(b2);

// SHALLOW COPY
//Shallow copy creates a new object or array, but it does not create new copies of the nested objects or arrays within the original structure.
// Instead, it copies references to those nested structures.
//Changes made to the nested structures in the copy will affect the original, and vice versa, as they share the same references.


   // Object
// const a={id:1,name:'Anamika'};//original object
// const b={...a};//using spread operator
// a.id=5;
// console.log("a=",a);
// console.log("b=",b);


// const a={id:1,name:'Anamika'};//original object
// const b=Object.assign({},a);//using assign operator
// b.id=5;
// console.log("a=",a);
// console.log("b=",b);

// Array

// const arr1=[1,2,3];
// const arr2=[...arr1];
// arr2[0]=5;
// console.log(arr1);
// console.log(arr2);

// DEEP COPY
// Deep copy creates a completely independent copy of the original object or array along with all its nested structures.
// Changes made to the nested structures in the copy do not affect the original, and vice versa.

   //  Object
// const a={id:1,name:'Anamika',address:{flatNo:23}};//original object
// const b=JSON.parse(JSON.stringify(a))//using stringify and parse
// b.id=5;
// b.address.flatNo=5;
// console.log("a=",a);
// console.log("b=",b);
  

// FOR IN LOOP (objects)
// let person ={name:'Anamika',Age:20};
// for(let x in person){
//    console.log(person[x]);
// }

// FOR OF LOOP(arrays and strings)

// let cars =["bmw",'audi','merzeds'];
// let myString='javascript'
// for (let a of cars){
//    console.log(a);
// }
// for(let x of myString){
//    console.log(x);
// }


// PROMISES

// const promise1=new Promise((resolve,reject)=>{
//    resolve('success')
// })

// const promise2=new Promise((resolve,reject)=>{
//    reject('Failed')
// })
// const allpromises= Promise.all([promise1,promise2])

// allpromises.then((Response)=>{
//    console.log(Response);
// }).catch((err)=>{
//    console.log(err);
// });

//SIMPLE PROMISE SYNTAX

// const promise=new Promise((res,rej)=>{
//    let x=5;
//    if(x===5){
//       res('success');
//    }else{
//       rej('Failed')
//    }
// })
// promise.then((response)=>{
//    console.log(response);
// }).catch((err)=>{
//    console.log(err);
// })

// STRUCTURED CLONE

// let user={
//   name:'Anamika',
//   Age:20,
//   Address:{
//     flatNot:23
//   }

// }
// let clone=structuredClone(user);
// clone.Address.flatNo=5;
// console.log(clone);
// console.log(user)

// GENERATOR

// Generators in JavaScript are a special type of function that allows you to pause and resume their execution, enabling more flexible and efficient control flow.
//  They are defined using a special syntax with an asterisk function* and use the yield keyword to produce a sequence of values.

// function *generator(){
//   yield 22;
//   console.log("First yield called");
// }
// let gen=generator();
// console.log(gen.next());
// console.log(gen.next());

//PROTOTYPE
//prototype is a fundamental concept related to object-oriented programming. Each object in JavaScript has a prototype property that points to another object. 
//This object is often called the prototype object or simply the prototype.

//PROTOTYPE CHAIN
//Objects in JavaScript are linked together through a chain of prototypes.
// When you access a property on an object, JavaScript looks for the property in the object itself.
// If it doesn't find the property, it looks in the object's prototype, and this process continues up the prototype chain until the property is found or the end of the chain is reached.

//PROTOTYPAL INHERITANCE
//Prototypal inheritance is a fundamental concept in JavaScript, and it is the primary mechanism through which objects inherit properties and methods from other objects.
// In JavaScript, each object has a prototype, and the prototype is essentially another object from which the first object inherits properties.

//JAVASCRIPT IS DYNAMICALLY TYPES
//JavaScript is considered a dynamically typed language. Dynamic typing means that variable types are determined at runtime rather than at compile time.
// In a dynamically typed language like JavaScript, the type of a variable can change during the execution of the program, and variables are not explicitly bound to a specific data type.

//CURRYING
//Currying is a functional programming concept in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. 
//The result is a chain of functions, where each function returns another function until all the arguments are received, and the final function produces the result.

//TYPE CASTING
//IMPLICIT TYPE CONVERSION(COERCION)
//In programming languages, implicit type conversion, also known as coercion, occurs when the interpreter automatically converts one data type to another without explicit instructions from the programmer
//In some cases, a function call might be implicit, meaning it is automatically invoked without the need for explicit invocation.
//window.onload = function() {
  // Code executed when the window loads
//};

//EXPLICIT TYPE CONVERSION
//Explicit type conversion, also known as casting, occurs when the programmer explicitly converts one data type to another using language-specific functions or syntax.

//MICROTASK QUEUE
//The microtask queue is a special queue that contains microtasks. 
//Microtasks are functions that need to be executed after the current script has finished but before the next rendering.
// Examples include promises and mutation observer callbacks.

//== vs===
//The == operator is used for equality comparison. It compares the values on both sides of the operator after performing type coercion if the operands have different types. 
//Type coercion means that the operands are converted to the same type before the comparison.

//The === operator, also known as the strict equality operator, compares both value and type. It returns true only if the values and types on both sides are the same, without performing any type coercion.

//SYNCHRONOUS
//In synchronous operations, tasks are executed one after the other, in a sequential order. Each task must complete before the next one begins.
//The program or system waits for a task to finish before moving on to the next one.
//Synchronous operations are easy to understand and reason about, but they can lead to blocking, where the program is waiting for a resource or operation to complete, causing potential delays.

//ASYNCHRONOUS
//In asynchronous operations, tasks can be started, and the program can continue to execute other tasks without waiting for the completion of the asynchronous task.
//Asynchronous operations are often used for tasks that may take some time, such as reading from a file, making a network request, or handling user input.
//Callbacks, Promises, and async/await are common mechanisms for handling asynchronous code in languages like JavaScript.

//WHILE
//The while loop checks the condition before executing the loop body. If the condition is initially false, the loop body will not execute at all.

//DO WHILE
//The do-while loop, on the other hand, checks the condition after executing the loop body. This guarantees that the loop body will be executed at least once, regardless of the initial condition.

//FOREACH
//The forEach method is used for iterating over the elements of an array, but it doesn't return a new array. It is primarily used when you want to perform some operation on each element of the array without creating a new array.

//MAP
//The map method is used for creating a new array by applying a function to each element of an existing array. It returns a new array with the results of applying the provided function to each element.

//Parameters:
//Parameters are the variables listed in the function declaration. They act as placeholders for values that will be provided when the function is called.
//Parameters define the input that a function expects, and they are used within the function body as local variables.
//Parameters are specified in the parentheses following the function name.

//Arguments:
//Arguments are the actual values that are passed to a function when it is called. They correspond to the parameters of the function.
//When you call a function, you provide arguments for each parameter in the order they appear in the function declaration.
// Arguments are specified in the parentheses when calling the function.



// SET INTERVAL
// var i=0;
// var x=setInterval(function(){
//   console.log("*")
//   i++;
//   if(i==10){
//     clearInterval(x);
//   }
// },1000);
// setTimeout(function(){
//   console.log('abklksd')
// },2000)

// nums=[1,2,-3,-4,5];

// let sum=nums.reduce((acc,curr)=>{
//    // return curr>0? acc+curr:acc;
//   if(curr>0){
//    return acc+curr;
//   }else{
//    return acc;
//   }

// },0);

// console.log(sum);

