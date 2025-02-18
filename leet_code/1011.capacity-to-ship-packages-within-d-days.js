
/**
 * 1011. Capacity To Ship Packages Within D Days
 * tags: binary Search
 * difficulty: medium
 */


/**
 * 
    A conveyor belt has packages that must be shipped from one port to another within days days.

    The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

    Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

 */


function shipWithinDays(weights, days) {
    let minCapacity = 0, maxCapacity = 0;

    weights.forEach(weight => {
        maxCapacity += weight;
        minCapacity = Math.max(minCapacity, weight);
    });

    function isValidCapacity(capacity) {

        let daysRemaining = days;
        let totalWeightYet = 0

        for(let i=0; i<weights.length; i++) {
            if(!daysRemaining) return false;
            totalWeightYet += weights[i];
            if (totalWeightYet > capacity) {
                totalWeightYet = weights[i]; // Start new day with current weight
                daysRemaining--;
            }
            if (daysRemaining == 0) return false;
        }
        return daysRemaining > 0
        // return true
    }

    let result = maxCapacity;
    // function binarySeach(start, end) {
    //     if(start > end) return

    //     // let mid = Math.ceil((end + start)/2);
    //     let mid = Math.floor((start + end) / 2);
    //     let isValid = isValidCapacity(mid);
    //     if(isValid) {
    //         result = mid;
    //         return binarySeach(start, mid-1)
    //     } else {
    //         return binarySeach(mid+1, end)
    //     }

    // }

    function binarySeach(start, end) {
        while(start < end) {
            const mid = Math.floor((start + end) / 2);
            let isValid = isValidCapacity(mid);
            if(isValid) {
                result = mid;
                end = mid;
            } else {
                start = mid + 1
            }
        }
    }

    binarySeach(minCapacity, maxCapacity);
    return result;

}




console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5))
console.log(shipWithinDays([10,50,100,100,50,100,100,100],5)) //160