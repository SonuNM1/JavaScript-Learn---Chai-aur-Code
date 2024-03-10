const accountId = 144553 // cannot be changed
let accountEmail = "sonu@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi" // not recommended

let accountState ; 

// accountId = 2
accountEmail = "isonu@gmail.com"; 
accountPassword = "456"
accountCity = "bihar"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountCity, accountPassword, accountState])