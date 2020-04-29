/**
 * https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
 */

function climbingLeaderboard(scores, alice) {
    test1(scores, alice);
    console.log('\n')
    test2(scores,alice)
}

function test1(scores, alice) {
    let j = 0
    scores = [...new Set(scores)]
    for(let i=alice.length-1; i>=0; i--){
        let aliceScore = alice[i]
        while(aliceScore <= scores[j]){
            j++;
        }
        console.log({scores: aliceScore, position: j+1})
    }
}

// Tested
function test2(scores, alice) {
    scores = [...new Set(scores)]
    let count = 0
    let j = scores.length-1;
    console.log({len: scores.length-1})
    for(let i=0; i<alice.length; i++){
        let aliceScore = alice[i]
        while(aliceScore >= scores[j]){
            j--
            count++
        }
        console.log({scores: aliceScore, position: j+2})
        
    }
    console.log({count})
}


climbingLeaderboard([100,100,50,40,40,20,10], [5,25,50,120])