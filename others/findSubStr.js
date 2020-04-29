
function findSubStr(mainStr, subStr){
    mainStrLower = mainStr.toLowerCase()
    subStrLower = subStr.toLowerCase()
    let startIndex = mainStrLower.indexOf(subStrLower)
    if(startIndex === -1) return ''
    let endIndex = startIndex + subStr.length
    return mainStr.slice(startIndex, endIndex)
}

console.log(findSubStr("my name is hElloW pps", "hello"))