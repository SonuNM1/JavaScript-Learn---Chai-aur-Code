// singleton 

// object literals

// Object.create -> constructor method to create objects 


const mySym = Symbol("key1")

const jsUser = {
    name: "SonuNM" , 
    "full name" : "Sonu N Mahto" ,
    [mySym] : "mykey1", 
    age: 23 , 
    location : "delhi" , 
    email : "isonu@gmail.com" , 
    isLoggedIn : false ,
    lastLogInDays : ["Monday" , "Saturday"]
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);

console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email = "sonu.mahto362000@gmail.com"

// Object.freeze(jsUser)

jsUser.email = "sonu.mahto362000@microsoftgmail.com"

console.log(jsUser)



jsUser.greeting = function(){
    console.log("Hello JS User")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`)
}

console.log(jsUser.greeting)
console.log(jsUser.greetingTwo)

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())