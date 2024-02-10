


function houseRobbber2_bottomUpDp_optimzied(nums) {

    if(nums.length === 1) return nums[0]
    function houseRobber(nums, start, end) {
        if(end-start < 0) return 0;
        if(end- start === 0) return nums[start];
        if(end - start === 1) return nums[end];

        let secondLast = nums[start];
        let last = nums[start+1];

        for(let i=start+2; i<=end; i++) {
            let temp = last;
            last = Math.max(nums[i]+secondLast, last);
            secondLast = temp;
        }
        return Math.max(last, secondLast);
    }

    return Math.max(
        houseRobber(nums, 0, nums.length-2),
        houseRobber(nums, 1, nums.length-1)
    )

}

function main() {
    const tests = [
        { input: [1,2,3,1], expected: 4},
        { input: [3], expected: 3},
        { input: [2,3,2], expected: 3},
        { input: [2,1], expected: 2},
        { input: [1,2,3,1], expected: 4}

    ]

    console.log("\n****** recursion *****")
    tests.forEach(({input, expected}) => {
        let outtput = houseRobbber2_bottomUpDp_optimzied(input);
        console.log({input, expected, outtput})
    })
}

main()