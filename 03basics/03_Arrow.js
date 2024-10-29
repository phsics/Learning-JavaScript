
// "this" is a global object

// const user = {
//     username: "rohan",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage();
// user["username"] = "abhishek";
// user.welcomeMessage();
// you accessing this globally so it will print {} i.e. empty object
// console.log(this);


// function chai(){
    // we can't access username using this in a function, this work 
    // for only object
    // let username = "rohan";
    // console.log(this.username);
// }
// chai();

// Arrow function: 

// const chai = () => {
    
//     let username = "rohan";
//     console.log(this);
// }

// chai();

// () => {}

// Basic arrow function:

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit function

// const addTwo = (num1, num2) => (num1 + num2);

// console.log(addTwo(2,3));

// we shall have to use brackets if we don't want to write return

const user = () => ({username: "rohan"});
console.log(user());