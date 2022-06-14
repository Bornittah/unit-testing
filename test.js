const stringLength = require('./stringLength');
const reverseString = require('./reverseString');

describe('Tests', () => {
test('string length should be 5', () => {
  let str = 'learnooooooooooooo';
  expect(stringLength(str)).toBe(5);
});
test('string should be at least 1 character long ', () => {
  let str = 'learnooooooooooooo';
  expect(stringLength(str)).toBeGreaterThanOrEqual(1);
});
test('string should not be longer than 10 characters', () => {
  let str = 'learnooooooooooooo';
  expect(stringLength(str)).toBeLessThanOrEqual(10);
});
test('Reverse the string', () => {
  let str = 'learn';
  expect(reverseString(str)).toBe('nrael');
});

});

