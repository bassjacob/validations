const isArray = require('./is-array');

function each(f, { errorMessage = null } = {}) {
  return (k /* : string */, params /* : Promise */) =>
    isArray(k, params)
      .then(() => Promise.all(params[k].map(f)))
      .then(() => Promise.resolve())
      .catch(() =>
        Promise.reject({
          expected: errorMessage || 'for each element to be valid',
          received: params[k],
          key: k,
        })
      );
}

module.exports = each;
