// const user = {
//     username: "rohan",
//     loginCount: 10,
//     isLoggedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// }

// console.log(user.username);
// user.getUserDetails();

// Use of this keyword:- it helps to access the current context

// const user = {
//     username: "rohan",
//     loginCount: 10,
//     isLoggedIn: true,

//     getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
//     }
// }

// console.log(user.username);
// user.getUserDetails();

// new keyword: constructor function
// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

// const userOne = User("rohan", 12, true);
// const userTwo = User("ChaiAurCode", 11, false);

// If there is no new keyword used here then userTwo will overwrite the userOne
// And it will print the details of userTwo 
// console.log(userOne);

const userOne = new User("rohan", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
console.log(userTwo.constructor);