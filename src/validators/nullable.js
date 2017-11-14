function nullable(f) {
  return (k /* : string */, params, instance) => {
    if (!params[k]) {
      return Promise.resolve();
    }

    return f(k, params, instance);
  };
}

module.exports = nullable;
