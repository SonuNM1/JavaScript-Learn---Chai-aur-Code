

// empty string value -> false 

// empty array, object, function -> true 

const userEmail = []

if(userEmail){
    console.log("got user email");
} else {
    console.log("no user email")
}

// ******** falsy values ********** 



// false, 0 , -0 , BigInt 0n , "" , null , undefined , NaN



// ******* truthy values ********



// "0" , 'false' , " " , [] , {} , function(){}

if(userEmail.length === 0){
    console.log("Array empty")
} else{
    console.log("not empty")
}



const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object empty")
} else{
    console.log("object not empty")
}



// *************** Nullish Coalescing Operator (??) : null undefined **************


/*
let val1 ; 
val1 = 5 ?? 10 
val1 = null ?? 10 

console.log(val1)


var1 = undefined ?? 15 

console.log(var1)


val2 = null ?? 10 ?? 20 
console.log(val2)
*/




// ******** Ternary Operator **********



// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")


