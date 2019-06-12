const sort = require('../sort')
const expect = require('chai').expect;

describe("SORT TESTING", () => {
  it('should sort an array of numbers', () => {
    let arr1 = sort([1,2,3,4]),
        arr2 = sort([4,3,2,1]);

    expect(arr1).to.deep.equal(arr2, 'the two arrays of numbers match');
  })
  it('should sort an array of strings', () => {
    let arr1 = sort(["apple","banana","carrot","donut"]),
        arr2 = sort(["donut","carrot","banana","apple"]);

    expect(arr1).to.deep.equal(arr2, 'the two arrays of strings match');
  })
  it('should throw an errorfor a mixed sort?', () => {
    expect(() => {sort(["apple",2,"carrot",4])}).to.throw();
  })
})
