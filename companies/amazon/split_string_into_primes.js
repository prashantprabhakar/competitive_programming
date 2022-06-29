

function countPrimes(str)  {
    if(str.length === 1) return isPrime(str[0]) ? 1 : 0
    let ch = '', tempCount = 0
    for(let i=0; i<str.length; i++) {
        ch+= str[i];
        const isPrimeNum = isPrime(ch)
        if(isPrimeNum) {
            // note: we could pass index to function and start i form index instead of slice but using it anyways for better readibility
            let nStr = str.slice(i+1);
            let nCount = countPrimes(nStr)
            tempCount += nCount;
        }
    }
    return tempCount;
}


function isPrime(n) {
    let i, flag = true;
    n = parseInt(n)
    for(i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    };
    return flag
}

console.log(countPrimes('73')) // [7, 3], [73]
console.log(countPrimes("173")) // [1,7,3], [1,73], [17, 3], [173]
console.log(countPrimes("31173"))// [ [3,11,7,3], [3,11,73], [31,17,3], [31, 173], [311, 7, 3], [311, 73]  ]
