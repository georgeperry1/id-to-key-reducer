[![npm version](https://badge.fury.io/js/id-to-key.svg)](https://badge.fury.io/js/id-to-key)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/georgeperry1/id-to-key-reducer)
[![codecov](https://codecov.io/gh/georgeperry1/id-to-key-reducer/branch/master/graph/badge.svg)](https://codecov.io/gh/georgeperry1/id-to-key-reducer)


# id-to-key-reducer
This package helps you normalize API or JSON data by reducing an array or object of objects into a new object with their ids as the keys. It is intended to help 'flatten' data for use with libraries such as React and Redux. This reducer works with both ```id``` and ```_id``` on arrays and objects.


## Installation

```shell
npm install id-to-key
```

## Usage

```js
const idToKey = require('id-to-key');
```
or

```js
import idToKey from 'id-to-key';
```

## Example

Use with an Array:

Input:
```js
  const data = [
    {
      name: 'Ben',
      age: 47,
      _id: 1001
    },
    {
      name: 'Aaron',
      age: 27,
      _id: 1002
    },
    {
      name: 'Brendan',
      age: 25,
      _id: 1003
    },
    {
      name: 'Sachin',
      age: 25,
      _id: 1004
    },
    {
      name: 'Ibrahim',
      age: 59,
      _id: 1005
    }
  ];
```
We want to take the ```id``` property and set it as the key in a new object:

```js
const idToKey = require('id-to-key');

const newData = idToKey(data);

```

Output:
```js
const newData = {
  1001: {
    name: 'Ben',
    age: 47,
    _id: 1001
  },
  1002: {
    name: 'Aaron',
    age: 27,
    _id: 1002
  },
  1003: {
    name: 'Brendan',
    age: 25,
    _id: 1003
  },
  1004: {
    name: 'Sachin',
    age: 25,
    _id: 1004
  },
  1005: {
    name: 'Ibrahim',
    age: 59,
    _id: 1005
  }
}

```

Use with an Object:

Input:
```js
  const data = {
    Ben: {
      age: 47,
      _id: 1001
    },
    Aaron: {
      age: 27,
      _id: 1002
    },
    Brendan: {
      age: 25,
      _id: 1003
    },
    Sachin: {
      age: 25,
      _id: 1004
    },
    Ibrahim: {
      age: 59,
      _id: 1005
    }
  };
```
With an object, be sure to pass it an ```'oldId'``` argument if you want to current key to become a property on the object, which should be a **STRING**. In the example below, ```'name'``` is passed, which will cause each object to have a ```'name'``` property with as name as the value.

```js
const idToKey = require('id-to-key');

const newData = idToKey(data, 'name');

```

Output:
```js
const newData = {
  1001: {
    age: 47,
    _id: 1001,
    name: 'Ben'
  },
  1002: {
    age: 27,
    _id: 1002,
    name: 'Aaron'
  },
  1003: {
    age: 25,
    _id: 1003,
    name: 'Brendan'
  },
  1004: {
    age: 25,
    _id: 1004,
    name: 'Sachin'
  },
  1005: {
    age: 59,
    _id: 1005,
    name: 'Ibrahim'
  }
}

```

## Coming soon

* Custom 'id' identifiers; for example 'id-number'
* Increase test coverage to 100%

## Dependencies

None.
