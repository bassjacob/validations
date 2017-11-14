function isDate(key, params) {
  if (Number.isNaN(Date.parse(params[key]))) {
    return Promise.reject({
      expected: 'too be a date',
      received: params[key],
      key,
    });
  }

  return Promise.resolve();
}

module.exports = isDate;
