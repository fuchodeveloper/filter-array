import { expect } from 'chai';
import should from 'should';
import filterArrayInput from '../src/filterArrayInput';

describe('Simple test to illustrate testing and debugging', () => {
  it('should return "Please supply an input" if input is not supplied', (done) => {
    expect(filterArrayInput()).to.equal('Please supply an input');   
    done();
  });

  it('should not be an empty array', (done) => {
    expect(filterArrayInput([])).to.equal('Input cannot be empty');
    done();
  });

  it('should contain an array of numbers', (done) => {
    expect(filterArrayInput('hello world')).to.equal('Input must be an array of numbers');
    done();
  })

  it('should return number even if even and odd if odd ', (done) => {
    expect(filterArrayInput([1, 2, 3, 4])).to.equal({evenArray:[2, 4], oddArray:[1, 3]});
    done();
  })

  it('should return number even if even and odd if odd ', (done) => {
    expect(filterArrayInput(2,2,2,2)).to.equal('Input must be an array');
    done();
  })

  it('should return number even if even and odd if odd ', (done) => {
    expect(filterArrayInput({})).to.equal('Please pass in an array');
    done();
  })

  it('should return even if it is ', (done) => {
    const filteredOutput = [1, 2, 3, 4, 5, 6];
    filteredOutput.should.be.an('object');
    filteredOutput.should.have.a.property('evenArray');
    filteredOutput.should.have.a.property('oddArray');
    done();
  })

});
