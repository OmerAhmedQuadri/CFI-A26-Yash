// function getSum(num, sum = 0) {
//     if(num == 0)
//         return sum
//     // console.log(num);
//     // sum =sum + num
//     // return getSum(--num, sum)
//     return getSum(num-1, sum+num)
// }
// console.log(getSum(3));

function divide(a,b) {
    if(typeof a!= 'number' || typeof b != 'number') {
        console.error('Please enter an valid number');
        return 
    }
    if(b == 0) {
        console.error('Cannot divide by 0');
        return undefined
    }
    return a/b
}
let res = divide(1,'10d')
console.log(res);
