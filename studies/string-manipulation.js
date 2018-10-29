// 1. With operators
// You can use operators to manipulate primitive data types, like strings. Using 
// the operator returns a new value and does not change the original.
let x = 'Hello ';
let y = 'Laura';
console.log(x+y); // logs 'Hello Laura'
console.log(x); // logs 'Hello ' 
console.log(y); // logs 'Laura' 

// 2. With string methods
// You may also use JS's 'built-in' methods to check or manipulate strings. Just
// like manipulating with operators, methods return a new value and do not change
// the oiginal value;
// Some examples:
// concat() Joins two or more strings, and returns a new joined strings
console.log(x.concat(y)); // logs 'Hello Laura'

// endsWith() Checks whether a string ends with specified string/characters
console.log(x.endsWith(' ')); // logs true;

// split() Splits a string into an array of substrings
console.log(x.split('')); // logs ["H", "e", "l", "l", "o", " "]

// toLowerCase() Converts a string to lowercase letters
console.log(x.toLowerCase()); // logs 'hello '

console.log(x); // logs 'Hello ' 
console.log(y); // logs 'Laura' 