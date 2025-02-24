// // 1️) What will be the output of the following code? Explain why.
 let x = "5";
 let y = 5;
 console.log(x == y); 
 console.log(x === y);

// OUTPUT:
// true : AS THE VALUE OF X AND Y IS EQUALL
// FALSE : AS THE DATA TYPE OF X AND Y IS NOT EQUALL


// 2) how can you find the length of the longest word in this array?
const words = ["JavaScript", "Programming", "Function", "Hoisting"];
function getLongestWordLength(wordsArray) {
        return wordsArray.reduce((maxLength, word) => 
        Math.max(maxLength, word.length), 0);
}

 console.log(getLongestWordLength(words));

// answer: 11 


// 3️) What will be logged in the console? Explain your answer.
// function testScope() {
  //if (true) {
   //var a = 1️0;
    //let b = 2️0;
  //const c = 3️0;
  //}
    // console.log(a);
    //console.log(b);
    //console.log(c);
    //}
    //testScope();
// ANSWER: 10
//      ReferenceError: b is not defined
//      var has function scope SO it Is accessible anywhere inside the function
//      let and const have block scope SO they are only accessible within the block. that is why error will come


// 4)Rewrite the following function using const and fix any issue

 function greet() {
     if (true) {
        const message = "Hello " + name;
        console.log(message); 
    }
}

greet();


// 5) Convert this traditional function into an arrow function without changing the output
const multiply = (a, b) => a * b;


// 6)What will be the output? Explain why.
const obj = {
 name: "Alice",
 sayHello: function() {
 setTimeout(() => {
  console.log("Hello, " + this.name);
 }, 0o0);
  }
 };
 obj.sayHello();

// answer: Hello, Alice


// 7)What will be the output of this code? Explain why.
//console.log(a);
 //var a = 1️0;
//console.log(b);
//let b = 2️0;
// answer:undefined
// ReferenceError  
// before inserting any value to the "var a", the console.log(a) is used so undefined
// let variable is hoisted, so obviously it will show ReferenceError






// 10) Rewrite this code using shorthand assignment operators.
//let y = 10;
 x += 5;  ans: x = x + 5
x *= 2;  ans: x = x * 2
 x -= 3;  ans: x = x - 3
 x /= 2;  ans: x = x / 2


// 11)What will be logged in the console? Explain why
console.log(5 > 3 && 10 < 20);  
console.log(5 > 3 || 10 > 20);   
 console.log(!(5 > 3));           
//true. both the "5>3" and "10<20" conditions are true
//  true. condition "5>3" is true, so the final answer is true as there is "||" in between
//    false. "5>3" is true but "!(5>3)" is not true so ultimately it is false

// 12) What will be the output of the following function?
console.log(sum(2, 3));  
console.log(sum(2, 3, 10)); 
// 10. default parameter c=5, so 2+3+5=10
// 15. 2+3+10=15



// 13) Write a function that takes any number of arguments and returns their sum
function sum(...args) {
return args.reduce((total, num) => total + num, 0);
 }

 console.log(sum(6, 2, 2));       
console.log(sum(22, 30, 30, 40)); 
 console.log(sum());             
//9
//122
//0




// 1)Problem:
// Write a function reverseNumber(num) that takes a number and returns its reverse.



function reverseNumber(num) {
   let isNegative = num < 0; 
   if (isNegative) num = -num; 

   let reversed = 0;
     while (num > 0) {
         let digit = num % 10; 
         reversed = reversed * 10 + digit; 
         num = Math.floor(num / 10); 
     }

     return isNegative ? -reversed : reversed; 
 }


 console.log(reverseNumber(7653));  
 console.log(reverseNumber(621));  
 console.log(reverseNumber(991));        


// 2)Custom Length Function
//  Problem:
// Create a function customLength(str) that returns the length of a string without using length


 function customLength(str) {
     let count = 0;
     while (str[count] !== undefined) {
         count++; 
     }
     return count;
 }


 console.log(customLength("snehamahato")); 
 console.log(customLength("hello"));     
 console.log(customLength(""));           
 console.log(customLength("778")); 


// 3)fixtures:
// Function declarations (function add() {}) are hoisted to the top of the scope.
// Function expressions (var multiply = function() {}) are not hoisted with their assigned value, only the variable declaration (var multiply) is hoisted, leaving multiply as undefined at the time of calling


 //console.log(add(2, 3)); // Should output: 5
 //console.log(multiply(2, 3)); // Should output: 6

 //function add(a, b) {
   //  return a + b;
// }

// function multiply(a, b) { // Changed from function expression to function declaration
 //    return a * b;
 //}
