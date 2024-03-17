

const myNums = [1,2,4]

const myTotal = myNums.reduce(function(acc, currVal){
    console.log(`acc: ${acc}, current value: ${currVal}`)
    return acc + currVal
}, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Java Course",
        price: 5999
    },
    {
        itemName: "Mobile dev Course",
        price: 1999
    },
    {
        itemName: "data science Course",
        price: 2099
    },
]


const pricePay = shoppingCart.reduce( (acc, item) => {
    return acc+item.price
},0)

console.log(pricePay)