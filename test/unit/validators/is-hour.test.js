const isHour = require('../../../src/validators/is-hour');

describe('is hour', () => {
  it('resolves if hour', () => {
    const params = {
      hour: 9,
    };

    expect.assertions(1);

    return expect(isHour('hour', params)).resolves.toEqual(undefined);
  });

  it('rejects if not hour', () => {
    const params = {
      hour: 'nine',
    };

    expect.assertions(1);

    return expect(isHour('hour', params)).rejects.toEqual({
      expected: 'to be a valid hour',
      key: 'hour',
      received: 'nine',
    });
  });
});
