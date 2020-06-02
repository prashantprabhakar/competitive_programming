/**
 * https://www.hackerrank.com/challenges/lisa-workbook/problem
 */

function workbook(n, k, arr) {
    let startPage = 1
    let specialProblems = 0
    for(let i=0; i<arr.length; i++) {
        let noOfProblems = arr[i]
        let noOfPage = Math.ceil(noOfProblems/k)
        let endPage = startPage + noOfPage - 1
        // find out special problems
        for(let j=startPage, l=1; j<endPage+1; j++,l++) {
            // probels on jth page vary from 1 - k , K+1 to 2k , 2K+1 .. 3k .... => l to l*k+1
            let startingProblemCount = (l-1)*k+1
            let endingProblemCount = Math.min(l*k, noOfProblems)
            // console.log(`Page no: ${j} |  Problem start: ${startingProblemCount} | problem ends: ${endingProblemCount}`)
            if( startingProblemCount <=j && j <= endingProblemCount) specialProblems++
        }


        startPage = endPage + 1
    }
    console.log({specialProblems})

}

function workbook1(n,k,arr) {
    // let's work page wise
    let currentPage = 1
    let currnetChapter = 1
    let loopCount = 1
    while(true) {
        let probemStart = 1
        let problemEnd = k

        if()
        currentPage++

    }



}

workbook(5, 3, [4,2,6,1,10])
