/**
 * The `flat()` method creates a new array
 * with all sub-array elements concatenated into it
 * recursively up to the specified depth.
 */

Array.prototype.flatten = function (d) {
  let newArray = [];
  let depth = d ?? 1;

  for (let index = 0; index < this.length; index++) {
    const element = this[index];

    // if element does not exist continue to next iteration
    if (this.indexOf(element) === -1) {
      continue;
    }

    if (Array.isArray(element) && depth > 0) {
      newArray = newArray.concat(element.flatten(depth - 1));
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};

const inputArray = [1, [3, [4]]];
// const inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];
const deeplyNestedArray = [
  [1],
  [
    [1, 4, [5, 3]],
    [1, 2, 3, [3, 4, [2, [22, [3, 4, 5, 6, 5, [2]]]]], 4],
  ],
];

const flat = inputArray.flatten();
const deepFlat = deeplyNestedArray.flatten(Infinity);

console.log(flat);
// output => [1, 3, [4]];

console.log(deepFlat);
// output => [1, 1, 4, 5, 3, 1, 2, 3, 3, 4, 2, 22, 3, 4, 5, 6, 5, 2, 4];
