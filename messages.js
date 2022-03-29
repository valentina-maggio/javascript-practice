const generateMessages = (names) => {
  return names.map(person => {
    return `Hi ${person.name}! ${person.discount} off our best candies for you today!`;
  });
}


const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

console.log(generateMessages(namesAndDiscounts));



// Other solution:
//
// const generateMessages = (namesAndDiscounts) => {
//   return namesAndDiscounts.map(item => {
//     const name = item.name;
//     const discount = item.discount;
//     return `Hi ${name}! ${discount}% off our best candies for you today!`;
//   });
// }