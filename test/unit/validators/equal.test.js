const equal = require('../../../src/validators/equal');

describe('equal', () => {
  it('resolves if equal', () => {
    const params = {
      hi: 'there',
    };

    expect.assertions(1);

    return expect(equal('there')('hi', params)).resolves.toEqual(undefined);
  });

  it('resolves if not equal', () => {
    const params = {
      hi: {
        hello: 'there',
      },
    };

    expect.assertions(1);

    return expect(equal('hello')('hi', params)).rejects.toEqual({
      expected: 'Must be === hello',
      key: 'hi',
      received: { hello: 'there' },
    });
  });
});
