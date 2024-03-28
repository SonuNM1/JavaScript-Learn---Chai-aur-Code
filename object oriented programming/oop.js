

                            // OBJECT LITERAL

/*


const user = {
    username : "SonuNM", 
    loginCount : 8 , 
    signedIn : true ,

    getUserDetails: function(){
        console.log('Got user details from database') ; 
        // return 'User details retrieved' ; 
        // console.log(`username: ${this.username}`) ;
        // console.log(this) ; 
    }
}

console.log(user.username)
// console.log(user.getUserDetails())
user.getUserDetails() ; 
console.log(this)

*/


                                    // CONSTRUCTOR FUNCTION




// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount, isLoggedIn){
    // lhs -> variable rhs -> value that you are passing
    this.username = username ; 
    this.loginCount = loginCount ; 
    this.isLoggedIn = isLoggedIn ;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`) ; 
    }

    // return this ; (implictly defined)
}

const userOne = new User('SonuNM', 12, true)
const userTwo = new User('Chai aur code', 11, true)

console.log(userOne.constructor)
console.log(userTwo)


                   