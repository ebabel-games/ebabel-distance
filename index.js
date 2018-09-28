// Return the distance in 3D space from point "a" x, y, and z coordinates to point "b" x, y, and z coordinates.
const distance = (a, b) => Math.sqrt(
  Math.pow((b[0] - a[0]), 2)
  + Math.pow((b[1] - a[1]), 2)
  + Math.pow((b[2] - a[2]), 2)
);

module.exports = distance;
