// Q No : 22
// Question: Write a program to find the average of numbers in an array.
// Expected Output: 2

let arr = [1,2,3]

let res = arr.reduce( (acc, crr) => {
    return acc+=crr
},0)

let avg = res/arr.length

console.log(avg);
