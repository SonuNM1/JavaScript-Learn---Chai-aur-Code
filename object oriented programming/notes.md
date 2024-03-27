
# JavaScript and Classes

javascript : prototype-based language

## OOP - Programming paradigm/style

#### Object 
- collection of properties and methods 
- toLowerCase, Promises


## Why use OOP ?

## Parts of OOP

Object literal

- Constructor function
- Prototypes 
- Classes
- Instances (new, this keyword)


## 4 pillars 

- Abstraction (hide details) - eg: fetch (hides the network calls and complexities)

- Encapsulation : wrap up the data (method, variable)

- Inheritance : code reusability 

- Polymorphism : ek method, multiple kaam



<!-- In your code, you're getting `undefined` as output because the `getUserDetails` function doesn't explicitly return anything. In JavaScript, if a function doesn't have a `return` statement, it implicitly returns `undefined`.

To remove the `undefined` output, you have two options:

1. **Explicitly return a value from the `getUserDetails` function**:
   
    ```javascript
    const user = {
        username: "SonuNM",
        loginCount: 8,
        signedIn: true,

        getUserDetails: function() {
            console.log('Got user details from database');
            return 'User details retrieved'; // Return a value
        }
    }

    console.log(user.username);
    console.log(user.getUserDetails());
    ```

    Now, when you call `user.getUserDetails()`, it will return the string `'User details retrieved'`, and you won't get `undefined` as output.

2. **Just call the `getUserDetails` function without logging its result**:
   
    ```javascript
    const user = {
        username: "SonuNM",
        loginCount: 8,
        signedIn: true,

        getUserDetails: function() {
            console.log('Got user details from database');
        }
    }

    console.log(user.username);
    user.getUserDetails(); // Just call the function, don't log its result
    ```

    Since you're not interested in the return value of `getUserDetails`, you can simply call the function without logging its result, and you won't see `undefined` in the output.

Choose the option that best fits your requirements. If you need the `getUserDetails` function to return some value, use the first option. If you don't need to capture the return value, use the second option. -->
