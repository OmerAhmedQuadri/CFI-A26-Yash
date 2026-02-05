//Wap to create a function that takes n and prints numbers from 1 to n
import readlineSync from 'readline-sync'

let n = readlineSync.questionInt("Enter a Number: ")

// printNumbers(n) can call above using function not variable

// function printNumbers(n) {
//     for(let i = 1; i <= n; i++)
//         console.log(i);
// }

let printNumbers=function(n) {
    for(let i = 1; i <= n; i++)
        console.log(i);
}
console.log(typeof(printNumbers));

// console.log(printNumbers(n));
// console.log(printNumbers());

printNumbers(n)


// console.log();
// console.log(printNumbers);
// console.log();
// printNumbers(3)
// console.log();
// printNumbers('5')

// console.log('10'==10);
// console.log('10'===10);
// console.log(10=='10');
// console.log(10<='10');
