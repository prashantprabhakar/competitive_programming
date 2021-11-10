/**
 * URL: https://leetcode.com/problems/interleaving-string/
 * Source: ['leetcode']
 * difficulty: medium
 */

 let cache = {}
 var isInterleave = function(s1, s2, s3) {
     
     let p1=0,p2 = 0;
     if(s3.length != s1.length + s2.length) return false;
     
     let key = `${s1}_${s2}_${s3}`;
     if(cache[key] !== undefined) return cache[key];
     
     
     //let res = false;
     for(let i=0; i<s3.length; i++) {
         if(s3[i] === s1[p1] && s3[i] === s2[p2]) {
             
             let branch1 = isInterleave(s1.substring(p1+1), s2.substring(p2), s3.substring(i+1));
             if(branch1) {
                 cache[key] = true;
                 return true;
             }
             let branch2 = isInterleave(s1.substring(p1), s2.substring(p2+1), s3.substring(i+1));
             cache[key] = branch2;
             return branch2;
             
         } else if(s3[i] === s1[p1])  {
            // cahce[key] = true;
             p1++;
         } else if(s3[i] === s2[p2]) {
             //cache[key] = true;
             p2++;
         } else {
             cache[key] = false;
             return false;
         }
     }
     cache[key] = true;
     return true;
     
     
 };