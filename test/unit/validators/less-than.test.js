const lessThan = require('../../../src/validators/less-than');

describe('less than', () => {
  it('resolves if less', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(lessThan(11)('amount', params)).resolves.toEqual(undefined);
  });

  it('rejects if equal', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(lessThan(10)('amount', params)).rejects.toEqual({
      expected: 'Must be < 10',
      key: 'amount',
      received: 10,
    });
  });

  it('rejects if greater', () => {
    const params = {
      amount: 10,
    };

    expect.assertions(1);

    return expect(lessThan(9)('amount', params)).rejects.toEqual({
      expected: 'Must be < 9',
      key: 'amount',
      received: 10,
    });
  });
});
