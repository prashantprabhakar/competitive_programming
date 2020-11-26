/**
 * source: https://javascript.info/call-apply-decorators#throttle-decorator
 * throttle runs it not more often than given ms time. Good for regular updates that shouldn’t be very often.
 */

/**
 * 1.  For the first mouse movement the decorated variant immediately passes the call to update. That’s important, the user sees our reaction to their move immediately.
   2. Then as the mouse moves on, until 100ms nothing happens. The decorated variant ignores calls.
   3. At the end of 100ms – one more update happens with the last coordinates.
   4. then, finally, the mouse stops somewhere. The decorated variant waits until 100ms expire and then runs update with last coordinates. 
     So, quite important, the final mouse coordinates are processed.
 */

function throttle_decorator(func, delay) {
    let isThrottled = false // see if the call is to be throttles
    let savedArgs, savedContext // save arg and context to execute after "delay" ms

    function wrapper() {
        if(isThrottled) {
            savedArgs = arguments
            savedContext = this
            return
        }

        // if not throttles, execute
        func.apply(this, arguments)
        isThrottled = true

        setTimeout(() => {
            isThrottled = false // reset throttle ater time has expired
            // if last call needs to be executed....
            if(savedArgs) {
                wrapper.apply(savedContext, savedArgs)
                savedArgs = savedContext = null
            }
        }, delay)

    }

    return wrapper
}