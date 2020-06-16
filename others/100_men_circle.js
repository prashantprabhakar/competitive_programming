

let killed = 0

function swardKill(arr, start=0) {
    // base condition: when arr.length-1 person is killed
    if(killed == arr.length-1) return start+1// since array index starts at 0

    let nextPersonKilled = getNextIndex(arr, start+1)
    arr[nextPersonKilled] = 0
    start = getNextIndex(arr, nextPersonKilled +1)
    killed++
    return swardKill(arr, start)

}

// returns next index in circular array
// ignore zero indicies as they represent dead people
function getNextIndex(arr, i) {
    if(i== arr.length) i=0
    while(arr[i] == 0) {
        i++
        if(i== arr.length) i=0
    }
    return i

}

function driver() {
    let arr = [];
    for(let i=1; i<=10; i++) {
        arr.push(i)
    }
    let res = swardKill(arr, 0)
    console.log(res)
}

driver()
