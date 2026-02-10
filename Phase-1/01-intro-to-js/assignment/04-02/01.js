// // //01
// // // function checkAge(age) {
// // //     if(age < 18)
// // //         return 'minor'
// // //     else if(age >= 18 && age < 65)
// // //         return 'adult'
// // //     else
// // //         return 'senior'
// // // }

// // // console.log(checkAge(90));

// // //02
// // // function greetUser(name) {
// // //     console.log(`Welcome, ${name}!`);
// // // }
// // //when returned the function when called returns (sends ) a value that can either be stored or printed but when log is used ut is only printed not stored

// // //03
// // // function multiply(a=10, b=10) {
// // //     return a*b
// // // }
// // // console.log(multiply(5));

// // //04
// // // function divide(a, b) {
// // //     if(typeof a !== 'number' || typeof b !== 'number')
// // //         return 'Invalid input'
// // //     if(b==0)
// //         // console.log('Cannot divide by zero');
// // //         return undefined
// // //     return a/b
// // // }
// // // console.log(divide(3,1));

// // //05
// // // function isValidInput(value) {
// // //     return Boolean(value)
// // // }
// // // console.log(isValidInput(0));

// // //06
// // function giveOdds(arr) {
// //     let arr2 = []
// //     if(Array.isArray(arr) == false)
// //         return []
// //     for(let i = 0; i < arr.length; i++){
// //         if(arr[i]%2==1){
// //             arr2.push(arr[i])
// //         }
// //     }
// //     return arr2
// // }
// // // console.log(giveOdds(2));

// // function giveEvens(arr) {
// //     let arr2 = []
// //     if(Array.isArray(arr) == false)
// //         return []
// //     for(let i = 0; i < arr.length; i++){
// //         if(arr[i]%2==0){
// //             arr2.push(arr[i])
// //         }
// //     }
// //     return arr2
// // }

// // //07
// // // function countOccurrences(arr, target) {
// // //     let count = 0
// // // if (!Array.isArray(arr)) return 0;

// // //     for (let i = 0; i < arr.length; i++) {
// // //         if(arr[i] == target)
// // //             count++
// // //     }
// // //     return count
// // // }

// // // console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2))

// // //08
// // // function filterGreaterThan(arr, threshold) {
// // // if (!Array.isArray(arr)) return 0;

// // //     let arr2 = []
// // //     for(let i = 0; i < arr.length; i++){
// // //         if(arr[i]>threshold){
// // //             arr2.push(arr[i])
// // //         }
// // //     }
// // //     return arr2
// // // }   
// // // console.log(filterGreaterThan([1,2,3,4,5,6,7,8,9,12,1,4,643,6],3));

// // //09
// // function sumArray(arr) {
// //     let sum = 0
// //     if(Array.isArray(arr) == false){
// //             console.log('Invalid input');
// //         return undefined}
// //     for(let i = 0; i < arr.length; i++){
// //         sum = sum + arr[i]
// //     }
// //     return sum    
// // }
// // // console.log(sumArray(2));

// // //10
// // function findMax(arr, ) {
// //     let max = arr[0]
// //     if(Array.isArray(arr) == false)
// //         return undefined
// //     for(let i = 0; i < arr.length; i++){
// //         if(arr[i]>=max)
// //             max = arr[i]
// //     }
// //     return max        
// // }
// // // console.log(findMax([1,2,3,4,5,6,7,,8,,9]));
// // function findMin(arr,min = 0) {
// //     if(Array.isArray(arr) == false)
// //         return undefined
// //     for(let i = 0; i < arr.length; i++){
// //         if(arr[i]<=min)
// //             min = arr[i]
// //     }
// //     return min        
// // }
// // function findAvg(arr, avg = 0) {
// //     if(Array.isArray(arr) == false)
// //         return undefined
// //     for(let i = 0; i < arr.length; i++){
// //         avg = avg + arr[i]
// //     }
// //     return avg/arr.length       
// // }

// // //11
// // // function isPerfect(num) {
// // //     let sum = 0
// // //     for (let i = 1; i < num; i++) {
// // //         if(num%i==0){
// // //             sum = sum + i
// // //         }
// // //     }
// // //     if(sum == num)
// // //         return 'Perfect Number'
// // //     return 'Not Perfect Number'
// // // }
// // // console.log(isPerfect(6));
// // // console.log(isPerfect(27));
// // // console.log(isPerfect(28));

// // //12
// // // function isArmstrong(num) {
// // //     let temp = num
// // //     let arr = []
// // //     let i = 0
// // //     let sum = 0
// // //     while(num > 0){
// // //         arr[i]=num%10
// // //         i++
// // //         num = Math.trunc(num/10)
// // //     }
// // //     for (let j = 0; j < arr.length; j++) {
// // //         sum = sum + Math.pow(arr[j],arr.length)
// // //     }
// // //     if(sum == temp)
// // //         return 'Armstrong Number'
// // //     return 'Not an Armstrong Number'
// // // }
// // // console.log(isArmstrong(153));
// // // console.log(isArmstrong(151));

// // //13
// // function primesInRange(start, end) {
// //     let arr = []

// //     for (let i = start; i <= end; i++) {
// //         if (i < 2) continue

// //         let isPrime = true
// //         for (let j = 2; j <= Math.sqrt(i); j++) {
// //             if (i % j === 0) {
// //                 isPrime = false
// //                 break
// //             }
// //         }

// //         if (isPrime)
// //             arr.push(i)
// //     }
// //     return arr
// // }

// // // console.log(primesInRange(-2, 11))

// // //14
function sumOfDigits(num) {
    // let temp = num
    // let arr = []
    // let i = 0
    let sum = 0
    while(num > 0){
        // arr[i]=num%10
        // i++
        sum = sum + (num%10)
        num = Math.trunc(num/10)
    }
    // for (let j = 0; j < arr.length; j++) {
    // }
    return sum
}
console.log(sumOfDigits(789));

// // //15
// // // function sumOfDigits(num) {
// // //     let temp = num
// // //     let arr = []
// // //     let i = 0
// // //     let sum = 0
// // //     while(num > 0){
// // //         arr[i]=num%10
// // //         i++
// // //         num = Math.trunc(num/10)
// // //     }
// // //     for (let j = 0; j < arr.length; j++) {
// // //         sum = sum*10 + arr[j]
// // //     }
// // //     return sum
// // // }
// // // console.log(sumOfDigits(15323));
// // // console.log(sumOfDigits(151324));

// // //16
// function fibonacci(n,i =0,a=0,b=1,c=a+b) {
//     if (a == 0 && b == 1) {
//         console.log(a);
//         console.log(b);
//     }
//     if(i==n-2){
//         return 
        
//     }
//     c=a+b
//     console.log(c);
//     return fibonacci(n,++i,b,c,c,)
// }
// // // fibonacci(6)
// // // function fibonacci(n,i =0,a=0,b=1,c=a+b, arr= []) {
// // //     if (a == 0 && b == 1) {
// // //         arr[0]=a
// // //         arr[1]=b
// // //     }
// // //     if(i==n-2){
// // //         return arr
        
// // //     }
// // //     c=a+b
// // //     arr.push(c)
// // //     a=b
// // //     b=c
// // //     return fibonacci(n,++i,a,b,c,arr)
// // // }
// // // console.log(fibonacci(5));

// // //17
// // // function sumNatural(n,sum = 0) {
// // //     if(n == 0)
// // //         return sum

// // //     return sumNatural(n-1,sum+n)
// // // }
// // // console.log(sumNatural(5));

// // //18
// // // function power(base, exponent) {
// // //   if (exponent === 0) {
// // //     return 1;
// // //   } else {
// // //     return base * power(base, exponent - 1);
// // //   }
// // // }

// // // console.log(power(2, 3)); 

// // //19\
// // // function countDown(num) {
// // //     if(num == 1){
// // //         console.log(num);
// // //         return
// // //     }
// // //     console.log(num);
// // //     return countDown(num-1)
// // // }
// // // countDown(10)

// // //20
// // // function sumArray(arr,sum =0) {
// // //     if(Array.isArray(arr)==false)
// // //         return undefined
// // //     if(arr.length == 0)
// // //         return sum
// // //     return sumArray(arr, sum+arr.shift())
// // // }

// // // console.log(sumArray([1,2,3,4,5]));

// // //21
// // function analyzeArray(arr) {
    
// //     let min = findMin(arr)
// //     let max = findMax(arr)
// //     return {
// //         evenCount: giveEvens(arr),
// //         oddCount: giveOdds(arr),
// //         primes: primesInRange(min,max),
// //         sum: sumArray(arr),
// //         max: findMax(arr),
// //         min: findMin(arr),
// //         avg: findAvg(arr)
// //     }
// // }

// // console.log(analyzeArray([1,2,3,4,5,6,7]));




// function fibonacci(num,a=0,b=1){
//     if(a == 0 && b == 1){
//         console.log(a);
//         console.log(b);
//     }

//     if(num-2 == 0)
//         return

//     let c = a + b
//     console.log(c);

    
//     return fibonacci(num - 1, b, c )
// }

// console.log(fibonacci(10));
