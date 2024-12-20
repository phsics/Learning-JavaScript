// Object represents the eventual completion of an asynchronous
// operation and its resulting value.
// Eventual completion object

// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "example.com"});
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             // there is no error
//             resolve({username: "rohan", password: "123"});
//         }
//         else{
//             // there is error
//             reject('ERROR: Something went wrong');
//         }
//     }, 1000);
// })

// promiseFour.
// then((user) => {
//     console.log(user);
//     return user.username;
// }).
// then((username) => {
//     console.log(username);
// }).
// catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"));

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "Rohan", scholarId: "2212174"});
//         }
//         else{
//             reject("Error! detected");
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }

// consumePromiseFive();

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("E: ", error);
//     }
// }

// getAllUsers();
 
// fetch('https://api.github.com/users/phsics').
// then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// }) 
// .catch((error) => console.log(error));

