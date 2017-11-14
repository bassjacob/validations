const isDate = require('../../../src/validators/is-date');

describe('is date', () => {
  it('resolves if date', () => {
    const params = {
      createdAt: new Date(),
    };

    expect.assertions(1);

    return expect(isDate('createdAt', params)).resolves.toEqual(undefined);
  });

  it('rejects if not date', () => {
    const params = {
      createdAt: 'Thursday',
    };

    expect.assertions(1);

    return expect(isDate('createdAt', params)).rejects.toEqual({
      expected: 'too be a date',
      key: 'createdAt',
      received: 'Thursday',
    });
  });
});
