const greaterThan = require('../../../src/validators/greater-than');

describe('greater than', () => {
  it('resolves if greater', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(greaterThan(9)('amount', params)).resolves.toEqual(undefined);
  });

  it('rejects if equal', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(greaterThan(10)('amount', params)).rejects.toEqual({
      expected: 'Must be > 10',
      key: 'amount',
      received: 10,
    });
  });

  it('rejects if lesser', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(greaterThan(12)('amount', params)).rejects.toEqual({
      expected: 'Must be > 12',
      key: 'amount',
      received: 10,
    });
  });
});
