// change the value of pi from 3.14.... to 4

// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI);

// const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    getComplement: function(){
        console.log("chai nahi bani");
    }
}
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name", {
    // writable: false,
    // enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`);
    }
}