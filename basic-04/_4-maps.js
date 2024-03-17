

// unique values + follow insertion order

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-' , value)
}