const { isDeepEqual } = require('../helpers');

function deepEqual(value, { errorMessage = null } = {}) {
  return (key, params) => {
    if (!isDeepEqual(params[key], value))
      return Promise.reject({
        expected: errorMessage || `Must be === ${JSON.stringify(value)}`,
        received: params[key],
        key,
      });
    return Promise.resolve();
  };
}

module.exports = deepEqual;
