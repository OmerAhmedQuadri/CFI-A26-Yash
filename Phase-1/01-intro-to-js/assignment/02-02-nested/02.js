// import readlineSync from 'readline-sync'

// let num = readlineSync.questionInt("Enter the number:")

// let i = 1,count=0, n=-1
// let x=num
// // while (i<=x) {
    
// //     if(x/5){
// //         n++
// //         x=Math.floor(x/5)
// //     }
// //     i++
// // }
// // while (i<=num) {
// //     let j = 0
// //     while(i%5==0){
// //         count++
// //     }
// //     i++
// // }
// // console.log(count);
// // console.log(n);










// // while (i<=num) {
// //     if(i%5==0){
// //         count++
// //     }
// //     i++
// // }
// // console.log("The number of zeros is:",count);


// // i = 1;
// // let fact = 1n; // BigInt

// // while (i <= num) {
// //     fact = fact * BigInt(i);
// //     console.log(`${i}! = ${fact}`);
// //     i++;
// // }

let i = 1
let num = 25
let count = 0

while(i<=num){
    let temp = i
        
    while(temp%5==0){
        temp = Math.trunc(temp/5)
        count++
    }
    i++
}
console.log(count)