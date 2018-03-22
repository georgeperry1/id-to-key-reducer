'use strict'

const idToKey = (data, oldId) => {
  try {
    if (Array.isArray(data)) {
      return data.reduce((object, item) => {
        if (item.hasOwnProperty('id')) {
          let id = item.id;
          return Object.assign(object, {[id]: item});
        }
        if (item.hasOwnProperty('_id')) {
          let id = item._id;
          return Object.assign(object, {[id]: item});
        }
      }, {});
    }
    if (typeof data === 'string' || typeof data === 'number' || typeof data === 'function') {
      throw new Error('Data should be an array or object');
    } else {
      return Object.keys(data).reduce((object, key) => {
        if (data[key].hasOwnProperty('id')) {
          let id = data[key].id;
          data[key][oldId] = key;
          return Object.assign(object, {[id]: data[key]});
        }
        if (data[key].hasOwnProperty('_id')) {
          let id = data[key]._id;
          data[key][oldId] = key;
          return Object.assign(object, {[id]: data[key]});
        }
      }, {});
    }
  }
  catch (error) {
    return error;
  }
}

module.exports = idToKey;
