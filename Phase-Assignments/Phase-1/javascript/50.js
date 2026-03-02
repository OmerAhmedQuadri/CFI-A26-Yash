// Q No : 
// Question: Write a program to generate 10 random numbers in an Array (ranging
// from 1 to 100). After generating the 10 random numbers, find the Mean,
// Mode, and Median values of those Array elements.

// Sample Test Case 1 :
// Generated array:
// [ 84, 24, 5, 47, 8, 39, 10, 77, 1, 93 ]
// Mean: 38.80
// Mode: All values just appeared just once
// Median: 31.50

// Sample Test Case 2 :
// Generated array:
// [ 72, 68, 99, 44, 68, 52, 87, 97, 76, 73, ]
// Mean: 73.60
// Mode: 68
// Median: 72.50

// Expected Output: 

let arr = [];
let sum = 0;
let median;

for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor((Math.random() * 100) + 1);
    sum += arr[i];
}

arr.sort((a, b) => a - b);

console.log("Generated Array:", arr);

let mean = sum / arr.length;
console.log("Mean:", mean.toFixed(2));

if (arr.length % 2 === 0) {
    median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
} else {
    median = arr[Math.floor(arr.length / 2)];
}
console.log("Median:", median);

let freq = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

let maxFreq = Math.max(...Object.values(freq));

if (maxFreq === 1) {
    console.log("Mode: All values just appeared just once");
} else {
    let modes = Object.keys(freq).filter(num => freq[num] === maxFreq);
    console.log("Mode:", modes.join(", "));
}