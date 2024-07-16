// function test(){
//     console.log("Hoisting ");
// } Hoisting with functions 
// let hello; // decleration 
// const test2; 


// Data Types : 
// string    " " or ' ' or  ` `
// int 
// double 
// float 
// boolean 
// object 
// array 


// variables 

var name = "Esraa";
let username = "Ahmad";   
const name2 = "Othman";

// name2= "Ali"; // error   Assignment to constant variable.

let x = 1;
let y = false;
let z = 20.12;

let obj = {
   // key:value
   name:"Esraa",
   age : 27,
   gender:"Female"
}
          // 0     1     2   
let arr = ["Esraa",27,"Female"];

// console.log(obj);


// alert("Welcome " + username + "enjoy :)" );


// let userInput = prompt("What is your name ? ");

// alert(`Welcome ${userInput} enjoy `);

// confirm H.W 




// function => block of code we can use it more than one time {}

// 1- creating the function 
function print () {
    console.log("inside the function ")
}

// 2- calling the function 
//   print();

// defintion function 
  function printName(username){
    console.log(username);
  }

//   printName("Saad");
//   printName("Hadeel");
//   printName("Zaid");



// Exprestion function 

const add = function(x,y){
    return x+y;
}

// console.log(add(5,9));


// arrow function 

const mul = (x,y) => {
    return  x*y; 
}

const pow2 = x => x*2;

// console.log(mul(2,3));

// annonumuse function 




/// Block  {}
// Global Block => everything outside a { } 
// Local Block 
// {

// }

// if(condition){

// }

// for(... ){

// }

 // Local Block  - function block 
// function () {

// }

// var gloVar = "Test "; // Global Block 

// if(true){ //Local Scop 
//     var ifVar = "Hello";
// }

// function fun () { // function scop 
//     var funVar = "Welcome"; 
// }

// let gloVar = "Test "; // Global Block 
// const pi = 3.14;

// if(true){ //Local Scop 
//     let ifVar = "Hello";
// }

// function fun () { // function scop 
//     let funVar = "Welcome"; 
// }


// console.log(gloVar);
// console.log(ifVar);
// fun();
// console.log(funVar);



// Hoisting 

test();

function test(){
    console.log("Hoisting ");
}

// test2();

// const test2 = function (){
//     console.log("Test2");
// }

// console.log(hello);

// let hello = "Hello"; //initialization 
