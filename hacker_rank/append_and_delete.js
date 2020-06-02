/**
 * https://www.hackerrank.com/challenges/append-and-delete/problem?h_r=next-challenge&h_v=zen
 */


/**
 * 
 * @param {String} s initial string
 * @param {String} t final string
 * @param {*} k no of steps
 */
function appendAndDelete(s, t, k) {

    // if strings are same; we can use add1 + delete1 to get t
    if(s == t) {
        let res = k % 2 == 0 ? 'Yes': 'No'
        return res
    }

    // Case 2: Can delete s and create t
    if(k>= s.length + t.length) {
        return 'Yes'
    }

    // we have used this coz no matter if s is greater than t; we'll use + or - operator accordingly
    let longerStr = s.length > t.length ? s : t
    let sorterStr = s.length <= t.length ? s: t


    let commonCount = 0
    for(let i=0; i<sorterStr.length; i++) {
        if(sorterStr[i] == longerStr[i]) commonCount++
        else break
    }

    let diffinChars = s.length+t.length- (2*commonCount)
    // case 3: if k is equal to diff in chars: we can clear diff in t and add other to make t
    if( diffinChars == k) return 'Yes'
    // case 4: if k is greater than diffInChars and is even: we can do case 2 and keep on add1+delete1 operator to consume t
    if( k > diffinChars && (k - diffinChars) % 2 == 0) return 'Yes'
    
    // case 5: if loger does not contain shorter str
    if(!longerStr.includes(sorterStr)) {
        return 'No'
    }

    let diff = longerStr.length - sorterStr.length

    // case 6: if diff is less than operator; no way we can solve
    if(diff < k) {
        return 'No'
    }
    let rem = diff % k
    // case 7: if remainder is even we can use +1 and -1
    if(rem%2 == 0) return 'Yes'
    else return 'No'
}

function appendAndDelete2(s, t, k) {

    // Case 1: Can delete s and create t
    if(k >= s.length + t.length) {
        return 'Yes'
    }

    let commonCount = 0
    for(let i=0; i<Math.min(s.length, t.length); i++) {
        if(s[i] == t[i]) commonCount++
        else break
    }

    let diffinChars = s.length+t.length- (2*commonCount)
    // case 3: if k is equal to diff in chars: we can clear diff in t and add other to make t
    if( diffinChars == k) return 'Yes'
    // case 4: if k is greater than diffInChars and is even: we can do case 2 and keep on add1+delete1 operator to consume t
    if( k > diffinChars && (k - diffinChars) % 2 == 0) return 'Yes'

    // Case 5: if strings are same; we can use add1 + delete1 to get t
    if(s == t && k%2== 0) return 'Yes'

    return 'No'

}


function appendAndDelete3(s,t,k) {
    let commonCount = 0
    for(let i=0; i<Math.min())
}

console.log(appendAndDelete2('aba', 'aba', 7))