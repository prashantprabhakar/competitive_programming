
/**
    This fn takes a area and return no of sqare areas you can make out of it
    eg if you are given area = 12, you can mae a 3*3 sheet andd then 3 1*1
    so out put will be [9,1,1,1]
 */
function solution(area, res=[]) {
    if(area == 0) return res
    let [sqrt, square] = findSqrt(area)
    console.log({area, sqrt, square})
    res.push(square)
    return solution(area-square, res )

}

function findSqrt(no) {
    let sqrt =  Math.floor(Math.sqrt(no))
    let square = sqrt * sqrt
    return [sqrt, square]
}

console.log(solution(15324))