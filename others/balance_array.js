/**
 * source: https://www.interviewbit.com/problems/balance-array/
 * Hint1: Maintain PrefixSum and SuffixSum for odd and even index seperately.
 */

 // O(n^2) complexity; O(1) space
function countBalance(arr) {
    let count = 0
    for(let i=0; i<arr.length; i++) {
        let evenSum = 0, oddSum = 0, isOdd = true
        for(let j=0; j<arr.length; j++) {
            if(j == i) continue
            if(isOdd) oddSum += arr[j]
            else evenSum += arr[j]
            isOdd = !isOdd
        }
        if(oddSum == evenSum) count++
    }
    return count

}


function countBalance1(arr)  {
    let left_sum = [{}], right_sum = [{}]
    left_sum[0].first = arr[0]
    left_sum[0].second = 0

    for(let i=1; i<arr.length; i++) {
        if(i%2 == 0) {
            left_sum[i].first = left_sum[i-1] + arr[i]
            left_sum[i].second = left_sum[i-1].second
        } else {
            left_sum[i].first = left_sum[i-1].first;
            left_sum[i].second = left_sum[i-1].second + arr[i]
        }
    }

    if(n%2 == 0) {
        right_sum[n-1].first = 0
        right_sum[n-1].second = arr[n-1]
    } else {
        right_sum[n-1].first=arr[n-1];
        right_sum[n-1].second=0;
    }

    for(let i=n-1; i>=0; i--) {
        if(i%2 == 0) {
            right_sum[i].first = right_sum[i-1] + arr[i]
            right_sum[i].second = right_sum[i-1].second
        } else {
            right_sum[i].first = right_sum[i-1].first;
            right_sum[i].second = right_sum[i-1].second + arr[i]
        }
    }

    let count = 0, even =0, odd=0;
    for(let i=0; i<arr.length; i++) {
        if(i!=0) {
            even = left_sum[i-1].first
            odd = left_sum[i-1].second
        }
        if(i%2==0) {
            let v1 = right_sum[i].first + arr[i]
            let v2 = right_sum[i].second
            even += v2
            odd += v1
        }
        if(even == odd) count++
    }

    return count

}


console.log(countBalance([2,1,6,4]))
console.log(countBalance1([2,1,6,4]))