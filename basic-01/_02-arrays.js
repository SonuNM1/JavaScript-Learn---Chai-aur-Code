/*
const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log("After pushing", marvel_heros);

// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

const allHeroes = marvel_heros.concat(dc_heros)

console.log("after concat: " , allHeroes);


/* 
push -> modifies the existing array

concat -> modifies the existing array, and also returns the new array, so need to store it
*/

/*
const all_new_heroes = [...marvel_heros , ...dc_heros]

console.log("Spread Operator functionality: " , all_new_heroes)
*/

// const nestedArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// console.log(nestedArray);

// const flatNestedArray = nestedArray.flat(Infinity)

// console.log(flatNestedArray)


console.log(Array.isArray("SonuNM"))
console.log(Array.from("SonuNM"))

console.log(Array.from({name: "SonuNM"})) // interview


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


// Array methods -> isArray() , from() , of()
