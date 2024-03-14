
// rest and spread operator 

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// *********

const user = {
    username: "SonuNM", 
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "SonuNM", 
    price: 399
})




// *********** Array 


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 400, 500, 1000]))