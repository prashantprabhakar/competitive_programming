

function cacheDecorator(func) {
    let cache = new Map()
    return function(x) {
        if(cache.has(x)) return cache.get(x)
        else {
            let result = func.call(this, x)
            cache.set(x, result)
            return result
        }
    }
}

function multiVaribaleCacheDecorator(func) {
    let cache = new Map()
    return function() {
        let key = hash(arguments)
        if(cache.has(key)) return cache.get(key)
        else {
            console.log(...arguments)
            let result = func.apply(this, arguments)
            cache.set(key, result)
            return result;
        }
    }
}

function hash(args) {
    Array.from(args).join()
}


let worker = {
    someMethod() { return 1 },
    slow(x, y=1) { return x * y* this.someMethod() }
}

// Testing...
// console.log(worker.slow(2))
// worker.cachedSlow = cacheDecorator(worker.slow)
// console.log(worker.cachedSlow(2))

worker.multiSlow = multiVaribaleCacheDecorator(worker.slow)
console.log(worker.multiSlow(2,2))