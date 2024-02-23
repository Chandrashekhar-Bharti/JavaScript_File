const user = {
    username: "shekhar",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // here has current context is shekhar so using this keyword you can access the username 

        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam" // here change the username 
// user.welcomeMessage()

// console.log(this);

// function chat(){
//     let username = "sammy"
//     console.log(this.username);
// }

// chat()

// const chat = function () {
//     let username = "hitesh"
//     console.log(this.username); // is get Undefined because this keyword used in method not function

// }


// Arrow function
// const chat =  () => {
//     let username = "hitesh"
//     console.log(this);
// }// in arrow function ths keyword is get empty object

// chat()


/*
//these are basic type of arrow()
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
*/


// this type is implicity type not use the curly brases
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = () => ({username: "shekhar"}) // return object so uses curly brases


console.log(addTwo())


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()