const stringLength = require('./stringLength');

describe('Tests', () => {

test('string length should be 5', () => {
  let str = 'learn';
  expect(stringLength(str)).toBe(5);
});

});

