// const arr = [22,54,97,33,2,8,undefined]

// let newArr = arr.filter((ele) => {
//     console.log(ele);
//     if(ele%2 == 0)
//         return true
// })
//or

// let newArr = arr.filter(ele => ele%2==0 ? true : 0)
// console.log(newArr);

let arr = [22,55,1,76,9,10,32,0]

// let newArr = arr.filter((ele) => {
//     return ele <= 10
// })

let newArr = arr.filter(ele => ele <= 10 ? true : 0)

console.log(newArr);
