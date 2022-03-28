const checkLength = (phone) => {
  return phone.length <= 10;
}

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
}


console.log(checkLength('0465'));
console.log(checkLength('0499484774434374476464166465'));

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

console.log(filterLongNumbers(numbers));
console.log(filterLongNumbers(['4763687363', '7867867862'])); // no number to filter out
console.log(filterLongNumbers([]));
