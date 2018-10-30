// Control flow statements:
// Control flow allows us to execute different blocks of code depending on
// conditional statements. Code can be set to execute once a pre-set condition
// is met.

// If statement
// A block of code set to execute if the condition is met.
// syntax: if (condition) {
//     block of code to be executed if the condition is true
// }
let salary = 25000;
if (salary < 60000) {
    console.log('Get to work!');
}
// logs 'Get to work!'.
// Since the conditional statement was met, the code inside the brackets 
// executed.

// Else-if
// A block of code set to execute once a new condition is met, if the prior 
// condition was not met.

salary = 75000;
if (salary < 60000) {
    console.log('Get to work!');
}
else if (salary > 60000 && salary < 80000) {
    console.log('We\'re getting there!');
}
// logs 'We're getting there!'.
// Since the first conditional statement was not met, and the second conditional
// statement was met, the code inside the second set of brackets was executed.

// You can chain together multiple else if statements to specify multiple conditions.

salary = 120000;
if (salary < 60000) {
    console.log('Get to work!');
}
else if (salary > 60000 && salary < 100000) {
    console.log('We\'re getting there!');
}
else if (salary >= 100000 && salary < 500000) {
    console.log('We made it!!!'); // logs 'We made it!!!'
// The first two conditions were not met, so those code blocks didn't execute.
// This condition evaluated to true, so this code was executed.
}
else if (salary < 1000000) {
    console.log('Ballin!'); 
}
// NOTE: Once a condition is met, the subsequent conditional statements are ignored.
// The 4th statement evaluates to true, but is ignored since the 3rd statement 
// is true and that code block has already run.

// Else statement
// A block of code set to execute if no conditions are met. 
salary = 2000000;
if (salary < 60000) {
    console.log('Get to work!');
}
else if (salary > 60000 && salary < 100000) {
    console.log('We\'re getting there!');
}
else if (salary >= 100000 && salary < 500000) {
    console.log('We made it!!!'); 
}
else if (salary >= 500000 && salary <= 1000000) {
    console.log('Ballin!'); 
}

else {
    console.log('Errday I\'m hustlin!');
}
// logs 'Errday I\'m hustlin!'
// none of the prior statements were true, so the else statement's code block 
//ran.
// PLEASE NOTE: The conditional statement must evaluate to 'true' for the specified
// code to execute. If none evaluate to 'true', then the else statement will run.

// Switch
// Switch statements are similar to if-else statements. Switch statements are a
// shorthand version if you have many conditions to check.
// Syntax:
// switch (condition) {
//      case :
//      (code to execute)
//      break;
//      case : 
//      (code to execute)
//      break;
//      default : 
//      (code to execute)
//      }

// Here is the same code as above in a switch statement.
salary = 700000;
switch (true) {     // true is the condition that must be met
    case salary < 60000 : // evaluates to false
    console.log('Get to work!');
    break;
    case salary > 60000 && salary < 100000 : // evaluates to false
    console.log('We\'re getting there!');
    break;
    case salary >= 100000 && salary < 500000 : // evaluates to false
    console.log('We made it!!!'); 
    break; 
    case salary >= 500000 && salary <= 1000000 : // evaluates to true
    console.log('Ballin!'); // so this code will run
    break;
    default :
    console.log('Errday I\'m hustlin!'); // ignored since the above case evaluated
}                                        // to true