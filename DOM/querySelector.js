/**
 * The Document method querySelector() returns the first Element within the document
 * that matches the specified selector, or group of selectors.
 * If no matches are found, null is returned.
 *
 */

/**
 * PARAMS
 * selector - this string must be a valid CSS selector string;
 * if it isn't, a SyntaxError exception is thrown.
 *
 */

Document.prototype.myQuerySelector = function (selector) {
  let element = null;

  // find the element based on the selector
  function traverse(node) {
    if (node == null) {
      return;
    }

    // check if current node matches the selector
    if (node.matches(selector)) {
      element = node;
      return;
    }

    for (const children of node.children) {
      // if an element already matched the selector
      // break the loop
      if (element) {
        break;
      }
      traverse(children);
    }
  }
  traverse(document.documentElement);

  return element;
};

// const ele = document.myQuerySelector("input[type='button']:disabled");
// console.log(ele);
