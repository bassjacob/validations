const immutable = require('../../../src/validators/immutable');

describe('immutable', () => {
  it('resolves if immutable', () => {
    const params = {
      id: '2e853146-e6ef-4859-8f22-38231b8082ad',
    };

    const instance = {
      id: '2e853146-e6ef-4859-8f22-38231b8082ad',
    };

    expect.assertions(1);

    return expect(immutable()('id', params, instance)).resolves.toEqual(
      undefined
    );
  });

  it('rejects if not immutable', () => {
    const params = {
      id: 123,
    };

    const instance = {
      id: '2e853146-e6ef-4859-8f22-38231b8082ad',
    };

    expect.assertions(1);

    return expect(immutable()('id', params, instance)).rejects.toEqual(
      'Can not change'
    );
  });
});
