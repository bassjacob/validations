function isString(k, params) {
  if (typeof params[k] !== 'string') {
    return Promise.reject({
      expected: 'string',
      received: typeof params[k],
      key: k,
    });
  }

  return Promise.resolve();
}

module.exports = isString;
