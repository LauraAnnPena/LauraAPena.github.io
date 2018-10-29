// Variables can be assigned values of different types, primitive and complex.

// 1. Number (primitive):
// Numbers can be written with or without decimals.
let a = 1;
let b = 2.510;

// 2. String (primitive):
// A string stores characters in sequence.
let firstName = 'Laura';

// A string can be inside double or single quotes.
let lastName = "Pena";

// String indexes are zero-based. The first character is in position 0, the 
// second in 1, etc.
console.log(firstName[0]); // logs 'L'
console.log(lastName[3]); // logs 'a'

// 3. Boolean (primitive):
// Booleans are a logical evaluation and can have a value of either true or 
// false.
console.log(10 > 3); // logs 'true'
console.log(10 < 3); // logs 'false'


// 5. Array (complex):
// An arrays is used to store multiple values in a single variable. Values are
// zero-indexed based. 
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//You access an array value by index number using bracket notation.
console.log(rainbow[1]); // logs 'orange'
console.log(rainbow[4]); // logs 'blue'

// 5. Object (complex):
// An object is a collection of values mapped in key and value pairs. 
const myInfo = {
    firstName: 'Laura',
    lastName: 'Pena',
    age: 29
    };
// Keys are strings and values can be any type, including another object. 
// The pairs can be added or removed as needed. As a result, objects can be any 
// size.
myInfo.faveColor = 'yellow'; // adds key:value pair to myInfo.

// You can access object properties by dot notation: objectName.propertyName or 
// bracket notation objectName["propertyName"].
console.log(myInfo.firstName); // logs 'Laura'
console.log(myInfo['firstName']); // logs 'Laura'

// 6. Function
// A function is a block of code stored to memory designed to perform a 
// particular task. A function is executed when called.
// Syntax:
// function functionname(parameter) {
//      (code to run once function is called)
//      }; 
function addNums(num1, num2) {
    return num1+num2;
}

// Function parameters are inside the parentheses () in the function definition.
// Parameters are placeholders for arguments and act like local variables 
// inside the function. Arguments are the values received by the function 
// when it is called.

addNums(5,25); // returns 30

// 5 and 25 are arguments and will replace num1 and num2 in the above function.

// When JavaScript reaches a return statement, the function will stop executing.
// Any code written inside the function after the return statement will not 
// execute.

function subtractNums(num1, num2) {
    return num1-num2;
    num1 + num2; // code will not execute since it is after the return
}

// Functions allow you to run code as many times as needed. You can use different
// values for the arguments to have different results.

// 7. undefined (primitive):
// A variable that has not been assigned a value is undefined. A function returns
// undefined if a value was not returned.
let c; // returns undefined
function multNums(num1, num2) {
    num1*num2;
} // returns undefined when called

// 8. null (primitive):
// Null is the intentional absence of a value;
let d = null;
console.log(d); // logs 'null' instead of undefined.

// 9. NaN (primitive);
// NaN represents Not-A-Number. It indicates that a value is not a legal number.

// 10. Infinity and -Infinity (primitive):
// The value Infinity (positive infinity) is greater than any other number. 
// This value behaves the same as infinity. 
var maxNumber = Math.pow(10, 1000); 
console.log(maxNumber); // returns infinity

// -Infinity represents the negative Infinity value. Negative infinity is 
// smaller than any other number.

// 10. What is the difference between primitive/simple and complex data types?
// A primitive data type is simply a data type that is not an object, and is immutable.
// A complex data type is typically an object. It is mutable as values can be 
// added and removed, making the object vary in size.

// 11. Primitive values are passed to a function BY COPY, complex values are 
// BY REFERENCE. What does that mean, and how are they different?
// We assign a variable a primitive value. When we assign the variable to
// another variable using =, we copy the value to the new variable. They are 
// copied and the values no longer have a relationship to each other.
// Changing one value does not affect the other.

// Variables that are assigned a non-primitive value are a reference to 
// the value. When the variable is referenced, JS goes to the location of the value
// in memory and works the values stored there. When an object is copied to 
// another variable using =, the address of that value is what’s 
// being copied over. Objects are copied by reference instead of by value.