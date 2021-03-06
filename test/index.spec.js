'use strict'

const chai = require('chai');
const expect = chai.expect;
const should = chai.should;
const assert = chai.assert;
const mockArrayData = require('../__mock__/mockArrayData');
const mockArrayDataTwo = require('../__mock__/mockArrayDataTwo');
const mockObjectData = require('../__mock__/mockObjectData');
const mockObjectDataTwo = require('../__mock__/mockObjectDataTwo');
const idToKeyTest = require('../index');

describe('idToKey', () => {
  const mockDataOne = mockArrayData;
  const mockDataTwo = mockObjectData;
  const mockDataThree = mockArrayDataTwo;
  const mockDataFour = mockObjectDataTwo;
  const str = 'Not an array or object';
  const num = 42;
  const func = () => console.log('Not an array or object');
  const newDataOne = idToKeyTest(mockDataOne);
  const newDataTwo = idToKeyTest(mockDataTwo, 'name');
  const newDataThree = idToKeyTest(mockDataThree);
  const newDataFour = idToKeyTest(mockDataFour, 'name');
  const newDataFive = idToKeyTest(str);
  const newDataSix = idToKeyTest(num);
  const newDataSeven = idToKeyTest(func);

  it('should return an Object', () => {
    expect(newDataOne).to.be.an('object');
    expect(newDataTwo).to.be.an('object');
    expect(newDataThree).to.be.an('object');
    expect(newDataFour).to.be.an('object');
  });

  it('should only accept Arrays and Objects', () => {
    expect(newDataOne).to.not.be.an('error');
    expect(newDataTwo).to.not.be.an('error');
    expect(newDataThree).to.not.be.an('error');
    expect(newDataFour).to.not.be.an('error');
  });

  it('should return an Object with ids as keys', () => {
    expect(newDataOne).to.have.property('1001');
    expect(newDataOne).to.have.property('1002');
    expect(newDataOne).to.have.property('1003');
    expect(newDataOne).to.have.property('1004');
    expect(newDataOne).to.have.property('1005');
    expect(newDataOne).to.not.have.property('1009');
    expect(newDataTwo).to.have.property('1001');
    expect(newDataTwo).to.have.property('1002');
    expect(newDataTwo).to.have.property('1003');
    expect(newDataTwo).to.have.property('1004');
    expect(newDataTwo).to.have.property('1005');
    expect(newDataTwo).to.not.have.property('1009');
    expect(newDataThree).to.have.property('2001');
    expect(newDataThree).to.have.property('2002');
    expect(newDataThree).to.have.property('2003');
    expect(newDataThree).to.have.property('2004');
    expect(newDataThree).to.have.property('2005');
    expect(newDataThree).to.not.have.property('2009');
    expect(newDataFour).to.have.property('2001');
    expect(newDataFour).to.have.property('2002');
    expect(newDataFour).to.have.property('2003');
    expect(newDataFour).to.have.property('2004');
    expect(newDataFour).to.have.property('2005');
    expect(newDataFour).to.not.have.property('2009');
  });

  it('should return an Object with the key values as the original Objects', () => {
    expect(newDataOne).to.have.nested.property('1001.name');
    expect(newDataOne).to.have.nested.property('1001.age');
    expect(newDataOne).to.not.have.nested.property('1001.height');
    expect(newDataTwo).to.have.nested.property('1001.name');
    expect(newDataTwo).to.have.nested.property('1001.age');
    expect(newDataTwo).to.not.have.nested.property('1001.height');
    expect(newDataThree).to.have.nested.property('2001.name');
    expect(newDataThree).to.have.nested.property('2001.age');
    expect(newDataThree).to.not.have.nested.property('2001.height');
    expect(newDataFour).to.have.nested.property('2001.name');
    expect(newDataFour).to.have.nested.property('2001.age');
    expect(newDataFour).to.not.have.nested.property('2001.height');
  });

  it('should set the oldId as a property on the new Object when used on an Object', () => {
    expect(newDataTwo).to.have.nested.property('1001.name');
    expect(newDataFour).to.have.nested.property('2001.name');
  });

  it('should throw an error if passed data that is not an object or array', () => {
    expect(newDataFive).to.be.an('error');
    expect(newDataSix).to.be.an('error');
    expect(newDataSeven).to.be.an('error');
  });
});
