function isArray(k /* : string */, params /* : Promise */) {
  if (!Array.isArray(params[k])) {
    return Promise.reject({
      expected: 'to be an array',
      received: typeof params[k],
      key: k,
    });
  }

  return Promise.resolve();
}

module.exports = isArray;
