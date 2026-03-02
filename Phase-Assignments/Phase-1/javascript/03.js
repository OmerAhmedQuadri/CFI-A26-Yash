// Q No : 3
// Question: Write a function that prints multiplication table of a given number.
// (take user input for n)
// Example output if n = 3:
// 3 x 1 = 3
// 3 x 2 = 6
// .
// .
// 3 x 10 = 30
// Expected Output: 
// Enter the number to get multiplication table for: 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

import { question, questionInt } from "readline-sync";

let n = questionInt("Enter the number to get multiplication table for: ")

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n*i}`);
}