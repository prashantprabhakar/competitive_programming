const PromiseState = {
  "PENDING": "PENDING",
  "RESOLVED": "RESOLVED",
  "REJECTED": "REJECTED"
}

class CustomPromise {
  constructor(fn) {
    this.resolver = this.resolver.bind(this) // why do this??
    // this.rejector = this.rejector.bind(this)
    this.state = PromiseState.PENDING;
    this.thenFn = null;
    this.catchFn = null;
    fn(this.resolver, this.rejector);
  }

  resolver(resolvedData) {
    if(this.state === PromiseState.PENDING) {
      this.thenFn && this.thenFn(resolvedData);
    }
    this.state = PromiseState.RESOLVED;
  }

  rejector(rejectedData) {
    if(this.state === PromiseState.PENDING){
      this.catchFn && this.catchFn(resolvedData);
    }
    this.state = PromiseState.REJECTED;
  }

  then(thenFn) {
    this.thenFn = thenFn;
    return this;
  }

  catch(catchFn) {
    this.catchFn = catchFn;
    return this;
  }

}


let delayed = function() {
  return new CustomPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("apple");
    }, 1000)
  })
}

delayed().then(console.log)