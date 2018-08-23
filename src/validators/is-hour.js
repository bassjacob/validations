const { range } = require('../helpers');

const HOURS = range(0, 24);

function isHour(k /* : string */, params /* : Promise */) {
  if (!HOURS.includes(params[k])) {
    return Promise.reject({
      expected: 'to be a valid hour',
      received: params[k],
      key: k,
    });
  }

  return Promise.resolve();
}

module.exports = isHour;
