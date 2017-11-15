const { UUID4 } = require('../../../src/matchers');
const matches = require('../../../src/validators/matches');

describe('matches', () => {
  it('resolves if string', () => {
    const params = {
      id: '2e853146-e6ef-4859-8f22-38231b8082ad',
    };

    expect.assertions(1);

    return expect(matches(UUID4)('id', params)).resolves.toEqual(undefined);
  });

  it('rejects if not matches', () => {
    const params = {
      id: 123,
    };

    expect.assertions(1);

    return expect(matches(UUID4)('id', params)).rejects.toEqual({
      expected: 'matching regex',
      key: 'id',
      received: 'did not match regex',
    });
  });
});
