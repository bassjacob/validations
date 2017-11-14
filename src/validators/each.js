const isArray = require('./is-array');

function each(f) {
  return (k /* : string */, params /* : Promise */) =>
    isArray(k, params)
      .then(() => Promise.all(params[k].map(f)))
      .then(() => Promise.resolve())
      .catch(() =>
        Promise.reject({
          expected: 'for each element to satisfy the function',
          received: 'some did not',
          key: k,
        })
      );
}

module.exports = each;
