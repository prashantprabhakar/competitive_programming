/**
 * source: https://leetcode.com/discuss/interview-question/2189149/amazon-online-assessment-questions
 * or https://archive.is/Ckx54
 */
/**
 * On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

    "G": go straight 1 unit;
    "L": turn 90 degrees to the left;
    "R": turn 90 degrees to the right.
    The robot performs the instructions given in order, and repeats them forever.

    Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

    Example 1:

    Input: instructions = "GGLLGG"
    Output: true
    Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
    When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
    Example 2:

    Input: instructions = "GG"
    Output: false
    Explanation: The robot moves north indefinitely.
    Example 3:

    Input: instructions = "GL"
    Output: true
    Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
    Constraints:
    1 <= instructions.length <= 100
    instructions[i] is 'G', 'L' or, 'R'.
 */

function isRobotBounded(instructions) {
    instructions += instructions +  instructions + instructions;
    let direction = "N" // "E", "W", "S"
    let i=0, j=0

    function go(i, j, direction) {
        switch(direction) {
            case "N": return [i, j+1, direction];
            case "E": return [i+1, j, direction];
            case "W": return [i-1, j, direction];
            case "S": return [i, j-1, direction];
        }
    }
    function goLeft(i, j, direction) {
        switch(direction) {
            case "N": return direction = [i, j, "W"];
            case "E": return direction = [i, j, "N"];
            case "W": return direction = [i, j, "S"];
            case "S": return direction = [i, j, "E"];
        }
    }

    function goRight(i, j, direction) {
        switch(direction) {
            case "N": return direction = [i, j, "E"];
            case "E": return direction = [i, j, "S"];
            case "W": return direction = [i, j, "N"];
            case "S": return direction = [i, j, "W"];
        }
    }

    instructionsMap = {
        "G": go,
        "L": goLeft,
        "R": goRight
    }
    for(let char of instructions) {
        [i, j, direction] = instructionsMap[char](i, j, direction)
    }
    if(i===0  && j=== 0) return true;
    return false;
}

function isRobotBounded2(instructions) {
    instructions += instructions + instructions + instructions;
    const dx = [0, 0, -1, 1]
    const dy = [1, -1, 0, 0]

    function turnLeft(d) {
        if (d == 0) return 2;
        if (d == 2) return 1;
        if (d == 1) return 3;
        return 0;
    }
    
    function turnRight(d) {
        if (d == 0) return 3;
        if (d == 3) return 1;
        if (d == 1) return 2;
        return 0;
    }


    let x, y, direct;
    x = y = direct = 0;
    for(let c of instructions) {
        if (c == 'L') 
            direct = turnLeft(direct);
        else if (c == 'R') 
            direct = turnRight(direct);
        else {
            x += dx[direct];
            y += dy[direct];
        }
    }
    if (x == 0 && y == 0) return true;
    return false;

}

console.log(isRobotBounded2('GLLGGG'))
console.log(isRobotBounded('GLLGGG'))