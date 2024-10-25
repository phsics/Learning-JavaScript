// Singleton object
// const tinderUser = new Object();

// Non singleton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rohan",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"};
const obj2 = {3: "a",4: "b"};

// Combination of Two objects: 

// Not give the desired combined output
// const obj3 = {obj1, obj2};
// console.log(obj3);

// Correct way to combine two objects

const obj3 = Object.assign({},obj1, obj2);
console.log(obj3);

