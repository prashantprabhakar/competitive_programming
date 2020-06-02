
function solution(arr, num) {
    for(let i=0; i<arr.length-1; i++) {
        let sum = arr[i]
        for(let j=i+1; j<arr.length; j++) {
            sum += arr[j]
            if(sum == num) {
                return [i,j]
            }
        }
    }
    return [-1, -1]
}


console.log(solution([4,3,5,7,8], 12))
console.log(solution([1,2,3,4], 15))
console.log(solution([4,3,10,2,8], 12))