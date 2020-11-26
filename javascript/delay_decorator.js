// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

function delay_decorator(func, delay) {
    return function() {
        let context = this
        setTimeout(() => {
            func.apply(context, arguments)
        }, delay)
    }
}

function f(x) { console.log(x)}

delay1000 = delay_decorator(f, 1000)
delay2000 = delay_decorator(f, 2000)

delay1000(1000)
delay2000(2000)