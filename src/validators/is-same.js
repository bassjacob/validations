function isSame(field, { errorMessage = null } = {}) {
  return (key, params) => {
    const left = params[field];
    const right = params[key];

    if (left === right) {
      return Promise.resolve();
    }

    return Promise.reject({
      expected: errorMessage || `to be the same as ${left}`,
      received: params[key],
      key,
    });
  };
}

module.exports = isSame;
