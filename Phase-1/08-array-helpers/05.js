const arr = [22,54,97,33,2,8,undefined]

// arr.map(() => {
//     return 1
// })

// console.log(arr);



// let arr2 = arr.map((ele) => {
//     return ele*2
// })
// console.log(arr);
// console.log(arr2);

//map is basically is trigering each index and element and write a functionor give the input type and modify itdo what you want

// let newArr = arr.map((ele, i) => {
//     // console.log(ele, i);
//     // return arr[i]*ele
//     return ele, i
// })

// console.log(newArr);

// let newArr = arr.map((e, i) => {
//     if(e%2 == 0)
//         return e
//     else
//         return i--
// })
// console.log(newArr);

// let newArr = arr.filter((ele) => {
//     console.log(ele);
//     if(ele%2 == 0)
//         return true
// })
//or

let newArr = arr.filter(ele => ele%2==0 ? true : 0)
console.log(newArr);
