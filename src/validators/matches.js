function matches(regex, { errorMessage = null } = {}) {
  return (k, params) => {
    if (!regex.test(params[k])) {
      return Promise.reject({
        expected: errorMessage || 'matching regex',
        received: 'did not match regex',
        key: k,
      });
    }

    return Promise.resolve();
  };
}

module.exports = matches;
