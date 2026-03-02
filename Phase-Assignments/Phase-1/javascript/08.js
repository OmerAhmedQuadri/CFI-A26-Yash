// Q No : 8
// Question: Create a function sumOfArray(arr) that takes an array of numbers and
// returns the sum of the elements of the array.
// Expected Output: 15

function sumOfArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

console.log(sumOfArray([1,2,3,4,5]));
