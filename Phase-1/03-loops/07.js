import readline from 'readline-sync'
//*
//**
//***


let str = ''

let i = 1
let n = readline.questionInt("Enter a Number:")
while(i<=n) {
    str = str + '*'
    console.log(str);
    i++
}