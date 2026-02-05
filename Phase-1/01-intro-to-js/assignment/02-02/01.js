//1
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }
//1
//2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//2
// for(let i =1; i <= 10; i++){
//     console.log(i);
// }

//3
// for (let i = 1; i <= 10; i++) {
//     if (!(i % 2)) {
//         console.log(i)
//     }
// }
// 2
// 4
// 6
// 8
// 10
//changes the false value to true and vice versa

//4
// for (let i = 1; i <= 10; i++)
//     if (!(i % 2)) {
//         console.log(i)
//         console.log('omer')
//     }
// 2
// omer
// 4
// omer
// 6
// omer
// 8
// omer
// 10
// omer

//1 line inside for loop that is if condition and condition has block considered aspart of if

//5
// for(let i = 1; i<=20; i+=2){
//     console.log(i);
// }

//6
// let max = 5

// for (let rows = 0; rows < max; rows++) {
//     let str = ''
//     for (let cols = 0; cols <= rows; cols++) {
//         str = str + rows + cols
//     }
//     console.log(str)
// }
// 00
// 10 11
// 20 21 22
// 30 31 32 33
// 40 41 42 43 44

//7
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log('omer')
//     }
// }
//6 times
//No of iteration in inner loop multipled by the no of interations in outer loop

//8
// for(let i =1; i<=5; i++){
//     let str = ''
//     for(let j=0; j<i;j++){
//         str=str+'* '
//     }
//     console.log(str);
// }

//9
// for(let i =1; i<=5; i++){
//     let str = ''
//     for(let j=1; j<i+1;j++){
//         str=str+j+' '
//     }
//     console.log(str);
// }

//10
// let rows = 4
// let cols = 5

// for (let i = 1; i <= rows; i++) {
//     let str = ''
//     for (let j = i; j <= cols + i - 1; j++) {
//         str = str + j + ' '
//     }
//     console.log(str)
// }
// 1 2 3 4 5 
// 2 3 4 5 6 
// 3 4 5 6 7 
// 4 5 6 7 8 

//11
// let arr = [23, 54, 98, 76]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
//23
// 54
// 98
// 76
//arr.lrngth=4

//12
// let arr = [23, 54, 98, 76, 10]
// let sum =0 
// for(let i = 0; i < arr.length; i++) {
//     sum=sum+arr[i]
// }
// console.log(sum);

//13
// let arr = [23, 54, 98, 76, 10, 45]

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }

//14
// let arr = [5, 10, 15, 20]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)
//50

//15
// let arr = ['Apple', 'Banana', 'Mango', 'Orange', 'Guava']

// for (let i = 0; i < arr.length; i++) {
//     console.log(`${i}: ${arr[i]}`);
// }

//16
// let matrix = [
//     [11, 22, 33],
//     [111, 222, 333, 444],
//     [1000, 2000, 3000]
// ]

// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i])
// }
// [ 11, 22, 33 ]
// [ 111, 222, 333, 444 ]
// [ 1000, 2000, 3000 ]

//17
// let matrix = [
//     [11, 22, 33],
//     [111, 222, 333, 444],
//     [1000, 2000, 3000]
// ]

// let sum = 0
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < 3; j++) {
//         sum = sum + matrix[i][j]
//         console.log(matrix[i][j])
//     }
// }
// console.log(sum)
// 11
// 22
// 33
// 111
// 222
// 333
// 1000
// 2000
// 3000
// 6732

//18
// let matrix = [
//     [11, 22, 33],
//     [111, 222, 333, 444],
//     [1000, 2000, 3000]
// ]

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < 3; j++) {
//         matrix[i][j] = matrix[i][j] * 10
//         console.log(matrix[i][j])
//     }
// }
// 110
// 220
// 330
// 1110
// 2220
// 3330
// 10000
// 20000
// 30000
//each element is multiplied by 10.. the original matrix is modified into this

//19
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j< arr[i].length; j++){
//     console.log(arr[i][j]);
//     sum = sum + arr[i][j]
//     }
// }
// console.log(sum)

//20
// let arr = [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80]
// ]

// for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j< arr[i].length; j++){
//         arr[i][j]*=2
//     }
// }
// console.log(arr);

//bonus 1
// while loop is majorly used when the end value or iteration is known and is an multi step implementation
//for loop is used when the number of iterations and end value is known it is an direct one step format

//bonus 2

// for(let i = 1; i<=5; i++){
//     let str = ''
//     for(let j = 5; j>=i; j--){
//         str = str + j + ' '
//     }
//     console.log(str);
// }

//bonus 3

// let numbers = [45, 23, 89, 12, 67, 34, 91, 56]
// let max = 0
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]>max){
//         max = numbers[i]
//     }
// }
// console.log(max);
