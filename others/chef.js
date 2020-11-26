
/**
 * @TODO
 */
const numberOfDays = 5
const numberOfIngredients = 3
const ingrediants = ['FATOil', 'FATCheese', 'FATEgg', 'FIBERSpinach', 'CARBRice', 'FIBERBeans']
const isUsed = []
let availableIng = ingrediants.length
// which category is used most in last dish
let maxUsedInLastDish = [];
let nextFood
let isZAllowed = false
let dishes = []

function getIngrediantCategory(ingrediant) {
    if(ingrediant.startsWith('FIBER')) return 'FIBER'
    if(ingrediant.startsWith('FAT')) return 'FAT'
    if(ingrediant.startsWith('CARB')) return 'CARB'
}

function setMostUsed(categoryCount) {
    maxUsedInLastDish = []
    let maxNo = Math.max(categoryCount['FIBER'], categoryCount['FAT'], categoryCount['CARB'])
    if(categoryCount['FIBER'] == maxNo) maxUsedInLastDish.push('FIBER')
    if(categoryCount['FAT'] == maxNo) maxUsedInLastDish.push('FAT')
    if(categoryCount['CARB'] == maxNo) maxUsedInLastDish.push('CARB')
}

function canCookX(ingrediants) {
    if(availableIng < numberOfIngredients) false;
    let fatIndex = []
    for(let i=0; i<ingrediants.length; i++) {
        if(isUsed[i]) continue;
        if(getIngrediantCategory(ingrediants[i]) == 'FAT') fatIndex.push(i)
        if(fatIndex.length >=2) return fatIndex
    }
    return false
}

function canCookY(ingrediants){
  let carbIndex = 0, fiberIndex = 0
  for(let i=0; i<ingrediants.length; i++) {
        if(isUsed[i]) continue;
        if(getIngrediantCategory(ingrediants[i]) == 'CARB') carbIndex = i
        if(getIngrediantCategory(ingrediants[i]) == 'FIBER') fiberIndex = i
        if(carbIndex && fiberIndex ) return [carbIndex, fiberIndex]
    }
    return false
}

function canCookZ() {
    let indexes = {}
    let catIndexes = {}
    for(let i=0; i<maxUsedInLastDish.length; i++) {
        indexes[maxUsedInLastDish[i]] = -1
    }
    for(let i=0; i<ingrediants.length; i++) {
        if(isUsed[i]) continue;
        let cat = getIngrediantCategory(ingrediants[i])
        // if cat exists on indexes; remove
        if (cat in indexes) {
            catIndexes[cat] = i;
            delete indexes[cat]
        }
        // check if we can break
        if(Object.keys(indexes).length == 0) return catIndexes
    }
    return false

}

function cookX(fatIndex) {
  // use 2 FATS
  isUsed[fatIndex[0]] = true
  isUsed[fatIndex[1]] = true
  let categoryCount = {
      'FAT': 2,
      'FIBER': 0,
      'CARB': 0
  }
  let carbCount = 0, fatCount=2, fiberCount = 0
  let ingUsed = 2
  for(let i=0; i<ingrediants.length; i++) {
      if(isUsed[i]) continue;
      let cat = getIngrediantCategory(ingrediants[i])
      if(cat == 'CARB') continue; // can not used carb in X

      isUsed[i] = true
      categoryCount[cat] = categoryCount[cat]+1
      ingUsed++
      if(ingUsed == numberOfIngredients) break 
  }
  if(ingUsed !== numberOfIngredients) return false
  availableIng = availableIng - numberOfIngredients
  dishes.push('X')
  nextFood = 'Y'
  setMostUsed(categoryCount)
  return true
}


function cookY(_catIn) {
    let [carbIndex, fiberIndex] = _catIn
    isUsed[carbIndex] = true
    isUsed[fiberIndex] = true
    let ingUsed = 2
    let categoryCount = {
      'FAT': 0,
      'FIBER': 1,
      'CARB': 1
    }

    for(let i=0; i<ingrediants.length; i++) {
      if(isUsed[i]) continue;
      let cat = getIngrediantCategory(ingrediants[i])
      if(cat == 'FAT') continue; // can not used carb in X
      isUsed[i] = true
      categoryCount[cat] = categoryCount[cat]+1
      ingUsed++
      dishes.push('Y')
      if(ingUsed == numberOfIngredients) break 
    }
    if(ingUsed !== numberOfIngredients) return false
    availableIng = availableIng - numberOfIngredients
    nextFood = 'X'
    setMostUsed(categoryCount)
    return true
}

function cookZ(catIndexes) {
    let categoryCount = {
      'FAT': 0,
      'FIBER': 0,
      'CARB': 0
    }
    
    for (let [cat, index] of Object.entries(catIndexes)) {
        categoryCount[cat] = categoryCount[cat]+1;
        isUsed[index] = true
    }
    let ingUsed = catIndexes.keys().length

    for(let i=0; i<ingrediants.length; i++) {
      if(isUsed[i]) continue;
      let cat = getIngrediantCategory(ingrediants[i])
      isUsed[i] = true
      //categoryCount[cat] = categoryCount[cat]+1
      ingUsed++
      if(ingUsed == numberOfIngredients) break 
    }
    if(ingUsed !== numberOfIngredients) return false
    dishes.push('Z')
    availableIng = availableIng - numberOfIngredients
    return true
    //setMostUsed(categoryCount)
}


function initialCook() {
    // try cooking x and y; if both can be cooked, choose one with lowest index used
    let xindex = canCookX(ingrediants) // [f1. f2] // f2 > f1
    let yIndex = canCookY(ingrediants) // [c1, c2]
    if(xindex && yIndex) {
        // complex logic here
        if(xindex[0] < yIndex[0] && xindex[0] < yIndex[1]) {
            cookX(xindex)
        } else {
            cookY(yIndex)
        }
    } else {
        if(xindex) dishes.push('X')
        if(yIndex) dishes.push('Y')
        else {
            dishes.push('-')
            return false
        }
    }
    return true
}



function main() {
    for(let i=0; i<numberOfDays; i++) {
        if(isZAllowed) {
            if(nextFood == 'X') {
                let xindex = canCookX(ingrediants)
                if (xindex) cookX(ingrediants)
                else {
                    let zIndex = canCookZ(ingrediants)
                    if(zIndex) dishes.push('Z')
                    else dishes.push('-')
                }
            }
            if(nextFood == 'Y') {
                let yIndex = canCookY(ingrediants)
                if (yIndex) cookY(ingrediants)
                else {
                    let zIndex = canCookZ(ingrediants)
                    if(zIndex) dishes.push('Z')
                    else dishes.push('-')
                }
            }
        } else {
            // try cooking X or Y
            let isCooked = initialCook()
            if(isCooked) isZAllowed = true
            
        }
    }
    console.log(dishes)

}

main()



