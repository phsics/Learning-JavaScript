const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// for in loop is used to iterate over myObject

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["js", "rb", "py","java", "cpp"];
// for in me array ka keys index hota h

// for (const key in programming) {
//     console.log(programming[key]);
// }

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

//  it will not work

// for(const key in map){
//     console.log(key);
// }