const { range } = require('../../src/helpers');

describe('helpers', () => {
  describe('range', () => {
    it('creates a range', () => {
      expect(range(5, 10)).toEqual([5, 6, 7, 8, 9]);
    });
  });
});
