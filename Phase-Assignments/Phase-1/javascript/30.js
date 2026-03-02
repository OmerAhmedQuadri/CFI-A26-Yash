// Q No : 30
// Question: Write a recursive function to print numbers from 1 to 5.
// Expected Output: 
// 1
// 2
// 3
// 4
// 5

function printNums(num = 1) {
    if(num > 5)
        return
    console.log(num);
    printNums(num+1)
}

printNums(1)