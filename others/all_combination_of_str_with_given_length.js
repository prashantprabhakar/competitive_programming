//Question: print all the combinations of chracters in the string with K length
// eg: abba, aaaa etc


let count = 0
// This fn assumes chars is array on unique elements
function printCombinations(chars, k, prefix='') {

   if(k<=0) {
      console.log(prefix)
      count++
      return
   }

   for(let i=0; i<chars.length; i++) {
      let newPrefix = prefix + chars[i]
      printCombinations(chars, k-1, newPrefix)

   }


}


function driver(str, k) {
   let chars = [...new Set(str.split(''))]
   return test(chars, k, '')
}


  
//printCombinations('a😎b', 4)
driver('abc', 4)
  
  
   //for(let i=0; i<str.length; i++) {
  //     // [a, b, c]
  //     let chars = str.split('') // [a,b, c]
      
  //     for(let i=0; i<chars.length; i++) {
  //       let chooseChar = chars[i]
  //       let reamaining = chars.filter(char => char != chooseChar).join('')
  //       return printCombinations(reamaining, k-1, x+chooseChar)
  //     }
  //     console.log("****************************")
  //      console.log(x)
      
      
  //   }
    