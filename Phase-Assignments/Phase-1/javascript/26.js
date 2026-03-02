// Q No : 26
// Question: Explain .find() and .findIndex() with examples
// Expected Output:  
// 4
// 3

let arr = [1,2,3,4,5]

//.find() returns the first element ocurance that satifies the conditon return type is boolean
let res = arr.find( (ele) => {
    return ele>3
})
console.log(res);

//.findIndex() returns the first index ocurance that satifies the conditon return type is boolean
let res2 = arr.findIndex( (ele) => {
    return ele>3
})
console.log(res2);
