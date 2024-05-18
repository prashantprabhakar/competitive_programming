/**
 * https://leetcode.com/problems/meeting-rooms-iii/
 * 2402. Meeting Rooms III
 */


function mostBooked(n, meetings) {

    let meetingCountPerRoom = {};

    let mostUsedRoom = -1, freqMostUsed = 0

    // sort the meetings by start time
    meetings = meetings.sort((a, b) => a[0] - b[0]);
    console.log(meetings)
    // free rooms will be sorted in desc order. smallest meeting room at end of array
    let freeRooms = [];
    let currentMeetings = []; 
    for(let i=n-1; i>=0; i--) freeRooms.push(i)

    // O(n)
    for(let i=0; i< meetings.length; i++) {
        let selectedRoom;

        let startTime = meetings[i][0];
        // if there are any meeting rooms free by this time, free them
        while(currentMeetings.length && currentMeetings[currentMeetings.length-1][1] <= startTime) {
            let freedRoomId = currentMeetings[currentMeetings.length-1][2];
            smartPushRoom(freeRooms, freedRoomId);
            currentMeetings.pop()
        }

        if(freeRooms.length) {
            selectedRoom = freeRooms.pop();;
        } else {
            const lastMeeting = currentMeetings[currentMeetings.length-1]
            let newStartTime = lastMeeting[1];
            let currentMeetingDuration = meetings[i][1] - meetings[i][0];
            const roomId = lastMeeting[2];
            let newEndTime = newStartTime + currentMeetingDuration;
            meetings[i] = [newStartTime, newEndTime];
            currentMeetings.pop();
            selectedRoom = roomId;
        }
        
        // console.log(`${meetings[i][0]} - ${meetings[i][1]} -> ${selectedRoom}`)
        meetingCountPerRoom[selectedRoom] = (meetingCountPerRoom[selectedRoom] ?? 0 ) + 1;
        smartPushMeeting(currentMeetings, [...meetings[i], selectedRoom]);
        if(meetingCountPerRoom[selectedRoom] > freqMostUsed) {
            mostUsedRoom = selectedRoom;
            freqMostUsed = meetingCountPerRoom[selectedRoom]
        }

        if(meetingCountPerRoom[selectedRoom] === freqMostUsed)  {
            mostUsedRoom = Math.min(Number(selectedRoom), mostUsedRoom);
        }
    }
   
    console.log(meetingCountPerRoom)
    return mostUsedRoom
}

function smartPushMeeting(arr, value) {
    if(arr.length === 0) {
        arr.push(value)
        return
    }
    let indexToInsert = arr.length;
    
    for(let i=0; i<arr.length; i++) {
        let endTime = arr[i][1], providedEndTime = value[1];

        if(endTime > providedEndTime) continue;
        if(endTime < providedEndTime) {
            indexToInsert = i;
            break;
        }
        if(endTime === providedEndTime) {
            // we need to sort by smallest meeting room at end
            indexToInsert = i;
            while(endTime === providedEndTime) {
                if(i < arr.length && arr[i][2] > value[2]) {
                    i++;
                } else {
                    break;
                }
            }
            indexToInsert = i;
            break
        }
    }
    arr.splice(indexToInsert, 0, value);

}

// we can use binary search in logN time to find correct index
function smartPushRoom(arr, val) {
    if(arr.length === 0) {
        arr.push(val);
        return 
    }
    arr.push(val);
    arr.sort((a, b) => b-a)
}

// console.log(mostBooked(2, [[0,10],[1,5],[2,7],[3,4]])) // 0
// console.log(mostBooked(3, [[1,20],[2,10],[3,5],[4,9],[6,8]])) // 1

// Test cases that din't pass in first attempt
// console.log(mostBooked(2, [[0,10],[1,2],[12,14],[13,15]] )) // 0
// console.log(mostBooked(2, [[0,10],[1,2],[12,14],[15,16]])) // 0
// console.log(mostBooked(4, [[18,19],[3,12],[17,19],[2,13],[7,10]]))//0
// console.log(mostBooked(5,[[0,4],[14,16],[1,7],[6,7]]))