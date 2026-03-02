// Q No : 25
// Question: Use .reduce() to find the sum of all elements in [2,4,6,8].
// Expected Output: 20

let arr = [2,4,6,8]

let res = arr.reduce( (acc, crr) => {
    return acc+=crr
},0)

console.log(res);
