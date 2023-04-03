const { Calculator } = require('../task3.js');

describe('Unit Tests for the class `Calculator`', () => {
  test('expected calculator is an Object', () => {
    const calculator = new Calculator();
    expect(typeof (calculator)).toBe('object');
  });

  test('expected calculator instance of Calculator class', () => {
    const calculator = new Calculator();
    expect(calculator).toBeInstanceOf(Calculator);
  });

  test('expected add(2, 5) to return 7.', () => {
    expect(Calculator.add(2, 5)).toBe(7);
  });

  test('expected subtract(7, 5) to return 2.', () => {
    expect(Calculator.subtract(7, 5)).toBe(2);
  });

  test('expected divide(10, 5) to return 2.', () => {
    expect(Calculator.divide(10, 5)).toBe(2);
  });

  test('expected multiply(7, 5) to return 35.', () => {
    expect(Calculator.multiply(7, 5)).toBe(35);
  });
});
