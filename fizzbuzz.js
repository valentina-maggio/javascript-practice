const fizzBuzz = (num) => {
  if (num % 15 === 0) {
    return 'FizzBuzz'; 
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else if (num % 3 == 0) {
    return 'Fizz'; 
  } else {
    return num;
  }
}
  

// for (let X = 1; X < 51; X++) {
//   console.log(`Fizzbuzz result for ${X} is ${fizzBuzz(X)}`);
// }

module.exports = fizzBuzz;