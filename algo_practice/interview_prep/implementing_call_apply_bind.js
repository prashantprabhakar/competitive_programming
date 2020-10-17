
// Implementing call

Function.prototype.myCall1 = function(context) {
    // issues: if context has already a key with name 'fn'?
    // issue2: call with null fails

    // this here is the function on which call is used, context is object passed as param to "call"
    context.fn = this;
    const args = Array.from(arguments).slice(1)
    return context.fn(...args)
}

Function.prototype.myCall = function(_context) {
    let context = (_context && typeof _context === 'object') ? _context : {}
    let randomKey = `ysd$${Math.random()}`
    while(context.hasOwnProperty(randomKey)) {
        // generate new random key
        randomKey = randomKey+Math.random()
    }
    context[randomKey] = this;
    const args = Array.from(arguments).slice(1)
    let result =  context[randomKey](...args)
    delete context[randomKey]
    return result
}

// Implement apply

Function.prototype.myApply = function(_context, _args) {
    let context = (_context && typeof _context === 'object') ? _context : {}
    // @TDOD: Add validation that _args must be array
    let args = (_args && _args.length) ? _args : []
    let randomKey = `ysd$${Math.random()}`
    while(context.hasOwnProperty(randomKey)) {
        // generate new random key
        randomKey = randomKey+Math.random()
    }
    context[randomKey] = this;
    let result =  context[randomKey](...args)
    delete context[randomKey]
    return result
}

// Implement bind
// This returns a new fn with binded "context"
//Only different between call and bind is call invoke the function and returns the value but bind returns a new function with updated context.


Function.prototype.myBind = function(_context) {
    const args = Array.from(arguments).slice(1)
    const self = this
    return function() {
        return self.call(_context, ...args)
    }
}



// testing area

let testFn = function(a,b,c) {
    let sum = a+b+c
    console.log(`Sum of ${this.name} is ${sum}`)
}



testFn.call({name: 'normal call'}, 1,2,3)
testFn.myCall1({name: 'my call 1'}, 1,2,3)
testFn.myCall({name: 'myCall'}, 1,2,3)
testFn.myApply({name: 'myApply'}, [1,2,3])
testFn.bind({name: 'normal bind'})(1,2,3)
testFn.myBind({name: 'normal bind'})(1,2,3)
