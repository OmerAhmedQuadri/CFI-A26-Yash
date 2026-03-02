// Q No : 4
// Question:Write a program to print the following pattern.
// 10
// 10 20
// 10 20 30
// 10 20 30 40
// Expected Output: 
// 10
// 10 20
// 10 20 30
// 10 20 30 40

let str = ''
for (let i = 1; i < 5; i++) {
    str = str + i*10 + ' '
    console.log(str);
    
}