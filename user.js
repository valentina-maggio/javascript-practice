class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return `${this.name}`;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}


//  user = new User('Valentina');

// console.log(user.getName());
// console.log(user.getIntroduction());

module.exports = User;