/**
 * The `forEach()` method is available an all array and
 * it invokes a callback function once for each elements of an array
 * and returns undefined
 */

/**
 * It takes the following PARAMS
 * - callback function
 * - thisArg => Value to use as this when executing callbackFn.
 */

Array.prototype.myForEach = function (callback, thisArg) {
  /**
   * The range of elements processed by `forEach()`
   * is set before the first invocation of callbackFn
   *
   * This is done because we might mutate the orinal array
   * from the callback function which might lead to an infinite loop
   * for example inserting a new element on every iteration
   *
   * */

  const range = this.length;

  // run the loop
  for (let index = 0; index < range; index++) {
    const element = this[index];
    /**
     * check if item exist
     * callback function is not invoked if item is
     * uinitialized or deleted
     */
    if (this.indexOf(element) > -1) {
      callback.call(thisArg, element, index, this);
    }
  }
};

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const upperCaseList = [];

words.myForEach((word, index, array) => {
  array.push("new");
  upperCaseList.push(word.toUpperCase());
});

// console.log(upperCaseList);

[undefined, null, false, NaN].forEach(e => {
  // console.log(e);
});
