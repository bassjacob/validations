const greaterThanOrEqual = require('../../../src/validators/greater-than-or-equal');

describe('equal', () => {
  it('resolves if greater', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(greaterThanOrEqual(9)('amount', params)).resolves.toEqual(
      undefined
    );
  });

  it('resolves if equal', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(greaterThanOrEqual(10)('amount', params)).resolves.toEqual(
      undefined
    );
  });

  it('rejects if lesser', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(greaterThanOrEqual(12)('amount', params)).rejects.toEqual({
      expected: 'Must be >= 12',
      key: 'amount',
      received: 10,
    });
  });
});
