const isPresent = require('../../src/validators/is-present');
const validatorFactory = require('../../src/validator');

describe('validator', () => {
  it('rejects if a validator fails', () => {
    const instance = {
      key1: 'value1',
      key2: 'value2',
    };

    const params = {};

    const map = {
      key1: [isPresent],
    };

    const runner = validatorFactory({ check: map });

    expect.assertions(1);

    return runner(params, instance).catch(error =>
      expect(error.message).toEqual('Could not validate')
    );
  });

  it('resolves if all validators pass', () => {
    const instance = {
      key1: 1,
      key2: 'value2',
    };

    const params = {
      key1: 4,
    };

    const map = () => ({
      key1: [isPresent],
    });

    const runner = validatorFactory({ check: map });

    expect.assertions(2);

    return runner(params, instance, { length: 3 }).then(value => {
      expect(value.key1).toEqual(4);
      expect(value.key2).toEqual('value2');
    });
  });
});
