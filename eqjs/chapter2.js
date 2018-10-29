// Exercise 1: Looping a triangle
// Put code Here
for (let i = 0; i < 7; i++) {
  console.log('#'.repeat(i+1));
}

// Exercise 2: FizzBuzz
for (var i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
       console.log('Fizz') ;
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

// Exercise 3: Chessboard