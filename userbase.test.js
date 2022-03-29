const UserBase = require('./userbase');
const User = require('./user');

describe('UserBase', () => {

  // beforeEach(() => {
  //   const users = [
  //     new User('Uma'),
  //     new User('Josh'),
  //     new User('Ollie')
  //   ];
  // });

  it('counts the users', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const sut = new UserBase(users);
    expect(sut.count()).toBe(3)
  });
  it('returns an array of names', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const sut = new UserBase(users);
    expect(sut.getNames()).toStrictEqual([ 'Uma', 'Josh', 'Ollie' ]);
  })
  it('introduces the users one by one', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const sut = new UserBase(users);
    expect(sut.getIntroductions()).toStrictEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie'
    ]);
  })
});