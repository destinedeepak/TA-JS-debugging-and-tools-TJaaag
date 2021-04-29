function fullName(firstName, lastName){
if(firstName === undefined || lastName === undefined){
    throw new Error(`Pass two arguments`);
}
    return `${firstName} ${lastName}`
}

let result = fullName("Arya","Stark")
let expected = "Arya Stark"

if(result !== expected){
    throw new Error(`${result} is not same as ${expected}`)
}


// After making the first test fail the execution of current functon gets stop so i do not see any output of 2nd test.


function totalAmount(amount, taxRate){
    if(typeof amount !== "number"|| typeof taxRate !== "number"){
        throw new Error("Amount and TaxRate should be always a number")
    }
    return amount + (amount * taxRate)
}
let result1 = totalAmount(10,)
let expected1 = 110

if(result1 !== expected1){
    throw new Error(`${result1} is not same as ${expected1}`)
}// After making the first test fail the execution of current functon gets stop so i do not see any output of 2nd test.