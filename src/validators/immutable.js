const { isDeepEqual } = require('../helpers');

function immutable() {
  return (key, params, instance) => {
    if (!isDeepEqual(params[key], instance[key]))
      return Promise.reject('Can not change');
    return Promise.resolve();
  };
}

module.exports = immutable;
