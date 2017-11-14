const isArray = require('../../../src/validators/is-array');

describe('is array', () => {
  it('resolves if an array', () => {
    const params = {
      agents: ['smith'],
    };

    expect.assertions(1);

    return expect(isArray('agents', params)).resolves.toEqual(undefined);
  });

  it('rejects if not an array', () => {
    const params = {
      agents: 'smith',
    };

    expect.assertions(1);

    return expect(isArray('agents', params)).rejects.toEqual({
      expected: 'to be an array',
      key: 'agents',
      received: 'string',
    });
  });
});
