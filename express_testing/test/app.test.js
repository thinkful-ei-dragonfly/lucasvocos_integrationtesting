const app = require('../app')
const expect = require('chai').expect;
const request = require('supertest');

describe('TEST SERVER', () => {
  it('GET / should return a greeting',() => {
    request(app)
      .get('/')
      .expect(200)
  })
})
describe('GET /divide', () => {
  it('8/4 should be 2', () => {
    return request(app)
      .get('/divide')
      .query({a:8, b:4})
      .expect(200, '8 divided by 4 is 2')
  })
  it('should return 400 if a is missing', () => {
    return request(app)
      .get('/divide')
      .query({b: 4})
      .expect(400, 'Value for "a" is needed');
  });
})
describe('GET /generate', () => {
  it('should generate an array of 5', () => {
    return request(app)
        .get('/generate')
        .query({n:5})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf.at.least(1);
          expect(res.body).to.have.lengthOf(5);
          expect(res.body).to.have.members([1,2,3,4,5])
        })
  })
})
describe('GET /frequency', () => {
  it('should return frequency of letter in string', () => {
    return request(app)
      .get('/frequency')
      .query({s: "Lionel Messi"})
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.any.keys("unique", "average", "highest")

      })
  })
})
