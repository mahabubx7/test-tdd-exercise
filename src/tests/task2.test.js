const { reverseString } = require('../task2.js');

describe('Unit Tests for `reverseString()`', () => {
  test('expected return only string', () => {
    expect(typeof (reverseString('str'))).toBe('string');
  });

  test('expected `` reversed as ``', () => {
    expect(reverseString('')).toBe('');
  });

  test('expected `str` reversed as `rts`', () => {
    expect(reverseString('str')).toBe('rts');
  });

  test('expected `microverse` reversed as `esrevorcim`', () => {
    expect(reverseString('microverse')).toBe('esrevorcim');
  });
});
