const generateMessages = (names) => {
  return names.map(name => {
   return `Hi ${name}! 50% off our best candies for you today!`;
  });
}



const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

console.log(generateMessages(names));