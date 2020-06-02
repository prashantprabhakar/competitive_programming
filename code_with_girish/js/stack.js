

let stack = function() {

    let arr= []

    this.push = (n) => {
        arr.push(n)
    }

    this.pop  = () => {
        if(this.IsEmpty()) throw new Error('Stack is empty')
        let lastElem = arr[arr.length-1]
        arr.length = arr.length-1
        return lastElem
    }

    this.IsEmpty = () => {
        return arr.length == 0 ? true : false
    }

    this.length =() => arr.length

    return this
}


module.exports = new stack()