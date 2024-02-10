/**
 * https://leetcode.com/problems/gas-station/
 */

/**
 * 
    There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

    You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

    Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
 */

function canCompleteCircuit(gas, cost) {

    let start = 0, currentTank = 0, total = 0;

    for(let i=0; i< gas.length; i++) {
        const capcity = gas[i] - cost[i];
        currentTank += capcity;
        total += capcity;

        if(currentTank < 0) {
            start = i+1;
            currentTank = 0;
        }

    }
    return total < 0 ? -1 : start;
}

const tests = [
    { gas: [1,2,3,4,5], cost: [3,4,5,1,2], output: 3},
    { gas: [2,3,4], cost: [3,4,3], output: -1 },

]

tests.forEach(({gas, cost, output}) => {
    let result = canCompleteCircuit(gas, cost);
    console.log({ gas, cost, output, result})
})