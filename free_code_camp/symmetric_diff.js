/**
 * source: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
 */

/**
 * Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).
 */

console.time("sym2")
function sym() {

    let set = new Set()
    for(let i=0; i<arguments.length; i++){
        let arr = [...new Set(arguments[i])]
        arr.forEach(elem => {
            if(set.has(elem)) set.delete(elem)
            else set.add(elem)
       }) 
    }
   
    // let res = []
    // map.forEach((count, elem) => {
    //     if(count == 1) res.push(elem)
    // })

    console.log([...set])
}
console.timeEnd("sym2")

console.time("sym1")
function sym1() {
    let map = new Map()
    for(let i=0; i<arguments.length; i++){
        let arr = [...new Set(arguments[i])]
        arr.forEach(elem => {
            if(map.has(elem)) map.set(elem, map.get(elem)+1)
            else map.set(elem,1)
       }) 
    }
   
    let res = []
    map.forEach((count, elem) => {
        if(count %2 !=0 ) res.push(elem)
    })

    console.log(res)
}
console.timeEnd("sym1")



sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) // 3,4,5
sym1([1, 2, 5], [2, 3, 5], [3, 4, 5]) // 3,4,5