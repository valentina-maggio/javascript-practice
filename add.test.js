const add = require('./add');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('adds 5 and 0', () => {
    expect(add(5, 0)).toBe(5);
  });
});