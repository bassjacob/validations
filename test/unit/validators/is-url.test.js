const isUrl = require('../../../src/validators/is-url');

describe('is url', () => {
  it('resolves if url', () => {
    const params = {
      activationLink: 'http://activation.link.com?user_id=1234',
    };

    expect.assertions(1);

    return expect(isUrl('activationLink', params)).resolves.toEqual(undefined);
  });

  it('rejects if not url', () => {
    const params = {
      activationLink: 123,
    };

    expect.assertions(1);

    return expect(isUrl('activationLink', params)).rejects.toEqual({
      expected: 'to be url',
      key: 'activationLink',
      received: 'not url',
    });
  });
});
