// Q No : 47
// Question:  Write a program to count frequency of each element and store in an
// object.
// Ex: ['a', 'b', 'a', 'c', 'b', 'a'] -> { a: 3, b: 2, c: 1 }
// Expected Output: ['a', 'b', 'a', 'c', 'b', 'a'] -> { a: 3, b: 2, c: 1 }

let arr = ['a', 'b', 'a', 'c', 'b', 'a']

let res = arr.reduce( (acc,crr) => {
    if(acc[crr]){
        acc[crr]++
    }
    else{
        acc[crr] = 1
    }
    return acc
}, {})

console.log(res);
