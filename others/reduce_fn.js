/**
 * let  { result, message } = arr.reduce();
 */

Array.prototype.reduce = function(cb, acc=0){
    for(let i=0; i<this.length; i++) {
        acc =  cb(acc, this[i])
    }
    return { result: acc, msg: 'success'}

}



let arr = [1,2,4]

let res = arr.reduce((acc, item) => acc+item*2, 1) // 6
console.log(res)
// { result: 6, msg: 'success'}
