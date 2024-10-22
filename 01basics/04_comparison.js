console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);

// Comparisons convert null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false.
console.log(null >= 0);

// strict check '===' 
// it compare the value as well as check the datatype

console.log("2" === 2);
