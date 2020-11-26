
/**
 * reject all calls unless ms is reached and the serve last call
 */
function throttle(func, ms) {

    let isRunning = false
    return function() {
        let context = this
        let args = arguments

        if(!isRunning) {
            isRunning = true
            setTimeout(() => {
               isRunning = false
            }, ms)
            func.apply(context, args)
        }
    }
}

/**
 * Implement throttle such as
 * 1. First call is executed immdeitely
 * 2. If n calls are made between "ms" duration, nth call is executed after "ms" ends
 */

function throttle_v2(func, ms){
    let firstCalledOn
    let timerId
    return function() {
        let context = this
        let args = arguments
        // first call
        if(!firstCalledOn) {
            firstCalledOn = Date.now()
            setTimeout(() => firstCalledOn=undefined, ms)
            func.apply(context, args)
        } else {
            // if call in made unless a new call is allowd.. lets' schedule it after "ms" milliseconds from first call
            // Note we also need to cancel n-th call if nth call is made
            let timeToExecute = firstCalledOn + ms - Date.now()
            if(timerId) clearTimeout(timerId)
            timerId = setTimeout(() => func.apply(context, args), timeToExecute)

        }

    }
}


function printTime(timerId) {
    console.log(`Time bt timer ${timerId} is ${new Date()}`)
}

let throttledTimer = throttle_v2(printTime, 5000)

console.log(`Called at ${new Date()}.... `, throttledTimer(1))
setTimeout(() => {
    console.log(`Called at ${new Date()}.... `, throttledTimer(2))
     setTimeout(() => {
        console.log(`Called at ${new Date()}.... `, throttledTimer(3))
     }, 1000)
}, 1000)
