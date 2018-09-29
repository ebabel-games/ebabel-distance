/**
 * `distance`
 * Calculate the distance in 3D space from point "a" x, y, and z coordinates to point "b" x, y, and z coordinates.
 * @param {array} a - Array start position in 3D space e.g. [-10, 5.1, 3]
 * @param {array} b - Array end position in 3D space e.g. [0, 15.1, -7]
 * @returns {number} Distance between a and b.
 */
const distance = (a, b) => Math.sqrt(
  Math.pow((b[0] - a[0]), 2)
  + Math.pow((b[1] - a[1]), 2)
  + Math.pow((b[2] - a[2]), 2)
);

module.exports = distance;
