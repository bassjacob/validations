const isObject = require('../../../src/validators/is-object');

describe('is object', () => {
  it('resolves if object', () => {
    const params = {
      name: {
        first: 'jacob',
        last: 'bass',
      },
    };

    expect.assertions(1);

    return expect(isObject('name', params)).resolves.toEqual(undefined);
  });

  it('rejects if not object', () => {
    const params = {
      name: 'jacob bass',
    };

    expect.assertions(1);

    return expect(isObject('name', params)).rejects.toEqual({
      expected: 'to be an object',
      key: 'name',
      received: 'string',
    });
  });
});
