const { range } = require('../helpers');

const MINUTES = range(0, 60);

function isMinute(k /* : string */, params /* : Promise */) {
  if (!MINUTES.includes(params[k])) {
    return Promise.reject({
      expected: 'to be a valid minute',
      received: params[k],
      key: k,
    });
  }

  return Promise.resolve();
}

module.exports = isMinute;
