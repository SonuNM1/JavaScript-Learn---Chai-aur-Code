
function multipleBy5(num){
    return num*5 ; 
}

multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5(5))


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype. 

The constructor is called : The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this 

*/