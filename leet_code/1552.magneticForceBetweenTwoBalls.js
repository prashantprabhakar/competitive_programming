/**
 * https://leetcode.com/problems/magnetic-force-between-two-balls/description/
 * 1552. Magnetic Force Between Two Balls
 * tags: binary Search
 * difficulty: medium - 6/10
 * solvedSelf: no
 * solved: yes
 */

/**
		In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. 
		Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that
		the minimum magnetic force between any two balls is maximum.

		Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

		Given the integer array position and the integer m. Return the required force.
 */


/**
 * Approach
 * Lets try different values and see if that can be an answer, use binary search to reach optimal solution.
 * Result can be in range -> 1 to position//m, we have to keep balls atleast 1 position away or at max it will be max value of positions divided by m
 */
function maxDistance(position, m) {
	position.sort((a, b) => a - b);
	const maxPosition = Math.max.apply(undefined,position);
	const minAns = 1;
	const maxAns = Math.floor(maxPosition / (m-1))
	console.log({ minAns, maxAns, maxPosition})

	let result = minAns;
	function binarySeach(start, end) {

		while (start <= end) {
			const mid = Math.floor((start + end) / 2);
			const isMidValid = helper_isValidSolution(mid, position, m);
			// console.log(`Checking is valid for ${mid}: ${isMidValid}`, {start, end})
			if (isMidValid) {
				result = Math.max(result, mid);
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}

	}

	binarySeach(minAns, maxAns);
	return result;
}

// 22 57 74 79 , x = 26, m = 4
// Can we get a valid solution if we keep balls at x distance
function helper_isValidSolution(x, position, m) {
	let lastBallPosition = position[0];
	let ballsPlaced = 1; // first ball is placed at 1st point
	let i = 1;

	while (i < position.length) {
		if (ballsPlaced === m) return true;
		let force = position[i] - lastBallPosition
		if (force >= x) {
			ballsPlaced++;
			lastBallPosition = position[i];
		}
		i++;
	}

	return ballsPlaced == m;

}

console.log(maxDistance([1,2,3,4,7], 3)) // 3
console.log(maxDistance([5,4,3,2,1,1000000000],2)) // 999999999
console.log(maxDistance([1,2,3,4,5,6,7,8,9,10], 4)) // 3
console.log(maxDistance([79,74,57,22], 4)) // 5
console.log(maxDistance([5999,2816,4264,2051,1731,5565], 2)) // 4268
