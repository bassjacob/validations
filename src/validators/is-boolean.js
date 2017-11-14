function isBoolean(k /* : string */, params /* : Promise */) {
  if (typeof params[k] !== 'boolean') {
    return Promise.reject({
      expected: 'too be a bool',
      received: params[k],
      key: k,
    });
  }

  return Promise.resolve();
}

module.exports = isBoolean;
