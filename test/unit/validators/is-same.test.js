const isSame = require('../../../src/validators/is-same');

describe('is same', () => {
  it('resolves if same', () => {
    const params = {
      name: 'jacob',
      updatedBy: 'jacob',
    };

    expect.assertions(1);

    return expect(isSame('name')('updatedBy', params)).resolves.toEqual(
      undefined
    );
  });

  it('rejects if not same', () => {
    const params = {
      name: 'jacob',
      updatedBy: 'anoop',
    };

    expect.assertions(1);

    return expect(isSame('name')('updatedBy', params)).rejects.toEqual({
      expected: 'to be the same as jacob',
      key: 'updatedBy',
      received: 'anoop',
    });
  });
});
