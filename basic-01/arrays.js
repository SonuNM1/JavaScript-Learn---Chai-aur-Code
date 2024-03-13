/*

const myArr = [0 , 1 ,  2, 3 , 4 , 5]


// shallow copy

// deep copy

 const myArr2 = new Array(1,2,3,4)

//  myArr.push(6)
//  myArr.push(7)
//  myArr.pop()

// myArr.unshift(9)
// myArr.shift()
//  console.log(myArr);

 console.log(`Does the array has 9 as an element? ${myArr.includes(9)}`);

 console.log(`Index of element 3 in the given array: ${myArr.indexOf(3)}`);


const newArr = myArr.join() // will insert the elements of previous element into the new one -> won't create array but a string/object

console.log(myArr)
console.log(newArr)

console.log(typeof newArr)
console.log(typeof myArr)

*/




// ******** slice , splice *******

// splice manipulates the original array, unlike slice

const myArr = [0 , 1 ,  2, 3 , 4 , 5]
console.log("Original array: " , myArr)

const myn1 = myArr.slice(1,3)
console.log("Slice array: " , myn1)
console.log("After slicing, original array: " , myArr)

console.log('\n')

const myn2 = myArr.splice(1,3)
console.log("Splice array: " , myn2)
console.log("After splice, original array: " , myArr)







