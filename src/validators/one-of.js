function oneOf(validators, { errorMessage = null } = {}) {
  return async (k, params, instance = {} /* : Promise */) => {
    const results = await Promise.all(
      validators.map(validator =>
        validator(k, params, instance || {})
          .then(() => null)
          .catch(e => e.received)
      )
    );

    if (results.some(v => !v)) {
      return Promise.resolve();
    }

    const errors = results.filter(v => v);

    return Promise.reject({
      expected: errorMessage || 'a nested validator to pass',
      received: errors,
      key: k,
    });
  };
}

module.exports = oneOf;
