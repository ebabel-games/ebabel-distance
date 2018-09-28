const distance = require('../index');

test('distance measures accurately how far from a to b', () => {
  const a = [0, 0, 0];
  const b = [10, 0, 0];

  const result = distance(a, b);

  expect(result).toBe(10);
});
