


function countBuildingsFacingSunset(arr) {

    // handle edge cases
    if(!arr || !arr.length) return 0

    let currentMax = arr[0]
    let noOfBuildingFacingSunset = 1
    for(let i=1; i<arr.length; i++) {
        if(arr[i] < currentMax) continue
        noOfBuildingFacingSunset++
        currentMax = arr[i]
    }
    return noOfBuildingFacingSunset

}

function countBuildingsWhenSunIsRight(arr) {
    // handle edge cases
    if(!arr || !arr.length) return 0

    let len = arr.length

    let currentMax = arr[len-1]
    let noOfBuildingFacingSunset = 1
    for(let i=len-2; i>=0; i--) {
        if(arr[i] < currentMax) continue
        noOfBuildingFacingSunset++
        currentMax = arr[i]
    }
    return noOfBuildingFacingSunset
}

console.log(countBuildingsFacingSunset([7,4,8,3,9]))
console.log(countBuildingsWhenSunIsRight([7,4,8,3,5]))