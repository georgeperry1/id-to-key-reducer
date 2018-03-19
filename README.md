[![npm version](https://badge.fury.io/js/id-to-key.svg)](https://badge.fury.io/js/id-to-key)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/georgeperry1/id-to-key-reducer)
[![codecov](https://codecov.io/gh/georgeperry1/id-to-key-reducer/branch/master/graph/badge.svg)](https://codecov.io/gh/georgeperry1/id-to-key-reducer)


# id-to-key-reducer
This package helps you normalize API or JSON data by reducing an array of objects into a new object with their ids as the keys. It is intended to help 'flatten' data for use with libraries such as React and Redux.


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

Using basic data from a simple JSON API:

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
We want to take the "id" property and set it as the key in a new object:

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

## Dependencies

None.
