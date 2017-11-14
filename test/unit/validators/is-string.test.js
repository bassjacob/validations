const isString = require('../../../src/validators/is-string');

describe('is string', () => {
  it('resolves if string', () => {
    const params = {
      name: 'jacob',
    };

    expect.assertions(1);

    return expect(isString('name', params)).resolves.toEqual(undefined);
  });

  it('rejects if not string', () => {
    const params = {
      name: 123,
    };

    expect.assertions(1);

    return expect(isString('name', params)).rejects.toEqual({
      expected: 'string',
      key: 'name',
      received: 'number',
    });
  });
});
