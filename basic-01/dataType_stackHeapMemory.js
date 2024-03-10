// Stack (Primitive) -> call by value 

let myYoutubeName = "sonunmahto"
let anotherName = myYoutubeName 
anotherName = "Sonu NM"

console.log(myYoutubeName);
console.log(anotherName)


// Heap (Non-primitive / reference) -> call by reference


let user = {
    email : "user@gmail.com",
    upiId: "user@jdj"
}

let userTwo = user ; 

userTwo.email = "isonu@gmail.com"

console.log(user.email)
console.log(userTwo.email)
