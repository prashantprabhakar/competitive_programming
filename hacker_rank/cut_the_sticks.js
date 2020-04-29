/**
 * Cut the sticks
 * https://www.hackerrank.com/challenges/cut-the-sticks/problem
 */

function cutTheSticks(arr, res=[], min = -1) {
    if(min == -1) min = findSortest(arr)
    let cuts = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] == undefined)  continue
        cuts++
        if(arr[i] > min) arr[i] = arr[i]-min
        else arr[i] = undefined
    }
    if(cuts == 0) return res
    //console.log(cuts)
    res.push(cuts)
    return cutTheSticks(arr, res, min)


}

function findSortest(arr){
    let min = Math.min() // infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i] == undefined)  continue
        if(arr[i] < min) min = arr[i]
    }
    return min
}

function cut(arr,min=arr[0]){
    if (!arr.length) return;
    console.log(arr.length);
    while(arr[0] == min) arr.shift();
    cut(arr, arr[0]);
}
let a = [5,4,4,2,2,8]
a.sort((a,b) => a-b );
console.log(cut(a))