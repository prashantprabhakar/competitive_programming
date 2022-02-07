
function promisify(fn) {
 return function(...args) {
   return new Promise((resolve, reject ) => {
     fn(...args, (err, result) => err ? reject(err) : resolve(result))
   })
 }
}



function genRandomNum(start, end, cb) {
  setTimeout(() => {
    let num  = randomNum();
    while(num > end || num < start) {
      num = randomNum();
    }
    cb(num)    
  }, 1000)
}

// genRandomNum(10, 30, function(val) {
//   console.log(val)
// })

const randomNum = () => parseInt(Math.random() * 100);

let promisifiedRandomNum = promisify(genRandomNum);

promisifiedRandomNum(10, 40).then(console.log).catch(console.log)