
/**
 * Given array of shifts and breaks and nursary start and end time; return if schedule is valid
 * 1. Shift should bve b/w start and end date
 * 2. Shift should not overlap
 * 3. breaks should always be b/w shift time
 * 4. breaks should not overlap
 */


let startTime = '9:00'
let endTime = '22:00'

let shifts = []

let shiftMetaData = {}, breakMetaData = {}

// we can write a fn to compare times if not provide dby liberary
function checkIfValid(shiftStartTime, shiftEndTime) {
    if(shifts.length === 0) return true
    if(shiftStartTime < startTime || shiftEndTime > endTime) return false
    
    for(let i=0; i<shifts.length; i++) {
        let currentShift = shifts[i]
        if(shiftStartTime >= currentShift.endTime) continue; // new shift lies after existing shift
        if(shiftStartTime < currentShift.startTime && shiftEndTime <= currentShift.startTime) continue; // new shifts lies before current shift
        return false
    }
    
    return true

}

function addShift(shiftStartTime, shiftEndTime) {
    if(checkIfValid(shiftStartTime, shiftEndTime)) {
        shifts.push({
            startTime: shiftStartTime, endTime: shiftEndTime
        })
    }
}


addShift(9, 10)
addShift(9, 11)
addShift(8,9)
addShift(7,11)
addShift(13,17)

console.log(shifts)
