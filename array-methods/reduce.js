/**
 * The reduce() method executes a user-supplied
 * "reducer" callback function on each element of the array
 *
 * PARAMS
 * 1. callback function
 * 2. initial value
 *  If initialValue is not specified, previousValue is initialized to the first value
 *  in the array, and currentValue is initialized to the second value in the array.
 */

/**
 * PARAMS for callback function
 * 1. previousValue: the value resulting from the previous call to callbackFn
 * 2. currentValue: the value of the current element.
 * 3. currentIndex: the index position of currentValue in the array
 * 4. array: the array itself.
 */

Array.prototype.myReduce = function (callback, initialValue) {
  let previousValue = initialValue ?? null;

  for (let index = 0; index < this.length; index++) {
    /**
     * check if previousValue or accumulator exist
     * if not set the prevValue to current Element i.e the first element
     * and move to next iteration without calling the callback function
     */
    if (previousValue !== null) {
      previousValue = callback(previousValue, this[index], index, this);
    } else {
      previousValue = this[index];
    }
  }

  return previousValue;
};

const array1 = [1, 2, 3, 4];

const sum = array1.myReduce(
  (previousValue, currentValue) => previousValue + currentValue
);

console.log(sum);
// expected output: 10
