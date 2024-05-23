/**
 * https://leetcode.com/problems/palindrome-partitioning/description/?envType=daily-question&envId=2024-05-22
 */


function partition(s) {

    let result = [];
    let partition = [];

    function dfs(index) {
        if(index >= s.length) {
            result.push([...partition]);
            return;
        }
        for(let i=index; i<s.length; i++) {
            const substr = s.substring(index, i+1);
            const isSubstrPallindrom = isPallindrom(substr);
            if(isSubstrPallindrom) {
                partition.push(substr);
                dfs(i+1)
                partition.pop()
            }
        }
    }

    function isPallindrom(str) {
        let l=0; r = str.length-1;
        while(l<r) {
            if(str[l] !== str[r]) return false;
            l++;
            r--;
        }
        return true
    }
    dfs(0)
    return result
}

console.log(partition("aab"))