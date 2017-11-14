const length = require('../../../src/validators/length');

describe('length', () => {
  it('resolves if equal', () => {
    const params = {
      orders: ['OR1', 'OR2'],
    };

    expect.assertions(1);

    return expect(length(2)('orders', params)).resolves.toEqual(undefined);
  });

  it('rejects if not equal', () => {
    const params = {
      orders: ['OR1', 'OR2'],
    };

    expect.assertions(1);

    return expect(length(3)('orders', params)).rejects.toEqual({
      expected: 'length of 3',
      key: 'orders',
      received: 'length of 2',
    });
  });
});
