/**
 * Filter function is attached to the array prototype
 * It takes in 2 parameters, callback and a context (this)
 * argument for the callback function,
 * the callback is invoked with the current item
 */

/**
 * the callback function can take 3 arguments
 * (1) element,
 * (2) index of the element
 * (3) the array itself / the execution context
 */

Array.prototype.myFilter = function (callback, thisArg) {
  const newArray = [];
  const range = this.length;

  for (let index = 0; index < range; index++) {
    const element = this[index];

    if (this.indexOf(element) !== -1) {
      if (callback.call(thisArg, element, index, this)) {
        newArray.push(element);
      }
    }
  }

  return newArray;
};

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.myFilter(item => item.length > 6);
console.log(result); // expected output: Array ["exuberant", "destruction", "present"]
