// object literals

const mySym = Symbol("key1");
// console.log(mySym);

const JsUser = {
    name: "Rohan",
    age: 19,
    location: "Bihar",
    [mySym]: "mykey1",
    email: "rohan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser["email"] = "rohan@amazon.com";
// Object.freeze(JsUser);
// JsUser.email = "rohan@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

