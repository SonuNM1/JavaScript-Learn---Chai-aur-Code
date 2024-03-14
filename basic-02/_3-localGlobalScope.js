
// if(true){
//     let a = 10 
//     const b = 20 
//     var c = 30 
// }

// console.log(a);
// console.log(b);
// console.log(c);

/*
function one(){
    const username = "Sonu NM"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    // two()
}
one()


if(true){
    const username = "sonu"
    if(username === "sonu"){
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website)
    // console.log(username)
}
console.log(username)
*/





// ******** INTERESTING (hoisting) ***********


console.log(addOne(5))

function addOne(num){
    return num+1
}


console.log(addtwo(5))

const addtwo = function (num) {
    return num+2
}


