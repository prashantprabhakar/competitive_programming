/**
    https://leetcode.com/problems/daily-temperatures/description/
    
    739. Daily Temperatures
    Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 */

// the problem actually reduces to finding nextGreater element in an array. Here instead of nextGreater we need index of nextGreater.


// left to righ iteration -> 
function dailyTemperatures(temperatures) {
    let stack = [];
    let result = [];
    for(let i=0; i<temperatures.length; i++) {
        let currentTemp = temperatures[i];

        while(
            stack.length > 0 &&
            currentTemp > temperatures[stack[stack.length-1]] // stack top is greater than current temp;
        ) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }

        result.push(i)
    }
    return result;

}

// right to left 
/**
 * When scanning from right to left:

    At each day i,
    the stack already contains information about future days.

    So instead of resolving old indices,
    you directly query the stack to find the next warmer day.
 */
function dailyTemperatures2(temperatures) {
    let stack = [];
    let result = [];
    for(let i=temperatures.length-1; i>=0; i--) {

        // logic
        // in stack the largest value will be at bottom
        // if currentTemp > stackTop.. we need to pop stack top till we get a value greater than currrentTemp.. 
        // if currentTemp < stackTop .. stack top is answer for current day.. we take that ans and also push currentTemp to stack since it could be nearser to another one
        let currentTemp = temperatures[i];
        while(
            stack.length &&
            currentTemp >= temperatures[stack[stack.length-1]]
        ) {
            stack.pop();
        }

        if(stack.length > 0) {
            result[i] = stack[stack.length - 1] - i;
        } else {
            result[i] = 0;
        }
        stack.push(i);

    }
    return result;
}
