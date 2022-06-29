/**
 * Slowest key
 * https://leetcode.com/discuss/interview-question/2189149/amazon-online-assessment-questions
 */

/**
     A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.

    You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released.

    The tester wants to know the key of the keypress that had the longest duration. The ithkeypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].

    Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration.

    Return the key of the keypress that had the longest duration. If there are multiple such keypresses, return the lexicographically largest key of the keypresses.

    Example 1:
    Input: releaseTimes = [9,29,49,50], keysPressed = "cbcd"
    Output: "c"
    Explanation: The keypresses were as follows:
    Keypress for 'c' had a duration of 9 (pressed at time 0 and released at time 9).
    Keypress for 'b' had a duration of 29 - 9 = 20 (pressed at time 9 right after the release of the previous character and released at time 29).
    Keypress for 'c' had a duration of 49 - 29 = 20 (pressed at time 29 right after the release of the previous character and released at time 49).
    Keypress for 'd' had a duration of 50 - 49 = 1 (pressed at time 49 right after the release of the previous character and released at time 50).
    The longest of these was the keypress for 'b' and the second keypress for 'c', both with duration 20.
    'c' is lexicographically larger than 'b', so the answer is 'c'.
 */

/**
  Constraints:
    releaseTimes.length == n
    keysPressed.length == n
    2 <= n <= 1000
    1 <= releaseTimes[i] <= 109
    releaseTimes[i] < releaseTimes[i+1]
    keysPressed contains only lowercase English letters.


 */

function slowestKey(releaseTimes, keysPressed){
    let slowestKeyTime = 0;
    let possibleKeyys = [];
    for(let i=0; i<releaseTimes.length; i++) {
        let char = keysPressed[i];
        let keyTime = 0;
        if(i==0) keyTime = releaseTimes[0]; // alternatively we can compute for arr[0] outsidde for loop
        else keyTime = releaseTimes[i] - releaseTimes[i-1];

        if(keyTime > slowestKeyTime) {
            possibleKeyys = [char]
            slowestKeyTime = keyTime
        } else if(keyTime === slowestKeyTime) {
            possibleKeyys.push(char);
        }
       
    }
    
    let finalKey = possibleKeyys[0];
    for(let i=1; i<possibleKeyys.length; i++) {
        let ch = possibleKeyys[i];
        if(ch > finalKey) finalKey = ch
    }
    console.log({finalKey})
    return finalKey
}

slowestKey([9,29,49,50], 'cbcd')
slowestKey([12,23,36,46,62], "spuda")