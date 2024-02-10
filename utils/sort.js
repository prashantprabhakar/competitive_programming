var arr = [3,1,5,2,6,1]

// [1 2 3 5 6]

function sortAndRemoveDuplicates(arr) {
   
    let len = arr.length
    for(let i=0; i<len-1; i++) {
        for(let j=i+1; j< len; j++) {
            if(arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
            if(arr[j]  === arr[i]) {
                [arr[j], arr[len-1]] = [arr[len-1], arr[j]];
                j--;
                len--;
            }
            
        }
    }
    arr.length =  len
    return arr;
}

console.log(sortAndRemoveDuplicates([3,1,5,2,6,1]))