// GFG: https://www.geeksforgeeks.org/the-stock-span-problem/

/**
 * The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and
 * we need to calculate the span of the stock’s price for all n days.
 * The span Si of the stock’s price on a given day i is defined as the maximum number of consecutive days just before the given day,
 * for which the price of the stock on the current day is less than its price on the given day. 
 * 
 */

/**
    Input: N = 7, price[] = [100 80 60 70 60 75 85]
    Output: 1 1 1 2 1 4 6
    Explanation: Traversing the given input span for 100 will be 1, 80 is smaller than 100 so the span is 1, 60 is smaller than 80 so the span is 1, 70 is greater than 60 so the span is 2 and so on. Hence the output will be 1 1 1 2 1 4 6.

    Input: N = 6, price[] = [10 4 5 90 120 80]
    Output:1 1 2 4 5 1
    Explanation: Traversing the given input span for 10 will be 1, 4 is smaller than 10 so the span will be 1, 5 is greater than 4 so the span will be 2 and so on. Hence, the output will be 1 1 2 4 5 1.

 */

// [100, 80, 60, 70, 60, 75, 85]
// [  0,  0,  0,  1, 00, 01, 06] 

function stockSpan(arr) {
    const stack = [], result = [];
    for(let i=0; i<arr.length; i++) {
        let elem = arr[i];
        if(!stack.length) {
            //notice:  this condition was carefully needed
            result.push(i-(-1));
            stack.push({elem, index: i});
            continue;
        }
        if(stack[stack.length-1].elem > elem) {
            result.push(i-stack[stack.length-1].index );
            stack.push({elem, index: i});
        } else {
            while(stack.length && stack[stack.length-1].elem <= elem) stack.pop();
            i--
        }

    }
    return result;

}


console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]))
console.log(stockSpan([10, 4, 5, 90, 120, 80])) // 1 1 2 4 5 1

