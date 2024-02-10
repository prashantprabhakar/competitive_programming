/**
 * URL: https://www.spoj.com/problems/POUR1/
 * Solution: https://www.geeksforgeeks.org/two-water-jug-puzzle/
 * Title: Puuring water problem, 2 jug problem
 */

/**
    Given two vessels, one of which can accommodate a litres of water and the other - b litres of water, determine the number of steps required to obtain exactly c litres of water in one of the vessels.

    At the beginning both vessels are empty. The following operations are counted as 'steps':

    emptying a vessel,
    filling a vessel,
    pouring water from one vessel to the other, without spilling, until one of the vessels is either full or empty.

 */


    /**
     * assumption: m > n 
     * cases:
     *  d > m -> -1
     *  d <n -> -1 -> incorrect since m-n can be answer
     *  1.  Pouring from n to m
     *      * d shoould be divisible by n
     *      * min steps = (m/n*)*2 
     * 
     *  2. Pouring from m to n:
     *      * d should be divisble by m-n
     *      * min steps = ((m-n)/d)*3 -> won't work since we can pour multiple times frm m to n
     * 
     */



function findMinSteps(m, n, d) {

    // swap if n > m
    if(n > m)  [m, n] = [n, m]

    function pour(fromCap, toCap,d) {
        let from = fromCap;
        let to = 0;

        // fill from jug
        let step = 1;

        while(from !== d && to !== d ) {
            // calculate how much we can pour into "to"
            let remainingCapacityOfTo = Math.min(from, toCap-to);

            // pour from "from" to "to"
            step++;
            to += remainingCapacityOfTo;
            from -= remainingCapacityOfTo;

            if(from === d || to === d) return step;

            if(from === 0) {
                // fill from
                step++;
                from += fromCap;
            }

            if(to === toCap) {
                // empty to
                step++;
                to =  0
            }
        }
        return step;

    }

    if(  d > m) return -1;
    if(m ==d || n==d) return 1

    let canPourFromSmallToLarge = d%n === 0;
    let canPourFromLargeToSmall = d%(m-n) === 0;
    if(!canPourFromLargeToSmall && !canPourFromSmallToLarge) return -1;

    let largeToSmallSteps = pour(m,n,d)
    let smallToLargeSteps = pour(n,m,d)
    return Math.min(largeToSmallSteps, smallToLargeSteps);

}

console.log(findMinSteps(5,2,3)) // 2
console.log(findMinSteps(2,3, 4)) // -1
console.log(findMinSteps(2,4,2))// 1
console.log(findMinSteps(10,2, 6)) // 4
console.log(findMinSteps(8,56,46)) // -1
console.log(findMinSteps(3,5,4)) // 6