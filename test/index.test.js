const distance = require('../index');

test('distance measures accurately how far from i to j', () => {
  const i = [0, 0, 0];
  const j = [10, 0, 0];

  const result = distance(i, j);
  expect(result).toBe(10);
});

test('handle a mixture of 2D and 3D inputs', () => {
  const i = [0, 0];
  const j = [10, 0, 0];

  expect(() => distance(i, j)).toThrowError('Input coordinates i should be an array of 3 numbers.');
});

test('handle a mixture of 3D and 2D inputs', () => {
  const i = [0, 0, 0];
  const j = [0, 0];

  expect(() => distance(i, j)).toThrowError('Input coordinates j should be an array of 3 numbers.');
});

test('handle 3D inputs but with non-numeric corruption in i', () => {
  const i = [0, 0, 'f'];
  const j = [10, 0, 0];

  expect(() => distance(i, j)).toThrowError('Invalid input i: should be numeric coordinates.');
});

test('handle 3D inputs but with non-numeric corruption in j', () => {
  const i = [0, 0, 12];
  const j = [10, '7i', 0];

  expect(() => distance(i, j)).toThrowError('Invalid input j: should be numeric coordinates.');
});

test('handle 3D inputs with implicit converstion', () => {
  const i = [0, 0, 0];
  const j = [0, '42', 0];

  const answer = distance(i, j);
  expect(answer).toBe(42);
});


test('handle input missing entirely', () => {
  expect(() => distance()).toThrowError('Invalid input - need two sets coordinates.');
});

test('handle single missing input', () => {
  const i = [0, 0, 0];
  
  expect(() => distance(i)).toThrowError('Invalid input - only one set of coordinates.');
});

// note this test is equivalent to the previous one i.e. here i and j represent the first and only set of coordinates
test('handle single missing input - duplicate test i vs j', () => {
  const j = [0, 0, 0];

  expect(() => distance(j)).toThrowError('Invalid input - only one set of coordinates.');
});
