

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)

console.log(Math.PI)

const chai = {
    name: 'ginger chai',
    price: 250 ,
    isAvailable: true 
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false 
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))