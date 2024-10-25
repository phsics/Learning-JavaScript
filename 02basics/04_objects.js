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

// const obj3 = Object.assign({},obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"
    },
    {
        id: 3, 
        email: "3@gmail.com"
    }
]
// console.log(users[0].id);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor);
// course.courseInstructor is complex to write so:
//  Destructoring of object
const {courseInstructor: instructor} = course;
console.log(instructor);

// API: Application programming interface
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]