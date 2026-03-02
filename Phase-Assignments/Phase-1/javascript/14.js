// Q No : 14
// Question: Write a function using reduce() to find the sum of all numbers in an
// array.
// Expected Output: [ 1, 2, 3, 4, 5 ] Sum of elements: 15

let arr = [1,2,3,4,5]

let res = arr.reduce( (acc,crr) => {
    return acc+=crr
},0)

console.log(arr,'Sum of elements:',res);
