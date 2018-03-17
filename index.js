'use strict'

const idToKey = (data) => {
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
    } else {
      throw new Error('data is not an array');
    }
  }
  catch (error) {
    return error;
  }
}

module.exports = idToKey;
