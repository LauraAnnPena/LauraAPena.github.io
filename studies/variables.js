/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

// 1a. You can also declare variables using the 'let' and 'const' keywords. 
let color;
const birthMonth = 'February';

// 1b. These two keywords are preferred over var as they are more specific to the intention of the 
// use of the variable. Keyword 'let' allows you to reassign the value later, however keyword 'const'
// is immutable and not able to be reassigned or redeclared. NOTE: With 'const', the value must be
// assigned immediately.

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/

console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. Hoisting
// Hoisting is JavaScripts action to move variable and function declarations to the top of the 
// scope. 

// console.log(a);
// let a = 3; // logs '3'

// PLEASE NOTE: the values are not hoisted along with the declaration. Only the declaration is 
// hoisted, not any value.

// console.log(b);
// var b = 3; // logs 'undefined'