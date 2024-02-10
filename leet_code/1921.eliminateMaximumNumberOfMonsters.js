/**
 * https://leetcode.com/problems/eliminate-maximum-number-of-monsters/description/
 * 1921. Eliminate Maximum Number of Monsters
 */


// The solution works but is slow
function eliminateMaximum(dist, speed) {
    const time = dist.map((d, i) => d/speed[i]);
   time.sort((a,b) => a-b);
   let monstersKilled = 1;
   let timePassed = 1;
   let i = 1;

    while(timePassed < time[i] && i < time.length) {
        monstersKilled++;
        timePassed++;
        i++;
    }
    return monstersKilled
}





const tests = [
    { dist: [5,4,3,3,3], speed: [1,1,5,3,1], expectedResult: 1},
    { dist: [1,3,4], speed: [1,1,1], expectedResult: 3},
    { dist: [1,1,2,3], speed: [1,1,1,1], expectedResult: 1},
    { dist: [3,2,4], speed: [3,2,4], expectedResult: 1 },
    { dist: [4,2,3], speed: [2,1,1], expectedResult: 3},
    { dist: [3,5,7,4,5], speed: [2,3,6,3,2], expectedResult: 2},
]

tests.forEach(test => {
    const result = eliminateMaximum(test.dist, test.speed);
    console.log({ ...test, result})
})