'use strict'

const chai = require('chai');
const expect = chai.expect;
const should = chai.should;
const assert = chai.assert;
const mockArrayData = require('../__mock__/mockArrayData');
const mockArrayDataTwo = require('../__mock__/mockArrayDataTwo');
const mockObjectData = require('../__mock__/mockObjectData');
const idToKeyTest = require('../index');

describe('idToKey', () => {
  const mockDataOne = mockArrayData;
  const mockDataTwo = mockObjectData;
  const mockDataThree = mockArrayDataTwo;
  const newDataOne = idToKeyTest(mockDataOne);
  const newDataTwo = idToKeyTest(mockDataTwo);
  const newDataThree = idToKeyTest(mockDataThree);

  it('should return an Object', () => {
    expect(newDataOne).to.be.an('object');
    expect(newDataThree).to.be.an('object');
  });

  it('should only accept an Array', () => {
    expect(newDataOne).to.not.be.an('error');
    expect(newDataTwo).to.be.an('error');
    expect(newDataThree).to.not.be.an('error');
  });

  it('should return an Object with ids as keys', () => {
    expect(newDataOne).to.have.property('1001');
    expect(newDataOne).to.have.property('1002');
    expect(newDataOne).to.have.property('1003');
    expect(newDataOne).to.have.property('1004');
    expect(newDataOne).to.have.property('1005');
    expect(newDataOne).to.not.have.property('1009');
    expect(newDataThree).to.have.property('1001');
    expect(newDataThree).to.have.property('1002');
    expect(newDataThree).to.have.property('1003');
    expect(newDataThree).to.have.property('1004');
    expect(newDataThree).to.have.property('1005');
    expect(newDataThree).to.not.have.property('1009');
  });

  it('should return an Object with the key values as the original objects', () => {
    expect(newDataOne).to.have.nested.property('1001.name');
    expect(newDataOne).to.have.nested.property('1001.age');
    expect(newDataOne).to.not.have.nested.property('1001.height');
    expect(newDataThree).to.have.nested.property('1001.name');
    expect(newDataThree).to.have.nested.property('1001.age');
    expect(newDataThree).to.not.have.nested.property('1001.height');
  });
});
