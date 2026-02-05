//write a program to calculate the factorial of the give number using recursivefunction

function getFactorial(num) {
    if(num<0)
        return 'Invalid'
    if(num == 1 || num == 0)
        return 1
    // console.log1(num);
    
    return num * getFactorial(--num)
}
console.log(getFactorial(6))

// function digits(num, i) {
//     if(num<=0)
//         return i

//     // console.log(num);
//     return digits(Math.trunc(num/10), ++i)
// }
// console.log(digits(133,0));
