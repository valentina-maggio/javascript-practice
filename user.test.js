const User = require('./user');

describe('User', () => {
  it('returns the name Valentina', () => {
    const sut = new User('Valentina');
    expect(sut.getName()).toBe('Valentina')
  });
  it('introduces the user by name', () => {
    const sut = new User('Valentina');
    expect(sut.getIntroduction()).toBe('Hi, my name is Valentina')
  });
});