// The result of debounce(f, ms) decorator is a wrapper that suspends calls to f 
// until there’s ms milliseconds of inactivity (no calls, “cooldown period”), then invokes f once with the latest arguments.


function debounce(func, delay) {
    let oldCallId
    return function() {
        if(oldCallId) clearTimeout(oldCallId)
        let context = this
        oldCallId = setTimeout(() => {
            return func.apply(context, arguments)
        }, delay)
    }
}

