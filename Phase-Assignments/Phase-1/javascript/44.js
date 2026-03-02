// Q No : 
// Question: What is the output of this code and why?
// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// Expected Output: 

console.log([] + []);//considers both as empty string
console.log([] + {});//empty string + object
console.log({} + []);//object + empty string
//
// [object Object]
// [object Object]