/**
 * source: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
 */

/**
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 */

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let currentItems = new Map()
    arr1.forEach(items => {
        currentItems.set(items[1], items[0])
    });

    arr2.forEach(items => {
        let [quantity, item] = items
        if(currentItems.has(item)) currentItems.set(item, currentItems.get(item)+quantity)
        else currentItems.set(item,quantity)
    })

    let op = []
    currentItems.forEach((quantity,item) => {
        if(quantity || item) op.push([quantity, item])
    })

    let x = op.sort((elem1, elem2) => elem1[1] > elem2[1])
    console.log(x)


}

// Example inventory lists[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]
var curInv = [
    [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]
];

updateInventory(curInv, newInv);