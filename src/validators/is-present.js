function isPresent(k /* : string */, params /* : Promise */) {
  if (params[k] == null) {
    return Promise.reject({
      expected: 'to not be null',
      received: null,
      key: k,
    });
  }

  return Promise.resolve();
}

module.exports = isPresent;
