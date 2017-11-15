const oneOf = require('../../../src/validators/one-of');
const isNumber = require('../../../src/validators/is-number');
const isArray = require('../../../src/validators/is-number');

describe('oneOf', () => {
  it('resolves if oneOf', () => {
    const params = {
      age: 1,
    };

    expect.assertions(1);

    return expect(oneOf([isNumber, isArray])('age', params)).resolves.toEqual(
      undefined
    );
  });

  it('rejects if not oneOf', () => {
    const params = {
      age: 'one',
    };

    expect.assertions(1);

    return expect(oneOf([isNumber, isArray])('age', params)).rejects.toEqual({
      expected: 'a nested validator to pass',
      key: 'age',
      received: ['not a number', 'not a number'],
    });
  });
});
