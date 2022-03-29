const searchCandies = require('./searchcandies');

describe('searchCandies', () => {
  it('returns all candies beginning with A costing less then £5', () => {
    expect(searchCandies('A', 5)).toEqual(['Aero'])
  });

  it('returns all candies beginning with Ma costing less then £10', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
  });

  it('returns all candies beginning with Ma costing less then £2', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
  });

  it('returns all candies beginning with S costing less then £10', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
  });

  it('returns all candies beginning with S costing less then £4', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles'])
  })

  it('returns all candies beginning with S (case insensitive) costing less then £4', () => {
    expect(searchCandies('s', 4)).toEqual(['Skitties', 'Skittles'])
  })

  it('returns all candies beginning with Ma (case insensitive) costing less then £2', () => {
    expect(searchCandies('ma', 2)).toEqual(['Mars'])
  });
});