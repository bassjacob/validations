function isDifferent(
  field /* : string */,
  { errorMessage = null } = {} /* : Promise */
) {
  return (k, params) => {
    const left = params[field];
    const right = params[k];

    if (left !== right) {
      return Promise.resolve();
    }

    return Promise.reject({
      expected: errorMessage || `to be different to ${left}`,
      received: params[k],
      key: k,
    });
  };
}

module.exports = isDifferent;
