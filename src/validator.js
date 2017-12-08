/*
  takes { key: [validators], key: [validators] }
  resolves if all pass
  rejects with result of all if any fail
*/

function runValidator(params, instance) {
  return ({ key, validator }) => {
    try {
      return validator(key, params, instance).catch(error => ({
        key,
        error,
      }));
    } catch (e) {
      return Promise.resolve({
        key,
        error: e.message,
      });
    }
  };
}

function reducer(map) {
  return (acc, key) =>
    acc.concat(
      map[key].map(validator => ({
        key,
        validator,
      }))
    );
}

function calculateErrors(results) {
  return results.reduce((acc, result) => {
    if (result) {
      acc[result.key] = acc[result.key] || [];
      acc[result.key].push(result.error);
    }

    return acc;
  }, {});
}

function handleResults(results, params, instance, merge) {
  const errors = calculateErrors(results);

  if (Object.keys(errors).length > 0) {
    const error = new Error('Could not validate');
    error.name = 'ValidationError';
    error.data = errors;
    throw error;
  }

  return merge(params, instance);
}

function defaultMerge(params, instance) {
  return Object.keys(params).reduce((acc, key) => {
    acc[key] = params[key];

    return acc;
  }, instance);
}

function validatorFactory({
  check,
  pre = (data, params) => params,
  post = defaultMerge,
}) {
  return async (params, instance, data) => {
    const validators = typeof check === 'object' ? check : check(data);

    const richParams = await pre(data, params);
    const runner = runValidator(richParams, instance);

    return Promise.all(
      Object.keys(validators)
        .reduce(reducer(validators), [])
        .map(runner)
    ).then(results => handleResults(results, richParams, instance, post));
  };
}

module.exports = validatorFactory;
