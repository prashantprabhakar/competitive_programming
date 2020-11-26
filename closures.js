const counter = function() {
    let privateCounter = 0

    return {
        // closure
        increment: function() {
            privateCounter++
        },

        // closure
        decrement: function() {
            privateCounter--
        },

        // closure
        value: function() {
            return privateCounter
        }
    }
}


let myCounter1 = counter()
let myCounter2 = counter()
myCounter1.increment()
console.log(myCounter1.value())
console.log(myCounter2.value())