function spy(func) {
    function wrapper(...args) {
        // using ...args instead of arguments to store "real" array in wrapper.calls
        wrapper.call.psuh(args)
        return func.apply(this, args)
    }
    wrapper.calls = []
    return wrapper;
}