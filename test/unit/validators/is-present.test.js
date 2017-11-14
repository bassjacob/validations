const isPresent = require('../../../src/validators/is-present');

describe('is present', () => {
  it('resolves if present', () => {
    const params = {
      name: 'anoop',
    };

    expect.assertions(1);

    return expect(isPresent('name', params)).resolves.toEqual(undefined);
  });

  it('rejects if not present', () => {
    const params = {
      name: 'jacob bass',
    };

    expect.assertions(1);

    return expect(isPresent('age', params)).rejects.toEqual({
      expected: 'to not be null',
      key: 'age',
      received: null,
    });
  });
});
