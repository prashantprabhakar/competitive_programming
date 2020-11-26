/**
 * URL: https://leetcode.com/problems/apply-discount-every-n-orders/
 * title: 1357. Apply Discount Every n Orders
 * There is a sale in a supermarket, there will be a discount every n customer.
    There are some products in the supermarket where the id of the i-th product is products[i] and the price per unit of this product is prices[i].
    The system will count the number of customers and when the n-th customer arrive he/she will have a discount on the bill. (i.e if the cost is x the new cost is x - (discount * x) / 100). Then the system will start counting customers again.
    The customer orders a certain amount of each product where product[i] is the id of the i-th product the customer ordered and amount[i] is the number of units the customer ordered of that product.
 */


const  calculatePriceAfterDiscount = (price, discount) => price - (price * discount / 100)


/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products containing ids; product at ith index means product id is product[i+1] and price per unit is prices[i+1]
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
    this.n = n
    this.discount = discount
    this.products = products
    this.pricePerProduct = {}
    prices.forEach((price, index) => this.pricePerProduct[products[index]] = price)
    this.customerCount = 0
    
};



/** 
 * @param {number[]} product arrray of id of products
 * @param {number[]} amount is no of units customer ordered
 * @return {number}
 */
Cashier.prototype.getBill = function(productsIds, quantity) {
    let eligibleForDiscount = false
    this.customerCount++
    if(this.customerCount == this.n) {
        eligibleForDiscount = true
        this.customerCount = 0
    }


    let billAmt = productsIds.reduce((acc, currrentProduct, index)=> {
        //let indexOfProductId = this.products.indexOf(currrentProduct)
        let q = quantity[index]
        //let perUnitPrice = this.prices[indexOfProductId]
        let perUnitPrice = this.pricePerProduct[currrentProduct]
        return acc + (q*perUnitPrice)
    },0)

    if(eligibleForDiscount) billAmt = calculatePriceAfterDiscount(billAmt, this.discount)


    return billAmt
    
};


let cashier1 = new Cashier(119,34 , [77], [302]);
console.log(cashier1.getBill([77], [343]))