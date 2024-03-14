
// Immediately Invoked Function Expressions (IIFE)


/*  normal function declaration

function chai(){
    console.log('DB Connected');
}

chai()
*/

// immediately invoked function

(function chai(){
    console.log('DB Connected');
})() ;

((name) => {
    console.log(`DB Connected Two ${name}`)
})('Sonu') ; 