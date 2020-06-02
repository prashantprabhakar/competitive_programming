/**
 * 
 * https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true
 */
/**
 * String Password
 * length 6
 * 1 digit
 * one lowercase letter
 * one uppercase letter
 * one special char !@#$%^&*()-+
 */

//She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

function minimumNumber(n, password) {
    let isUpperCase, isLowerCase, isDigit
    let isSpecial=false
    let conditionsMissing=4
    for(let i=0; i<password.length; i++) {
        if(conditionsMissing <= 0) break;
        let char = password[i]
        let charCode = char.charCodeAt()
        if( !isLowerCase && charCode >= 97 && charCode <= 122) {
            isLowerCase = true;
            conditionsMissing--
        } else if(!isUpperCase && charCode >= 65 && charCode <= 90) {
            isUpperCase = true;
            conditionsMissing--
        } else if(!isDigit && charCode >= 48 && charCode <= 57) {
            conditionsMissing--
        } else if(!isSpecial && '!@#$%^&*()-+'.includes(char)) {
            isSpecial= true
            conditionsMissing--
        }
    }

    return Math.max(conditionsMissing, 6-n)
}

// function minimumNumber1(n, password) {
//     n = password.length
//     let isUpperCase, isLowerCase, isDigit, isSpecialChar, conditionsMissing=4
//     for(let i=0; i<password.length; i++) {
//         if(conditionsMissing <= 0) break;
//         let char = password[i]
//         let charCode = char.charCodeAt()
//         if( !isLowerCase && char >= 'a' && char <= 'z') {
//             isLowerCase = true;
//             conditionsMissing--
//         } else if(!isUpperCase && char>= 'A' && char <= 'Z') {
//             isUpperCase = true;
//             conditionsMissing--
//         } else if(!isDigit && char >= '0' && char <= '9') {
//             isDigit = true
//             conditionsMissing--
//         } else if('!@#$%^&*()-+'.includes(char)) {
//             isSpecialChar= true
//             conditionsMissing--
//         }
//     }


//     console.log({isUpperCase, isLowerCase, isDigit, isSpecialChar})

//     if(n+conditionsMissing >= 6) return conditionsMissing
//     else return 6-n
// }

console.log(minimumNumber(3, 'AUzs-nV'))

