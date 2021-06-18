/**
 * 
 * https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
 * tag: amazon, self-interview
 */


// was submitted to amazon; JAn 21
function __getSongPairCount(arr) {
    let frequency = new Map();
    let scaled_arr = []
    let sum = 60;
    let count = 0;
    let same_count = 0;
    let diff_count = 0;
    for(let i=0; i<arr.length; i++) {
      scaled_arr[i] = arr[i] > 60  ? arr[i] % 60 : arr[i]
      if(frequency.has(arr[i])) frequency.set(arr[i], frequency.get(arr[i])+ 1)
      else frequency.set(arr[i], 1)
    }
   
    for(let [num, currFreq] of frequency) {
      let requiredNum = sum - num || sum
      let reqFreq = frequency.get(requiredNum)
      if(reqFreq != undefined) {
          let additional = Math.ceil(Math.max(currFreq, reqFreq))
          if(num === requiredNum) {
              same_count += additional
          } else {
              diff_count += additional
          }
      }
    }
  
    let uniqueCounter = (diff_count/2) + same_count
    console.log({uniqueCounter})
    return uniqueCounter

   
}

// time complexity O(n^2)
function getSongPairCount1(arr) {
  if(arr.length < 2) return 0
  let count = 0;
  for(let i=0; i<arr.length-1; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if((arr[i] + arr[j])%60 == 0) count++
    }
  }
  console.log(count)
}


function getSongPairCount2(arr) {
  if(arr.length < 2) return 0
  let count = 0;
  let occurances = {}

  for(let i=0; i<arr.length; i++) {

    let scaledNum = arr[i] %60;
    if(scaledNum == 0) scaledNum = 60

    let requiredNum = 60 - scaledNum || 60
    if(occurances[scaledNum]) {
      count = count + occurances[scaledNum]
    }

    occurances[requiredNum] ? occurances[requiredNum]+=1 : occurances[requiredNum]=1
  }
  //console.log(requiredNum)
  console.log(count)
}


// getSongPairCount2([10,50,90, 30])
// getSongPairCount2([30,20,150,100,40])
// getSongPairCount2([10,50,50])
// getSongPairCount2([])
// getSongPairCount2([1,11,21])
//getSongPairCount3([60,60,60])
// getSongPairCount3([30,30,30])
//getSongPairCount3([120,60])
//getSongPairCount3([51,9, 111])
getSongPairCount2([336,24,100,342,274,11,43,22,416,138,384,386,70,265,59,253,344,435,400,296,192,143,311,424,315,63,420,254,493,431,32,394,178,51,378,335,265,92,335,325,25,355,258,298,390,399,393,114,149,62,299,471,286,204,163,214,15,272,315,212,272,437,339,193,125,394,62,188,154,150,109,294,228,200,459,42,469,132,37,460,143,1,144,127,398,82,370,464,14,85,321,358,205,14,264,289,183,93,56,126,413,140,441,446,445,378,258,119,385,226,8,93,476,265,115,86,360,92,396,407,458,58,65,397,381,32,228,37,319,220,73,328,162,458,231,219,481,387,423,256,252,36,309,395,471,4,225,146,188,182,347,82,21,292,91,144,387,263,206,452,197,192,324,257,370,28,440,180,294])
getSongPairCount2([120,120])