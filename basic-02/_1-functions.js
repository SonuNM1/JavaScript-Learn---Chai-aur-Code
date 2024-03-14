
// function sayMyName() {
//     console.log("S")
//     console.log("O")
//     console.log("N")
//     console.log("U")
//     console.log("S")
//     console.log("N")
//     console.log("M")
// }

// sayMyName()


function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return number1 + number2
}

const result = addTwoNumbers(2, 3)
console.log(result);



function loginUserMessage(username = "User") {
    /*if(username === undefined){
        console.log("Please enter a username")
        return 
    }*/
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Sonu NM"))
console.log(loginUserMessage()) // no argument passed