const name = "rohan";
const repoCount = 50;

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and  my repo count is ${repoCount}`);

const gameName = new String('rohan-kumar');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.group(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,4);
// console.log(newString);

// const anotherString = gameName.slice(-8,4);
// console.log(anotherString);

// const newStringOne = "      rohan        ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://rohan.com/rohan%20kumar";
console.log(url);
// any space is considered as %20 to browser
//  How to remove it??
// use replace here

const get = url.replace("%20"," ");
console.log(get);

console.log(url.includes('rohan'));
console.log(gameName.split('-'));