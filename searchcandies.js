const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
  ]

const searchCandies = (letter, pr) => {
  return candies
    .filter(candy => candy.price < pr 
      && candy.name.toLowerCase().startsWith(letter.toLowerCase()))
    .map(candy => candy.name
  );
}

console.log(searchCandies('A', 5));
console.log(searchCandies('s', 10));
console.log(searchCandies('ma', 2));

module.exports = searchCandies;




// SECOND EXERCISE:
//
// First solution:
//
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isEvenNumber = (number) => {
//   return number
//   .filter(n => n % 2 === 0);
// }



// Second solution:
//
//const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isEvenNumber = (number) => {
//   return number % 2 === 0;
// }

// const evenNumbers = (numbers) => {
//   return numbers.filter(n => isEvenNumber(n))
// };

// console.log(evenNumbers(numbers));