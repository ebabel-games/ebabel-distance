'use strict';

/**
 * `distance`
 * Calculate the distance in 3D space from point "i" x, y, and z coordinates to point "j" x, y, and z coordinates.
 * @param {array} i - Array start position in 3D space e.g. [-10, 5.1, 3]
 * @param {array} j - Array end position in 3D space e.g. [0, 15.1, -7]
 * @returns {number} Distance between i and j.
 */
const distance = (i, j) => {  
  if (!i && !j) throw new Error('Invalid input - need two sets coordinates.');
  if (!j) throw new Error('Invalid input - only one set of coordinates.');
  if (i.length !== 3) throw new Error('Input coordinates i should be an array of 3 numbers.');
  if (j.length !== 3) throw new Error('Input coordinates j should be an array of 3 numbers.');
  if (isNaN(i[0]) || isNaN(i[1]) || isNaN(i[2]) ) throw new Error('Invalid input i: should be numeric coordinates.');
  if (isNaN(j[0]) || isNaN(j[1]) || isNaN(j[2]) ) throw new Error('Invalid input j: should be numeric coordinates.');

  return Math.sqrt(
    Math.pow((j[0] - i[0]), 2)
    + Math.pow((j[1] - i[1]), 2)
    + Math.pow((j[2] - i[2]), 2));
}

module.exports = distance;
