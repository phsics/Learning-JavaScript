// JavaScript is a dynamically typed language, which means that data types of 
// variables are determined by the value they hold at runtime and can change 
// throughout the program as we assign different values to them.


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//  Stack (Primitive), Heap (Non-Primitive)

let myname = "Rohan Kumar";

let anothername = myname;
anothername = "Kalua";

console.log(myname);
console.log(anothername);

let user = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "rohan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// Stack:-

// userTwo -- it will access the heap memory in which email and upi are stored
// user    -- it will access the heap memory in which email and upi are stored
// myname   
// anothername
// myname

