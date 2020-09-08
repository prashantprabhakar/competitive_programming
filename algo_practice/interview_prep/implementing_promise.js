/**
 * Implement your own promise
 */

/**
 * Pointers
 * States can be Pending, Rejected, Fullfilled
 * States can transaction from Pending to Rejected or Pending to Fullfilled
 * Promises can be chained
 * Nested promised may misbehave
 * Promises need to have fns by which they can be resolved
 */

/**
 * Code taken from: https://levelup.gitconnected.com/learn-javascript-promises-by-building-a-fully-working-promise-from-scratch-c9eabe73fa3
 */
class PromiseSimple {
    constructor(executionFunction) {
      this.promiseChain = [];
      this.handleError = () => {};
  
      this.onResolve = this.onResolve.bind(this);
      this.onReject = this.onReject.bind(this);
  
      executionFunction(this.onResolve, this.onReject);
    }
  
    then(handleSuccess) {
      this.promiseChain.push(handleSuccess);
  
      return this;
    }
  
    catch(handleError) {
      this.handleError = handleError;
  
      return this;
    }
  
    onResolve(value) {
      let storedValue = value;
  
      try {
        this.promiseChain.forEach((nextFunction) => {
           storedValue = nextFunction(storedValue);
        });
      } catch (error) {
        this.promiseChain = [];
  
        this.onReject(error);
      }
    }
  
    onReject(error) {
      this.handleError(error);
    }
}

function test() {
    return new PromiseSimple((resolve, reject) => {
        setTimeout(() => resolve(42), 3000)
    })
}

test().then(console.log)

async function testAsync() {
    console.log(await test())
}

testAsync()
