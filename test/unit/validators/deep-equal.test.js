const deepEqual = require('../../../src/validators/deep-equal');

describe('deep equal', () => {
  it('resolves if deep equal', () => {
    const params = {
      hi: {
        hello: 'there',
      },
    };

    expect.assertions(1);

    return expect(
      deepEqual({
        hello: 'there',
      })('hi', params)
    ).resolves.toEqual(undefined);
  });

  it('resolves if not deep equal', () => {
    const params = {
      hi: {
        hello: 'there1',
      },
    };

    expect.assertions(1);

    return expect(
      deepEqual({
        hello: 'there',
      })('hi', params)
    ).rejects.toEqual({
      expected: 'Must be === {"hello":"there"}',
      key: 'hi',
      received: { hello: 'there1' },
    });
  });
});
