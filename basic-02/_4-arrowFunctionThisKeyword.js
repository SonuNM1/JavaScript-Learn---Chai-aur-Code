/*
const user = {
    username: "SonuNM", 
    price: 999, 

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sonu N Mahto"
// user.welcomeMessage()


console.log(this)
*/


/*
function chai(){
    console.log(this)
}

chai()
*/

/*
const chai = function(){
    let username = "Sonu NM"
    console.log(this.username);
}

chai()


const chai = () => {
    let username = "Sonu NM"
    console.log(this.username); // username vs this.username
}

chai()
*/



// Implicit return vs explicit return



/*
const addTwo = (num1, num2) => (num1 + num2)
console.log(addtwo(3,4))
*/


const addTwo = (num1, num2) => ({username: "SonuNM"})

console.log(addTwo(2,3));





