// Q No : 5
// Question:  Write a program to print numbers from 1 to 30 but skips multiples of 3
// using continue.
// Ex:
// 1 2 4 5 7 8 10 11 13 .29
// Expected Output: 1 2 4 5 7 8 10 11 13 14 16 17 19 20 22 23 25 26 28 29 

let str = ''
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) continue
    str = str + i + ' '
}

console.log(str);
