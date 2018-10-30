// 1. Explain while, for, and for-in loops
// while loops:
// The while loop executes a specified block of code as long as the condition is
// true.
// Syntax:
// while (condition) {
//     code to be executed
// }
var i = 2010;   // starting point
while (i <= 2018) {     // as long as this condition is true, 
  console.log('The year is ' + i);  // this code will continue to loop
  i++; // increment to increase by for each iteration. If this is left out, you'll
       // be creating an infinite loop. 
}
        // logs each year from 2010 increasing to 2018

// for loops:
// The for loop is similiar to the while loop as it continues to loop while a 
// certain condition remains true. For loops are typically used for arrays.
// Syntax:
// for (starting statement; conditional statement; increment) {
//     code to be executed
// }
var faveColors = ['blue', 'red', 'yellow', 'green'];
for (var i = 0; i < faveColors.length; i++) {
    // loop starts at index 0;
    // as long as i < the length of array, the code will continue to execute
    // increment is increased by 1 each iteration
    console.log('One of my favorite colors is ' + faveColors[i]);
}
    // logs my favorite colors one at a time in sequence

// for in loops:
// For in loops iterate over objects since they are not indexed and are in 
// key:value pairs. The loop executes code for each property.
// Syntax:
// for (variable in object) { 
//    code to execute
// }
var obj = {a: 1, b: 2, c: 3};
    
for (var key in obj) {
    // Variable key changes to the different keys in object "obj"
  console.log('Key is ' + key + ' and value is ' + obj[key]);
}
    // Code will continue to run on each pair through all object elements.

// Be able to loop any number of times, forward counting up to some limit, 
// backward counting down to 0
function countUpAndDown(max) {
  var i = 0;
   while (i <= max) {
     console.log(i);
     i++;
   }
  var j = max-1;
  while (j >= 0) {
    console.log(j);
    j--;
  }
}
countUpAndDown(10); // logs 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 
                    // 3, 2, 1, 0

// Loop over an Array, forwards and backwards

var arr1 = ['a','b', 'c', 'd', 'e'];
function forwards() {
    for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    } 
}
forwards(arr1); //logs each element in arr individually, left to right;

var arr2 = ['a','b', 'c', 'd', 'e']
function backwards() {
    for (var i = arr2.length-1; i >= 0; i--) {
    console.log(arr2[i]);
    } 
}
backwards(arr2); //logs each element in arr individually, right to left;

// Loop over an Object
var obj2 = {apple: 'fruit', banana: 'fruit', broccoli: 'vegetable', tomato: 'fruit',
        carrot: 'vegetable'};
    
for (var key in obj2) {
  console.log(key + ' is a ' + obj2[key]);
}
// logs
// "apple is a fruit"
// "banana is a fruit"
// "broccoli is a vegetable"
// "tomato is a fruit"
// "carrot is a vegetable"