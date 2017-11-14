function isNumber(k /* : string */, params /* : Promise */) {
  let value = params[k];

  if (value instanceof Number) value = value.valueOf();

  // eslint-disable-next-line
  const valid = typeof value === 'number' && !isNaN(value);

  if (!valid) {
    return Promise.reject({
      expected: 'a number',
      received: `not a number`,
      key: k,
    });
  }

  return Promise.resolve();
}

module.exports = isNumber;
