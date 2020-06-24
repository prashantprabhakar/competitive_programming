// 1, 11, 21, 1211, 111221, 312211, 13112221 (one 3, one 1, two 2, two 1)

function look_and_say_iteration(n) {
    if(n==1) return 1
    let prevNo = 1
    for(let i=1; i<n; i++) {
        prevNo = findNext(prevNo)
    }
    return prevNo
}

function findNext(num) {
    num = num.toString()

    if(num.length == 1) {
        return `1${num}`
    }

    let nextNum = ''
    let count = 1
    for(let i=1; i<num.length; i++) {
        if(num[i] === num[i-1]) count++
        else {
            nextNum += `${count}${num[i-1]}`
            count=1
        }
        // handle last char
        if(i== num.length-1) {
            nextNum += `${count}${num[i]}`
        }
    }
    return nextNum

}

console.log(look_and_say_iteration(7))
