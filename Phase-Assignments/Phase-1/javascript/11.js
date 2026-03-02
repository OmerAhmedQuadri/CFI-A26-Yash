// Q No : 11
// Question: Write a program that uses map() to multiply every number in an array
// by 10.
// Expected Output:
// Original array: [ 1, 2, 3, 4, 5 ]
// Multiplied array: [ 10, 20, 30, 40, 50 ] 

let arr = [1,2,3,4,5]

let newArr = arr.map( (ele) => {
    return ele*10
})

console.log('Original array:',arr);
console.log('Multiplied array:',newArr);
