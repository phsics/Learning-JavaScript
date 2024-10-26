// Immediately Invoked Function Expressions (IIFE)
// Problem occur due to pollution of global scope
// IIFE solves this problem
// These functions are to be ended by semicolon because they don't know where to end


(function chai(){
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("rohan");

