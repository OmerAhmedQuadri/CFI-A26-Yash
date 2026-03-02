// Q No : 10
// Question: Write a function that finds the factorial of a number using:
// ➔ Recursion
// ➔ For loop
// Expected Output: 120

//recursion

// function factorial(num) {
//     if (num < 0) {
//         return 'no factorial'
//     }
//     if(num == 0 || num == 1)
//         return 1

//     return num*factorial(num-1)
// }

// console.log(factorial(5));


//for loop

function factorial(num) {
    if (num < 0) {
        return 'no factorial'
    }
    if(num == 0 || num == 1)
        return 1
    let fact = 1
    for (let i = 2; i <= num; i++) {
        fact = fact*i
    }
    return fact
}

console.log(factorial(-1));
