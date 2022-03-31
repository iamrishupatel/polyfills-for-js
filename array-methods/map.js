/**
 * - map is a method available on all arrays
 * - it returns a new array
 * - it takes a callback function and runs it on every element in the array
 *    an whatever is returned from the function is stored in place of that element in the new array
 *
 */

/**
 * the callback function can take 3 arguments
 * (1) element,
 * (2) index of the element
 * (3) the array itself
 */

Array.prototype.myMap = function (callback) {
  // create an empty array with same length as the input array
  const newArray = new Array(this.length);

  for (let index = 0; index < this.length; index++) {
    const element = this[index];

    // check if item exist
    if (this.indexOf(element) !== -1) {
      newArray[index] = callback(element, index, this);
    }
  }

  return newArray;
};



/* ===== Usage ===== */

const numbers = [0, 1, 2, 3, 5, 6, 7];
numbers[10] = 10;

const squares = numbers.myMap(item => item * item);

console.log(squares);

console.log(["1.1", "2.2e2", "3e300"].myMap(str => +str));
