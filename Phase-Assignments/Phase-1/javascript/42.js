// Q No : 42
// Question: What are spread and rest operators? Explain their differences with examples.
// Expected Output: 

//spread
//denoted by ... is used to seperate elements from objects
//used on right hand side of operator

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); 


//rest
//denoted by ... as well used to merge remaining elements into an array or object
//used on left side of operator


let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

