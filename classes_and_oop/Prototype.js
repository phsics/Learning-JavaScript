// let myName = "rohan        ";

// console.log(myName.trim().length);
// console.log(myName.trueLength);


let myHero = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// Rohan function is added to all objects by using Object.prototype.rohan
// By adding rohan to Object.prototype, we’ve made it a function that every object can use

Object.prototype.rohan = function(){
    console.log(`Rohan is present in all objects`);
}

Array.prototype.heyRohan = function(){
    console.log(`Rohan says hello`);
}
// heroPower.rohan();
// myHero.rohan();
// myHero.heyRohan();

// heroPower.heyRohan(); :- will give error because heyRohan function is not present in heroPower object

// inheritance

const User = {
    name: "chai",
    email: "rohan@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChairAurCode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"rohan".trueLength();
"samosa".trueLength();