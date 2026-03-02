// Q No : 2
// Question: Write a program that prints the sum of numbers from 1 to N (take N as input).
// Expected Output: Sum of 1 to 5 : 15

let N = 5
let sum = 0

for (let i = 1; i <= N; i++) {
    sum = sum + i    
}

console.log(`Sum of 1 to ${N} : ${sum}`);
