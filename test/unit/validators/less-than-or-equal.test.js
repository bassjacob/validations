const lessThanOrEqual = require('../../../src/validators/less-than-or-equal');

describe('less than or equal', () => {
  it('resolves if less', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(lessThanOrEqual(11)('amount', params)).resolves.toEqual(
      undefined
    );
  });

  it('resolves if equal', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(lessThanOrEqual(10)('amount', params)).resolves.toEqual(
      undefined
    );
  });

  it('rejects if greater', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(lessThanOrEqual(9)('amount', params)).rejects.toEqual({
      expected: 'Must be <= 9',
      key: 'amount',
      received: 10,
    });
  });
});
