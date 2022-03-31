/**
 * The find() method returns the first element in the provided array
 * that satisfies the provided testing function.
 * If no values satisfy the testing function, undefined is returned.
 */

/**
 * the callback function can take 3 arguments
 * (1) element,
 * (2) index of the element
 * (3) the array itself
 */

// The callback must return a truthy value to indicate a matching element has been found.

Array.prototype.myFind = function (callback) {
  let result;

  for (let index = 0; index < this.length; index++) {
    const element = this[index];

    if (callback(element, index, this)) {
      result = element;
      break;
    }
  }

  return result;
};

/* ===== Usage ===== */

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "cherries", quantity: 5 },
  { name: "bananas", quantity: 0 },
];

const result = inventory.myFind(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
