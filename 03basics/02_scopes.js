// Scope:

// let a = 300;
// if(true){
//     let a = 10;
//     const b = 20;
//     console.log("Inner: ",a);
// }

// console.log("Outer", a);

// Nested scope
function one(){
    const username = "rohan";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
// untill or unless one is not called how can two be called
// one();

// ++++++++++++++++ interesting +++++++++++++++
// addTwo is a variable or expression which holds the function
// we can't access addTwo before initialization 
// addTwo(4) => will give error

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));

