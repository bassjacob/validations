const isBoolean = require('../../../src/validators/is-boolean');

describe('is boolean', () => {
  it('resolves if boolean', () => {
    const params = {
      active: true,
    };

    expect.assertions(1);

    return expect(isBoolean('active', params)).resolves.toEqual(undefined);
  });

  it('rejects if not boolean', () => {
    const params = {
      active: undefined,
    };

    expect.assertions(1);

    return expect(isBoolean('active', params)).rejects.toEqual({
      expected: 'too be a bool',
      key: 'active',
      received: undefined,
    });
  });
});
