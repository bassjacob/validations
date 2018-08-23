const assert = require('assert');

function range(lower, upper) {
  const length = upper - lower;
  const keys = Array(length).keys();
  return Array.from(keys).map(elem => elem + lower);
}

function isDeepEqual(a, b) {
  try {
    assert.deepEqual(a, b);
    return true;
  } catch (e) {
    return false;
  }
}

function flatten(xs) {
  return xs.reduce((p, c) => p.concat(c), []);
}

module.exports = {
  flatten,
  isDeepEqual,
  range,
};
