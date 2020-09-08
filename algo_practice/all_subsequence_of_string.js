

// brute-force print substring
function print_substr(str) {
    let subSequence = []

    for(let i=0; i<str.length; i++) {
        for(j = i+1; j<=str.length; j++) {
            let substr = str.slice(i, j)
            subSequence.push(substr)
        }
    }

    console.log(subSequence)
}


// print sunb-sequence
function print_subsequence(input, output='') {
    // base case
    if(input == '') {
        console.log(output)
        return
    }

    print_subsequence(input.slice(1), output)
    print_subsequence(input.slice(1), output+input[0])
}

function all_combination_of_str(str, prefix='') {
    console.log(prefix)
    for(let i=0; i<str.length; i++) {
        let newPrefix = prefix+str[i]
        all_combination_of_str(str.slice(1), newPrefix)
    }
}

    
print_substr('abc')
print_subsequence('abc')
all_combination_of_str('ab')

/**
 * a b c ab, ac, ba, bc, ca, cb 
 */

    