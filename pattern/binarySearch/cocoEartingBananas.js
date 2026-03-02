
/**
 * Return the min int k such that coco can eat all bananas in h hours
 * k - no of bananas coco can eat each hour
 * h - total hrs coco has to eat
 * bananas[i] contain no of bananes at ith pile
 * coco can move to nex pipe in next hour and only after current pile is finished
 */



function cocoEatingBananas(bananas, h) {

    // check if given k can be ans O(n)
    function timeTaken(k) {
        let result = 0;
        for(let i=0; i<bananas.length; i++) {
            result += Math.ceil(bananas[i] / k);
        }
        return result;
    }

    const maxElem = bananas.reduce((acc, curr) => curr > acc ? curr: acc, bananas[0]);

    let start = 1, end = maxElem;
    let result = maxElem;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        let time = timeTaken(mid);
        if(time <= h) {
            result = mid;
            end = mid -1 ;
        } else {
            start = mid + 1;
        }
    }
    return result;
}