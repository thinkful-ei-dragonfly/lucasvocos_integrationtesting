const expect = require('chai').expect;
const diff = require('../arrayDiff')

describe('ARRAY DIFF', () => {
  it('should return array "a" if no common elements are found', () => {
    expect(diff([1,2,3],[4,5,6])).to.eql([1,2,3]);
  });
  it('should throw an error if string is entered instead of array', () => {
    expect(() => {diff("a,b,c", ["a", "b", "c", "d"])}).to.throw();
  });
  it('should throw an error if an empty array is entered', () => {
    expect(() => {diff([],[1,2,3,4])}).to.throw();
  })
  it('should remove 1 from [1,2,3]', () => {
    expect(diff([1,2,3], [1])).to.not.include(1);
  })
})
