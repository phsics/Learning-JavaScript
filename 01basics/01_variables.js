const accountId = 12345;
// accountId = 2 // not allowed
let accountEmail = "rohan@google.com";
var accountPassword = "98765";
let accountCity = "Bihar";
let accountState;
/*
    prefer not to use var because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

