// this is overall implementation of Promise class
// for individual functions check func-implementation.js
class MyPromise {
  constructor(executor) {
    this.pending = true;
    this.rejected = false;
    this.resolved = false;
    this.value = null;
    this.handlers = [];
    this.catches = [];

    const resolve = value => {
      if (!this.pending) return;
      this.resolved = true;
      this.pending = false;

      this.value = value;

      if (this.handlers.length) {
        this.handlers.reduce((prevValue, handler) => {
          return handler(prevValue);
        }, this.value);
      }
    };

    const reject = value => {
      if (!this.pending) return;
      this.pending = false;
      this.rejected = true;
      this.value = value;

      if (this.catches.length) {
        this.catches.reduce((prevValue, catchFunc) => {
          return catchFunc(prevValue);
        }, this.value);
      }
    };

    executor(resolve, reject);
  }

  then(callback) {
    if (this.pending) {
      this.handlers.push(callback);
    }
    if (this.resolved) {
      // console.log("callback called  ");
      this.value = callback(this.value);
    }

    return this;
  }

  catch(callback) {
    if (this.pending) {
      this.catches.push(callback);
    }
    if (this.rejected) {
      callback(this.value);
    }
    return this;
  }

  finally(callback) {
    if (this.pending) {
      // if pending, then we push the callback to both catches and handlers
      // finally need to run regardless of the state.
      // runs after all handlers(thens) or catches.
      this.handlers.push(callback);
      this.catches.push(callback);
    } else {
      callback(this.value);
    }
  }

  static resolve(value) {
    return new MyPromise(resolve => resolve(value));
  }
  static reject(value) {
    return new MyPromise((_resolve, reject) => reject(value));
  }

  static all(promises) {
    // FIXME: handle non-promises
    const values = [];
    let promisesFulfilled = 0;
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise.then(value => {
          values[index] = value;
          promisesFulfilled++;
          if (promisesFulfilled === promises.length) {
            resolve(values);
          }
        });
        promise.catch(error => {
          reject(error);
        });
      });
    });
  }
}

export default MyPromise;
