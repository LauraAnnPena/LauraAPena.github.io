// 1. Assignment operators:
// Assignment operators are used to assign values to variables. Arithmetic 
//operaters can be combined with = for shorthand arithmetic.
let x = 5; // value 5 is assigned to x
x += 5; // returns 10; same as x = x + 5
x -= 5; // returns 0
x *= 5; // returns 25
x /= 5; // returns 1
x %= 5; // returns 0

// 2. Arithmetic operators:
// Arithmetic operators are used to perform arithmetic between values.
// + addition 
x = 2 + 2;
// - subtraction
x = 2 - 2;
// * multiplication
x = 2 * 2;
// / Division
x = 2/2; 
// % remainder
x = 10 % 3; // returns 1

// 3. Comparison operators:
// Used in logical statements to determine equality  or differences between 
// values.

// == equal to; takes value of the string into consideration
'5' == 5; // returns true

// === strictly equal to; does not take value into consideration
'5' === 5; //returns false

// != not equal 
5 != 10; // returns true

// !== strictly not equal; 
'5' !== 5; // returns true
5 !== 5; // returns false

// > Greater than
5 > 0; // true

// < less than
5 < 10; // true

// >= Greater than or equal to
5 >= 0; // true
5 >= 5; // true

// <= Less than or equal to
5 <= 10; // true
5 <= 5; // true

// 4. Logical operators
// Used to determine the logic between values.
// && and
5 > 0 && 5 < 10; //true since both expressions are true
5 > 0 && 5 > 10; // false since only one expression is true

// || or
5 === 5 || 5 === 10; // returns true since either expression is true

// ! not
5 !== 10; // true since 5 is NOT equal to 10

// 5. Unary operators (!, typeOf, -)
// An unary operator is an operation with only one operand.
// Syntax: [operator](operand)

typeof 3; // returns "number"
// typeof is the opertor and 3 is the operand;

let faveColors = ['blue', 'green', 'pink'];
delete faveColors[0]; //deleted blue
// delete is the operator and faveColors[0] is the operand

!true; // returns false
// ! is the operator and true is the operand

-100; // - is the operator and 100 is the operand. It is - of (postive) 100.

// 6. Ternary operator (a ? b : c)
// Can be known as the conditional operater. It takes three operands.
// It first evaluates the conditional statement is true, and if so, executes the
// first expression. If not, it executes the second.
(10 > 5) ? console.log ('Yes, that\'s true!') : console.log('No, that\'s false!');
// returns 'Yes, that's true!'
(0 > 5) ? console.log ('Yes, that\'s true!') : console.log('No, that\'s false!');
// returns 'No, that's false!'