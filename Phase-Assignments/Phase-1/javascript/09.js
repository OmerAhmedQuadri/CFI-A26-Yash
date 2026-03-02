// Q No : 9
// Question: Write a function minOf(arr) that takes an array of numbers and returns
// the smallest number in the array.
// Expected Output: 1

function minOf(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

console.log(minOf([5,4,3,2,1]));
