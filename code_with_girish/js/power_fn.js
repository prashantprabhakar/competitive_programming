

/**
 * WAP to calculate pow(x,n)%d
 * without using praseInt, ** or % operator
 */

function powFn(x,n,d) {
    let pow = 1
    for(let i=0; i<n; i++) {
            pow = pow * x
    }

    while(pow >= d) {
        pow = pow - d
    }
    console.log(pow)
    
}

powFn(2,0, 3)