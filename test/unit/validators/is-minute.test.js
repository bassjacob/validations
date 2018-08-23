const isHour = require('../../../src/validators/is-minute');

describe('is minute', () => {
  it('resolves if minute', () => {
    const params = {
      minute: 10,
    };

    expect.assertions(1);

    return expect(isHour('minute', params)).resolves.toEqual(undefined);
  });

  it('rejects if not minute', () => {
    const params = {
      minute: 'magic',
    };

    expect.assertions(1);

    return expect(isHour('minute', params)).rejects.toEqual({
      expected: 'to be a valid minute',
      key: 'minute',
      received: 'magic',
    });
  });
});
