// for a class implementation check the promise-class.js
// this is only individual functions using the standard Promises

Promise.myAllSettled = function (promises) {
  const mappedPromises = promises.map(promise => {
    return Promise.resolve(promise)
      .then(value => ({ status: "fulfilled", value }))
      .catch(reason => ({ status: "rejected", reason }));
  });
  return Promise.all(mappedPromises);
};

Promise.myAll = function (promises) {
  const values = [];
  let fulfilledPromises = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          values[index] = value;
          fulfilledPromises++;
          if (fulfilledPromises === promises.length) {
            resolve(values);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};
