// url: https://saxobank.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410592#notes


/**
  Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in; You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

/**
 * areThereDuplicates(1,2,3) => false
 * areThereDuplicates(1,2,2) => true
 * areThereDuplicates('a', 'b', 'c', 'a') => true
 */
function areThereDuplicates() {
  let arr = [...arguments]
  let set = new Set(arr)
  return arr.length !== set.size
}


console.log(
  areThereDuplicates(1,2,3),
  areThereDuplicates(1,2,2),
  areThereDuplicates('a', 'b', 'c', 'a'),
)