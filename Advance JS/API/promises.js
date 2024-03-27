
const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, cryptogrpahy, network calls, file handling

    setTimeout(function () {
        console.log('Async task completed');
        resolve();
    }, 5000)

});

promiseOne.then(function () {
    console.log('promise consumed');
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(function () {
    console.log('Promise two resolved');
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" });
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "SonuNM", password: "123" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 2000);
})


const username = promiseFour.
    then((user) => {
        console.log(user);
        return user.username;
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => {
        console.log('The promise is either resolved or rejected');
    })

console.log(username);


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;

        if (!error) {
            resolve({ username: "Sonu N Mahto", password: "123" });
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


/*
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 

        // response.json() returns a promise, so you need to use 'await'

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('E: ' + error);
    }
}

getAllUsers(); 

*/


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json() ; 
})
.then((data)=>{
    console.log(data) ; 
})
.catch((error)=>{
    console.log(error) ;
})



