/**
 * url: https://leetcode.com/problems/course-schedule/
 * source: leetcode
 * difficulty: medium
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const courseMap = {};
    prerequisites.forEach(([child, parent]) => {
        if(courseMap.hasOwnProperty(child)) {
            courseMap[child].push(parent)
        } else {
            courseMap[child] = [parent]
        }
    })

    let visited = {};
    for(let [course, parents] of courseMap) {
        let queue = [];
        queue.push(course);
        while(queue.length) {

        }
    }
};