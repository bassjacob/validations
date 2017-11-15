const each = require('../../../src/validators/each');

describe('each', () => {
  it('resolves each resolves', () => {
    const params = {
      agents: ['smith'],
    };

    const mock = () => Promise.resolve();
    expect.assertions(1);

    return expect(each(mock)('agents', params)).resolves.toEqual(undefined);
  });

  it('rejects one rejects', () => {
    const params = {
      agents: 'smith',
    };
    const mock = () => Promise.reject();
    expect.assertions(1);

    return expect(each(mock)('agents', params)).rejects.toEqual({
      expected: 'for each element to satisfy the function',
      key: 'agents',
      received: 'some did not',
    });
  });
});
