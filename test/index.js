import { expect } from 'chai';
import should from 'should';
import filterArrayInput from '../src/filterArrayInput';

describe('Test for user supplied input in filterArrayInput function', () => {
  it('should return "Please supply an input" if input is not supplied', (done) => {
    expect(filterArrayInput()).to.equal('Please supply an input');   
    done();
  });

  it('should not be an empty array', (done) => {
    expect(filterArrayInput([])).to.equal('Input cannot be empty');
    done();
  });

  it('should not be a string input', (done) => {
    expect(filterArrayInput('hello world')).to.equal('Input must be an array');
    done();
  });

  it('should only accept an array of numbers', (done) => {
    expect(filterArrayInput(2,2,2,2)).to.equal('Input must be an array of numbers');
    done();
  });

  it('should return "Please pass in an array" if object arguments are passed', (done) => {
    expect(filterArrayInput({})).to.equal('Please pass in an array');
    done();
  });

});

describe('Test for filterArrayInput results', () => {
  it('should expect result to be an object', (done) => {
    expect(filterArrayInput([1, 2, 3, 4, 5, 6])).to.be.an('object');
    done();
  });

  it('should expect result to have a property "evenArray"', (done) => {
    expect(filterArrayInput([1, 2, 3, 4, 5, 6])).to.have.a.property('evenArray');
    done();
  });

  it('should expect result to have a property "oddArray"', (done) => {
    expect(filterArrayInput([1, 2, 3, 4, 5, 6])).to.have.a.property('oddArray');
    done();
  });

  it('should expect oddArray in result to not be empty ', (done) => {
    expect(filterArrayInput([1, 2, 3, 4, 5, 6])).to.have.a.property('oddArray').to.not.be.empty;
    done();
  });

  it('should expect evenArray in result to not be empty', (done) => {
    expect(filterArrayInput([1, 2, 3, 4, 5, 6])).to.have.a.property('evenArray').to.not.be.empty;
    done();
  });
});