import readlineSync from 'readline-sync'

let name = readlineSync.question("Enter your name: ")
let age = readlineSync.questionInt("Enter your age: ")
let company = readlineSync.question("Where do you work: ")

console.log(
    `Hii ${name}
Your age is: ${age}
    Your working at: ${company}
    `);
console.log(`Hello 
\b\bWorld`);//Only allowed by back tick`//\b doesnot go toupper line only backspace in the current line
