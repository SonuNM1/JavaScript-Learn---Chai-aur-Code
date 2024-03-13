
// Singleton Object
// non-singleton object

// const tinderUser = new Object() -> Singleton object

/*
const tinderUser = {}  // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "SonuNM"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com" , 
    fullName : {
        userfullname : {
            firstname: "Sonu" , 
            lastname: "N Mahto"
        }
    }
}
/*
console.log(regularUser.fullName);
console.log(regularUser.fullName.userfullname);
console.log(regularUser.fullName.userfullname.firstname);
*/
// optional chaining - ?
/*
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2 , ...obj4} // spread operator 

console.log(obj3);

// array of objects 

const users = [
    {
        id: 1 ,
        email: "s@gmail.com"
    },
    {
        id: 1 ,
        email: "s@gmail.com"
    },
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('isLoggedIn'))


*/
// object destructuring 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course

// console.log(courseInstructor)

console.log(instructor)


/*
const navbar = ({company})=> {

}
navbar(company = "Sonu")
*/


// {
//     "name": "SonuNM" , 
//     "coursename": "js in hindi",
//     "price": "free"
// }


