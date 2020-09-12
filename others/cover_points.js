
/**
 * source: https://www.interviewbit.com/problems/min-steps-in-infinite-grid/
 */

function coverPoints(a, b) {
    // move from a[0], b[0] -> a[1], b[1] ...
    let i=0, sum=0
    while (i<a.length-1) {
        sum += move_itr(a[i], b[i], a[i+1], b[i+1])
        i++
    }
   
    console.log("c", sum)
}

function move(x1, y1, x2, y2, count = 0) {
    if(x1==x2 && y1==y2) return count
    if(x1 < x2) x1++
    if(x1 > x2) x1--
    if(y1 < y2) y1++
    if(y1 > y2) y2++
    count++
    return move(x1, y1, x2, y2, count)
}

function move_itr(x1, y1, x2, y2) {
    let count = 0
    while(x1 != x2 || y1 != y2) {
        if(x1 < x2) x1++
        if(x1 > x2) x1--
        if(y1 < y2) y1++
        if(y1 > y2) y1--
        count++
    }
    return count
}


//coverPoints([0,1,1], [0,2,2])
//coverPoints([-7, -13], [1, -5])
coverPoints([ 4, 8, -7, -5, -13, 9, -7, 8 ], [ 4, -15, -10, -3, -13, 12, 8, -8 ])