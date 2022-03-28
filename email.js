const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (phone) => {
  return `Text sent to: ${phone}`;
}

const notify = (phoneOrEmail, messageOrEmail) => {
  return messageOrEmail(phoneOrEmail);
}

console.log(notifyByEmail('test@email.com'));
console.log(notifyByText('0011223344'));
console.log(notify('000', notifyByText));
console.log(notify('myemail@email.com', nnotifyByEmail));