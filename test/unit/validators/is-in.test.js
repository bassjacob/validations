const isIn = require('../../../src/validators/is-in');

describe('is in', () => {
  it('resolves if included', () => {
    const params = {
      product: 'milk',
    };

    expect.assertions(1);

    return expect(isIn(['rice', 'milk'])('product', params)).resolves.toEqual(
      undefined
    );
  });

  it('rejects if not included', () => {
    const params = {
      product: 'banana',
    };

    expect.assertions(1);

    return expect(isIn(['rice', 'milk'])('product', params)).rejects.toEqual({
      expected: '"banana" in ["rice","milk"]',
      key: 'product',
      received: 'banana',
    });
  });
});
