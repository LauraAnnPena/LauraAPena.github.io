// Functions

// A function is a block of code written to perform a task. A function is 
// executed when it's called.

// The two phases to using functions: 
// First we must define the function using the function keyword, followed by 
// the function name, and the code to run once called on.

function myFunctionName () {
    console.log('code to run');
} // once called, this function will log 'code to run' to console

// Next we can execute, or invoke the function, by calling it by the function
// name. Defining the function does not execute it. Defining only names the 
// function and stores it to memory for use when it is called. When the function
// is called is when the code is actually executed. 

myFunctionName(); // logs 'code to run' to console

// What’s the difference between a function’s parameters and arguments PASSED to a 
// function?
// Some functions may have parameters that serve as placeholders for the argument
// that will be passed to the code once called.

function printMyName (myName) { // myName is the parameter and a placeholder for the argument.
    console.log(myName); // myName will be printed to console.
} 
// A parameter is not considered an argument until the function is called and a
// value is given. After a value is given, then it is an argument.

printMyName('Laura'); // logs 'Laura'
// Laura is the arguement. The argument will pass to the function code in place 
// of the parameter. The value is considered an argument once it passes to 
// the function code block.

printMyName('Becky'); // logs 'Becky'
// You can pass different arguments to the function to run the same code on different
// values.

// What’s the syntax for a NAMED function?
// A function is typically named.
// Syntax for a named function:
// function FunctionName () {
//     code to run;
// }
// A named function was demonstrated above.

// How do we assign a function to a variable?
// A function can be stored in a variable.

var x = function (y, z) {return y + z};
// This is an anonymous function as it doesn't have a function name and will be
// called by the variable.

x (1,1); // returns 2

// Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How 
// do we specify inputs, and how do we specify outputs?
// Functions can accept arguments (inputs), but it is not required.
// Our function, myFunctionName, does not take any arguments. It simply runs the 
// code once called on.
// But our other function, printMyName, does. It takes input at the time the 
// function is called.
printMyName('Laura'); // logs 'Laura'. Laura is the input.

// Neither of these two functions have an output. An output is identified with
// the keyword 'return'.

function add(y, z) {
    return y + z;
}
add(1,1); // returns 2; 2 would be the output of the function.
console.log(add(1,1)); // Here the function add is returning the value 2 to the
// 'caller'.

// Scope: Functions can see and modify variables in parent or global scopes. The 
// inverse is NOT true.
// Variables declared within a function, become local to the function and
// so they have local scope. Locally scoped variables are only accessible inside
// that function.
function sub(y, z) {
    return y - z;
}
// The above variable y is locally scoped. If we try to log y, it will return as
// undefined. 

// A variable declared outside a function, becomes globally scoped. Any function
// can access a global variable. 
var x = 10;
function div(y) {
    return x / y;
}
// The function can access the variable x even though x was not declared inside 
// the function. 
// The reverse is not true. If we try to assign x the value of y, it will return 
// as undefined.
// var x = y; returns as y is undefined.

// Closures: Functions form closures around the data they house. If an object 
// returned from the Function and is held in memory somewhere (referenced), that 
// closure stays ALIVE, and data can continue to exist in these closures!

function theWhiteStripes (member1, member2) {
    var intro = "We are ";
        function bandName () {        
            return intro + member1 + ' and ' + member2 + ' and we are The White Stripes!';    
        } // bandName has access to intro since intro was created in the parent
        // scope
    return bandName (); //
}
// console.log(intro); // logs a reference error since intro is only directly 
// accessible within theWhiteStripes function.
console.log(theWhiteStripes ('Jack','Meg')); // logs "We are Jack and Meg and we
// are The White Stripes!"
// We are able to access intro here since intro was returned to bandName, then 
// returned to theWhiteStripes, which was called by console.log.

