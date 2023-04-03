const { stringLength } = require('../task1.js');

describe('Unit Tests for `stringLength()`', () => {
  test('expected length as number only', () => {
    expect(typeof (stringLength('str'))).toBe('number');
  });

  test('expected length of `str` to be 3', () => {
    expect(stringLength('str')).toBe(3);
  });

  test('expected length of `M` to be 1', () => {
    expect(stringLength('M')).toBe(1);
  });

  test('expected length of `Mahabub07` to be 9', () => {
    expect(stringLength('Mahabub07')).toBe(9);
  });

  test('expected error:false at length lower than 1', () => {
    expect(stringLength('')).toBe(false);
  });

  test('expected error:false at length bigger than 10', () => {
    expect(stringLength('Mahabubx007')).toBe(false);
  });
});
