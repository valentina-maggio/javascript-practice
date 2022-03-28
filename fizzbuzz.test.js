const fizzBuzz = require('./fizzBuzz')

describe('fizzBuzz', () => {
  it('returns FizzBuzz if number divisible by 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  });

  it('returns Fizz if number divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });

  it('returns Buzz if number divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  });

  it('returns 2 if number divisible by 2', () => {
    expect(fizzBuzz(2)).toBe(2)
  });
});