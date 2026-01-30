//wap to print elements in reverse order
let number = [23, 55, 64, 33, 54, 99, 58]
let i=number.length-1, res = []

while (i>=0) {
    // console.log(number[i]);
    
    res.push(number[i])
    i--
}
console.log(res);

console.log(number);

let num = [1,2,3]
num.reverse()
console.log(num);
