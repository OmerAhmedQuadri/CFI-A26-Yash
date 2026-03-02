// Q No : 49
// Question: Write a program to find the largest and the smallest number in an
// array (both with and without sorting).
// Ex: [3, 1, 9, 4, 7] → 1, 9
// Expected Output: [3, 1, 9, 4, 7] → 1, 9

let arr = [3, 1, 9, 4, 7] 
let arr2 = [...arr]
// let min = arr[0]
// let max = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>max)
//         max = arr[i]
//     if(arr[i]<min)
//         min = arr[i]
// }

// console.log(arr,'→',min+',',max);

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i]>arr[j]){
            let temp = arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr2,'→',arr[0]+',',arr[arr.length-1]);
