
/**
 * @TODO - WIP
 * Fist food can be X or Y
 * After than X and Y will be cooked alternate
 * Z will only be cooked iff X and Y can not be cooked
 * 
 * X : 2 Fat + ...
 * Y: 1 Fiber + 1 Carb + ...
 * Z: 1 (;ast most used) + ...
 * 
 */
const numberOfDays = 5
const numberOfIngredients = 3
const ingrediants = ['FATOil', 'FATCheese', 'FATEgg', 'FIBERSpinach', 'CARBRice', 'FIBERBeans']
const CATEGORY = {
    FAT: 'FAT',
    FIBER: 'FIBER',
    CARB: 'CARB'
}

let fats = [], fibers = [], carbs = []
const ingDetails = {}
const availibility = {
    all: ingrediants.length,
    [CATEGORY.FAT]: 0,
    [CATEGORY.FIBER]: 0,
    [CATEGORY.CARB]: 0
}

const usedIndex = {
    [CATEGORY.FAT]: 0,
    [CATEGORY.FIBER]: 0,
    [CATEGORY.CARB]: 0
}

let usedInLastDish = {
    [CATEGORY.FAT]: 0,
    [CATEGORY.FIBER]: 0,
    [CATEGORY.CARB]: 0
}

let maxUsedInLastDish = []
let turn = '-'
let dishes = []

function getIngrediantCategory(ingrediant) {
    if(ingrediant.startsWith('FIBER')) return CATEGORY.FIBER
    if(ingrediant.startsWith('FAT')) return CATEGORY.FAT
    if(ingrediant.startsWith('CARB')) return CATEGORY.CARB
}

for(let i=0; i<ingrediants.length; i++) {
    let category = getIngrediantCategory(ingrediants[i])
    if(category === CATEGORY.FAT) fats.push(ingrediants[i])
    if(category === CATEGORY.FIBER) fibers.push(ingrediants[i])
    if(category === CATEGORY.CARB) carbs.push(ingrediants[i])

    ingDetails[ingrediants[i]] = {
        day: i,
        isUsed: false
    }

    availibility[category] = availibility[category]+1
}

function cookX(cook=true) {
    if(availibility.total < numberOfIngredients) return false
    if(availibility[CATEGORY.FAT]) return false

    // used when we just want to check if X can be cooked but not really cooking it
    if(!cook) return true

    // let's cook chef.
    let f1 = fats[usedIndex[CATEGORY.FAT]]
    let f2 = fats[usedIndex[CATEGORY.FAT]+1]

    ingDetails[f1].isUsed = true
    ingDetails[f2].isUsed = true

    availibility.all = availibility.all - 2
    availibility[CATEGORY.FAT] = availibility[CATEGORY.FAT] - 2
    
    usedIndex[CATEGORY.FAT] = usedIndex[CATEGORY.FAT]+2

    _resetUsedInLastDish()

    // now use all other items
    let i=0, count = 0

    while(i<ingrediants.length || count == itemsNeeded-2) {
        let ingrediant = ingrediants[i]
        if(ingDetails[ingrediant].isUsed) continue
        count++
        // process ingrediant
        useIngrediant(ingrediant)
    }

    setMostUsed(usedInLastDish)

    return true

    
}

function cookY(cook=true) {
    if(availibility.total < numberOfIngredients) return false
    if(availibility[CATEGORY.FIBER] < 1) return false
    if(availibility[CATEGORY.CARB] < 1) return false

    // used when we just want to check if X can be cooked but not really cooking it
    if(!cook) return true

    // let's cook chef.
    let f1 = fats[usedIndex[CATEGORY.FIBER]]
    let f2 = fats[usedIndex[CATEGORY.CARB]]

    ingDetails[f1].isUsed = true
    ingDetails[f2].isUsed = true

    availibility.all = availibility.all - 2
    availibility[CATEGORY.FIBER] = availibility[CATEGORY.FIBER] - 1
    availibility[CATEGORY.CARB] = availibility[CATEGORY.CARB] - 1
    
    usedIndex[CATEGORY.FIBER] = usedIndex[CATEGORY.FIBER]+1
    usedIndex[CATEGORY.CARB] = usedIndex[CATEGORY.FAT]+1

    _resetUsedInLastDish()

    // now use all other items
    let i=0, count = 0

    while(i<ingrediants.length || count == itemsNeeded-2) {
        let ingrediant = ingrediants[i]
        if(ingDetails[ingrediant].isUsed) continue
        count++
        // process ingrediant
        useIngrediant(ingrediant)
    }

    setMostUsed(usedInLastDish)

    return true

    
}

function cookZ(cook = true) {
    if(availibility.total < numberOfIngredients) return false

    for(let i=0; i<maxUsedInLastDish.length; i++) {
        if(availibility[maxUsedInLastDish[i]] < 1) return false
    }

    // used when we just want to check if X can be cooked but not really cooking it
    if(!cook) return true

    // let's cook chef.

    // now use all other items
    let i=0, count = 0

    while(i<ingrediants.length || count == itemsNeeded) {
        let ingrediant = ingrediants[i]
        if(ingDetails[ingrediant].isUsed) continue
        count++
        // process ingrediant
        useIngrediant(ingrediant, false) // assuming we dont't need to update most used count when z is cooked
    }

    return true
}

function useIngrediant(ingrediant, countItems = true) {
    ingDetails[ingrediant].isUsed = true
    let ingCat = getIngrediantCategory(ingrediant)
    availibility.all = availibility.all - 1
    availibility[ingCat] = availibility[ingCat] -1
    usedIndex[ingCat] = i+1
    if(countItems) usedInLastDish[ingCat] = usedInLastDish[ingCat] + 1
}

function _resetUsedInLastDish() {
    usedInLastDish = {
        [CATEGORY.FAT]: 0,
        [CATEGORY.FIBER]: 0,
        [CATEGORY.CARB]: 0
    }
    maxUsedInLastDish = []

}


function setMostUsed(categoryCount) {
    maxUsedInLastDish = []
    let maxNo = Math.max(categoryCount['FIBER'], categoryCount['FAT'], categoryCount['CARB'])
    if(categoryCount['FIBER'] == maxNo) maxUsedInLastDish.push('FIBER')
    if(categoryCount['FAT'] == maxNo) maxUsedInLastDish.push('FAT')
    if(categoryCount['CARB'] == maxNo) maxUsedInLastDish.push('CARB')
}

// when either of X or Y can be cooked
function initialCook() {
    let itemCooked = '-'
    let canCookX = cookX(false)
    let canCookY = cookY(false)
    if(canCookX && canCookY) {
        // handle case here

    } else {
        if(canCookX) {
            itemCooked = 'X'
            turn = 'Y'
            cookX()
        }
        if(canCookY){
            itemCooked = 'Y'
            turn = 'X'
            cookY()
        }
    }
    return itemCooked === '-' ? false : true
}

// can only cook X or Y
function normalCook() {
    if(turn == 'X') {
        let isXCooked = cookX()
        // one liner
        if(!isXCooked && cookZ())
        if(!isCooked) {
            let isZCooked = cookZ()
            if(!isZCooked) dishes.push('-')
        }
    }
}

function main() {
    let canCookZ = false
    while(dishes.length <= numberOfDays && !canCookZ) {
        canCookZ = initialCook()
    }

    while(dishes.length <= numberOfDays) {
        normalCook()
    }

    console.log(dishes)

    // nornal cook
    
}


main()



