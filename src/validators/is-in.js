function isIn(values = [], { errorMessage = null } = {}) {
  return (k, params) => {
    const value = params[k];

    if (!values.includes(value)) {
      return Promise.reject({
        expected:
          errorMessage ||
          `${JSON.stringify(params[k])} in ${JSON.stringify(values)}`,
        received: value,
        key: k,
      });
    }

    return Promise.resolve();
  };
}

module.exports = isIn;
