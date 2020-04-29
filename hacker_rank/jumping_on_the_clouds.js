/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 * Jumping on the Clouds
 */

/**
 * 
 * @param {array} c array of ints with no 1 to be avoided
 */
function jumpingOnClouds(c) {
    c = c.split(' ')
    let l = c.length, i=0, count = 0
    while(i<l-1){
        if(c[i+2] != 1) {
            i= i+2
            count++
        } else if(c[i+1] != 1){
            i++
            count++
        }
        else {
            console.log("You lost!!!!!!!!!! Try Again")
            count = -10
            break
        }
    }
    return count
    //console.log({count})
}

jumpingOnClouds('0 0 1 0 0 1 0')
jumpingOnClouds('0 0 0 0 1 0')
