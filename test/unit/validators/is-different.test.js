const isDifferent = require('../../../src/validators/is-different');

describe('is different', () => {
  it('resolves if different', () => {
    const params = {
      createdBy: 'jacob',
      updatedBy: 'anoop',
    };

    expect.assertions(1);

    return expect(
      isDifferent('createdBy')('updatedBy', params)
    ).resolves.toEqual(undefined);
  });

  it('rejects if not different', () => {
    const params = {
      createdBy: 'jacob',
      updatedBy: 'jacob',
    };

    expect.assertions(1);

    return expect(
      isDifferent('createdBy')('updatedBy', params)
    ).rejects.toEqual({
      expected: 'to be different to jacob',
      key: 'updatedBy',
      received: 'jacob',
    });
  });
});
