/**
 * https://leetcode.com/problems/seat-reservation-manager/
 * 1845. Seat Reservation Manager
 */

// do binary search to find proper position to inseat seat number in availableSeats, which is reverse sorted. This is log(n) operation
function findIndexToInsert(arr, num, start, end) {
    if(start === end) {
        return arr[start] > num ? start + 1 : start;
    }
    if(end - start === 1) {
        if(num > arr[start]) return start;
        if(num < arr[end]) return end + 1;
        else return start + 1;
    }

    let mid = start + Math.floor((end-start) / 2);
    // if(num === arr[md]) // this case will never happen
    if(num > arr[mid]) {
        return findIndexToInsert(arr, num, start, mid);
    } else {
        return findIndexToInsert(arr, num, mid, end);
    }

} 
var SeatManager = function(n) {
    this.seats = [];
    for(let i=n; i>0; i--) {
        this.seats.push(i);
    }
};


SeatManager.prototype.reserve = function() {
    return this.seats.pop();
};


SeatManager.prototype.unreserve = function(seatNumber) {
    let indexToInsert = findIndexToInsert(this.seats, seatNumber, 0, this.seats.length-1);
    this.seats = [
        ...this.seats.slice(0, indexToInsert),
        seatNumber,
        ...this.seats.slice(indexToInsert),
    ];

};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */