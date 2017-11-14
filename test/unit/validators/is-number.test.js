const isNumber = require('../../../src/validators/is-number');

describe('is number', () => {
  it('resolves if number', () => {
    const params = {
      age: 9,
    };

    expect.assertions(1);

    return expect(isNumber('age', params)).resolves.toEqual(undefined);
  });

  it('rejects if not number', () => {
    const params = {
      age: 'nine',
    };

    expect.assertions(1);

    return expect(isNumber('age', params)).rejects.toEqual({
      expected: 'a number',
      key: 'age',
      received: 'not a number',
    });
  });
});
