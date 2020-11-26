/**
 * source: https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/
 * Company: Sprinklr
 * 
 */


function findMinPlatfor(arrival, depart) {
    arrival = arrival.sort()
    depart = depart.sort()

    let platform_needed = 0
    let max_platform_count = 0

    let i=0; j=0
    while(i<arrival.length && j<depart.length) {

        if(arrival[i] < depart[j]) {
            platform_needed += 1
            i++
        } else if(arrival[i] > depart[j]) {
            platform_needed -= 1
            j++
        }
        max_platform_count = Math.max(max_platform_count, platform_needed)
    }

    console.log(max_platform_count)

}

let arrival = ['09:00', '09:40', '09:50', '11:00', '15:00', '18:00']
let depart = ['09:10', '12:00', '11:20', '11:30', '19:00', '20:00']

findMinPlatfor(arrival, depart)