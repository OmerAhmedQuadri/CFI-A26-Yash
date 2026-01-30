//write a program to aceess and print alll the elements of the array
let number = [23, 55, 64, 33, 54, 99, 58]
let i=0, res

// while (i<number.length) {
//     res = number[i]
//     console.log(res);
//     i++
// // }
// while (i<number.length) {
//     number[i]=0
//     // console.log(res);
//     i++
// }
// console.log(number);

//wap to access and double each element and store it in the same position
while (i<number.length) {
    number[i]*=2
    // console.log(res);
    i++
}
console.log(number);

