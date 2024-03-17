
/*
const myObject = {
    js: 'javascript' , 
    cpp: 'c++' , 
    rb: 'ruby' ,
    swift : 'swift by apple'
}


for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}
*/


/*
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
  console.log(programming[key])
}
*/



// *********** array of object *********



const myCoding = [
  {
    languageName: 'javascript',
    languageFileName: "js"
  },
  {
    languageName: "python",
    languageFileName: "py"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
]

// accessing the elements of array of objects

myCoding.forEach((item)=>{
  console.log(item);
})