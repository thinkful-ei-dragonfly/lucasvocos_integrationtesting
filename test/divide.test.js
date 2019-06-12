const divide = require('../index');
const expect = require('chai').expect;


describe('TESTING DIVIDE', () => {
  it('should divide positive integers correctly', () => {
    expect(divide(8,4)).to.equal(2);
  })
  it('should divide negative integers correctly', () => {
    expect(divide(-8,-4)).to.equal(2);
  })
  it('should throw an error when dividing by zero', () => {
    expect(() => {divide(8,0)}).to.throw();
  })
})
