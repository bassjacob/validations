const nullable = require('../../../src/validators/nullable');

describe('nullable', () => {
  it('resolves if null', () => {
    const params = {
      orders: null,
    };

    const mock = jest.fn();
    expect.assertions(1);

    return expect(nullable(mock)('orders', params)).resolves.toEqual(undefined);
  });

  it('rejects if not null', () => {
    const params = {
      orders: 'ORD1',
    };

    const mock = () => Promise.resolve('success');
    expect.assertions(1);
    return expect(nullable(mock)('orders', params)).resolves.toEqual('success');
  });
});
