/*
let myDate = new Date()

console.log(`Original: ${myDate}`);

console.log(`to String: ${myDate.toString()}`)

console.log(myDate.toISOString())

console.log(myDate.toLocaleString())

console.log(myDate.toDateString())

console.log(typeof myDate)
*/

/*
let myCreatedDate = new Date(2024, 2, 10)
console.log(myCreatedDate)
console.log(myCreatedDate.toString())
console.log(myCreatedDate.toLocaleString())
*/


// let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// let myCreatedDate = new Date("10-03-2024")
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

/*
let newDate = new Date()
console.log(newDate.getMonth()) // starts from 0 index

console.log(newDate.getMonth() + 1) // starts from 0 index
*/

let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long",
    
})
