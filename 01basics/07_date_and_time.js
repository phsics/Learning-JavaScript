let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("01-14-2023");

// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// milliseconds value from 14 jan 2023 till now
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate);