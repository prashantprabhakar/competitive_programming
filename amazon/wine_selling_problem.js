function findMaxProfit(arr) {
return wineProfit_memo(arr, 0, arr.length-1, 1, 0);


}

function wineProfit_rec(arr, start, end, year, result) {
  if(start === end) return arr[start]*year;
  let leftChoiceProfit = arr[start]* year + wineProfit_rec(arr, start+1, end, year+1, result);
  let rightChoiceProfit = arr[end]* year + wineProfit_rec(arr, start, end-1, year+1, result);
  result = Math.max(leftChoiceProfit, rightChoiceProfit)
  return result;
}

function wineProfit_memo(arr, start, end, year, result, memo={}) {
  if(start === end) return arr[start]*year;
  let memo_key = `${start}_${end}`
  if(memo[memo_key] !== undefined) return memo[memo_key];
  let leftChoiceProfit = arr[start]* year + wineProfit_rec(arr, start+1, end, year+1, result);
  let rightChoiceProfit = arr[end]* year + wineProfit_rec(arr, start, end-1, year+1, result);
  result = Math.max(leftChoiceProfit, rightChoiceProfit)
  memo[memo_key]  = result
  return result;
}


console.log(findMaxProfit([2,4,6,2,5]))