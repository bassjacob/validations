function length(n /* : number */, { errorMessage = null } = {}) {
  return (k, params) => {
    if (params[k].length !== n) {
      return Promise.reject({
        expected: errorMessage || `length of ${n}`,
        received: `length of ${params[k].length}`,
        key: k,
      });
    }

    return Promise.resolve();
  };
}

module.exports = length;
