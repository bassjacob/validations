function isObject(k /* : string */, params /* : Promise */) {
  if (
    !(
      params[k] != null &&
      typeof params[k] === 'object' &&
      Array.isArray(params[k]) === false
    )
  ) {
    return Promise.reject({
      expected: 'to be an object',
      received: typeof params[k],
      key: k,
    });
  }

  return Promise.resolve();
}

module.exports = isObject;
