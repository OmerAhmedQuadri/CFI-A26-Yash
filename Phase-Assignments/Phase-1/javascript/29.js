// Q No : 29
// Question: Write a program that uses Object.keys(), Object.values(),
// Object.entries() and prints each.
// Expected Output: 
// [ 'name', 'age', 'marks' ]
// [ 'Yashwanth', 21, 70 ]
// [ [ 'name', 'Yashwanth' ], [ 'age', 21 ], [ 'marks', 70 ] ]

let student = {
    name : 'Yashwanth',
    age : 21,
    marks : 70
}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
