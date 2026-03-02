// Q No : 32
// Question:   What is the output of the following code, explain why.
const arr = [1, 2, 3]
const arr2 = arr
arr2.push(4)
clg(arr)
clg(arr2)

// Expected Output:  
// [1, 2, 3, 4]
// // [1, 2, 3, 4]

//They share the share memory block that is reference to the memory