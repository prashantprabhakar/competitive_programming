/**
 * sourceL hackerrank
 * url: https://www.hackerrank.com/challenges/sparse-arrays/problem?h_r=next-challenge&h_v=zen
 */
/**
 * There is a collection of input strings and a collection of query strings. 
 * For each query string, determine how many times it occurs in the list of input strings. 
 * Return an array of the results.
*/


function matchingStrings(strings, queries) {
    // loop over strings array and find unique strings and their count
    let uniqueStr = new Map()
    strings.forEach(str => {
        if(uniqueStr.has(str)) uniqueStr.set(str, uniqueStr.get(str)+1)
        else uniqueStr.set(str, 1)
    });

    let output_arr = []
    queries.forEach(queryStr => output_arr.push(uniqueStr.get(queryStr) || 0))
    return output_arr
}

console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))