// categorized on the basis of the way they have been stored in memory and then accessed from there

// *******primitive data types -> call by value********** 

// 7 types : String, Number, Boolean, null , undefined , Symbol (makes value unique) , BigInt (big integer values like scientific values)

/*
const score = 100 
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null 

let userEmail ; // undefined 

const id = Symbol('123') // symbol example 
const anotherId = Symbol('123')

console.table([id, anotherId])

console.log(id === anotherId)

const bigNumber = 2432465664242423423n ; //BigInt
*/

// *******non-primitive data types (reference) -> call by reference ********

// Array , Objects , Functions 


const heroes = ["shaktiman", "naagraj", "doga"]

let myInfo = {
    name: "sonu",
    age: 23,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof myInfo)
console.log( typeof heroes)
console.log( typeof myFunction)

