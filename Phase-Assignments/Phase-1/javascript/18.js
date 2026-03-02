// Q No : 18
// Question: Use .filter() and return only positive elements in the array
// Ex: [10, -20, 30, 40, -1] -> [10, 30, 40]
// Expected Output: [ 10, -20, 30, 40, -1 ] -> [ 10, 30, 40 ]

let arr = [10, -20, 30, 40, -1]

let newArr = arr.filter( (ele) => {
    if (ele > 0) {
        return true
    }
})

console.log(arr,'->',newArr);
