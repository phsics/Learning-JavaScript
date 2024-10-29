const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// })

// forEach loop will not return anything
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => (num > 4));
// or
// const newNums = myNums.filter( (nums) => {
//     return nums > 4;
// } );

// console.log(newNums);

const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008
    },
    {
        title: 'Book Three', genre: 'History', publish: 1999, edition: 2007
    }
];

let userBooks = books.filter( (bk) =>  bk.genre === 'History');

userBooks = books.filter( (bk) => (bk.edition >= 2000) );
console.log(userBooks);


