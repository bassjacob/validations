function lessThan(value, { errorMessage = null } = {}) {
  return (key, params) => {
    if (params[key] >= value) {
      return Promise.reject({
        expected: errorMessage || `Must be < ${value}`,
        received: params[key],
        key,
      });
    }
    return Promise.resolve();
  };
}

module.exports = lessThan;
