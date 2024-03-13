const name = "Sonu"
const repoCount = 20 

// console.log(name + repoCount + " Value ")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const fullName = new String ("Sonu NM")

// console.log(fullName[0])
// console.log(fullName.__proto__)

// console.log(fullName.charAt(1))
// console.log(fullName.indexOf('S'))


const newString = fullName.substring(0,4)
console.log(newString)

const anotherString = fullName.slice(-5,4)
console.log(anotherString)


console.log(fullName.includes('NM')) // includes -> returns boolean value


console.log(fullName.split(' ')) // convert to array 