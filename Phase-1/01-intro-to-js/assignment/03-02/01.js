//1
// function sayHello(name) {
//     console.log('Hello ' + name)
// }

// sayHello('omer')
// sayHello('taha')
// sayHello('maseeh')
//Hello omer
//Hello taha
//Hello maseeh

//2
// function greet(name) {
//     console.log('Welcome ' + name+'!')
// }

// greet('Omer')
// greet('Ali')
// greet('Sara')

//3
// console.log(sayHello)

// function sayHello(name) {
//     console.log('Hello ' + name)
// }
//[Function: sayHello]
//This happens as we are not calling the function instead we are trying to print the variable sayHello it return function with name

//4
// function printMessage () {
//     for (let i = 0; i < 3; i++) {
//         console.log("JavaScript is awesome!");
//     }
// }

// printMessage()

//5
// function displayInfo(name, age, city) {
//     console.log('Name:', name)
//     console.log('Age:', age)
//     console.log('City:', city)
// }

// displayInfo('Omer', 25, 'Hyderabad')
// Name: Omer
// Age: 25
// City: Hyderabad

//6
// function introduce (name, age, profession) {
//     console.log(`Hi, I am ${name}, I am ${age} years old and I am a ${profession}`)
// }

// introduce('Omer', 25, 'Developer')

//7

// let sayHello = function(name) {
    //     console.log('Hello ' + name)
    // }
    // sayHello('Omer')
//Here function is declared as an variable so when in such initilization we can only call the function after it is defined and not before that unlike a direct function

//8
// function multiply (a=10,b=10) {
//     console.log(a*b);
// }

// multiply(5,4)
// multiply(10,3)
// multiply(7,8)
// multiply()

//9
// let printNumbers = function(max) {
//     for (let i = 1; i <= max; i++) {
//         console.log(i)
//     }
// }

// printNumbers(10)
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//10
// let greet = function(name) {
//     console.log('Hello ' + name)
// }

//11
// // Version 1
// function add(a, b) {
//     console.log(a + b)
// }

// // Version 2
// let add = function(a, b) {
//     console.log(a + b)
// }
//both accept and return the same output but one is is direct declaration AND THE OTHER IS DECLARED AS AN VARIABLE

//12
// function printEven (n=10) {
//     for (let i = 0; i < n; i+=2) {
//         console.log(i);
//     }
// }
// printEven(20)

//13
// let calculate = function(a, b) {
//     console.log('Sum:', a + b)
//     console.log('Product:', a * b)
// }

// calculate(5, 3)
// Sum: 8
// Product: 15

//14
// function printPattern (n=4) {
//     for (let i = 0; i < n; i++) {
//         let str = ''
//         for (let j = 0; j <= i; j++) {
//             str = str + '* '            
//         }        
//         console.log(str);
//     }
// }
// printPattern(4)

//15
// function sum(a = 10, b = 20) {
//     console.log('code before return statement')
//     return a + b
//     console.log('code after return statement')
// }

// console.log('code before function call')
// console.log(sum(5))
// console.log('code after function call')
// code before function call
// code before return statement
// 25
// code after function call
//at return it acts like break and the function is end there and further lines are not executed

//16
// Function 1
// function add1(a, b) {
//     console.log(a + b)
// }

// Function 2
// function add2(a, b) {
//     return a + b
// }

// let result1 = add1(10, 20)
// let result2 = add2(10, 20)

// console.log(result1)
// console.log(result2)
//result 1 when executed prints the output but them result1 is printed it is undefined and result2 return that meets it store the return value in it and prints when it is called

//17
// function getMax (a=5, b=4) {
//     if(a>b)
//         return a
//     else
//         return b
// }

// console.log(getMax(10, 20))
// console.log(getMax(50, 30))

//18
// function multiply(a, b) {
//     return a * b
// }

// let result = multiply(5, 4)
// console.log(result)
// console.log(multiply(10, 3))
//20
//30

//19
// function calculateArea (l=5,w=10) {
//     return l*w
// }
// let area = calculateArea(10, 5)
// console.log('Area:', area) 

// 20
// function checkAge(age) {
//     if (age >= 18) {
//         return 'Adult'
//     } else {
//         return 'Minor'
//     }
// }

// console.log(checkAge(25))
// console.log(checkAge(15))
// Adult
// Minor

//21
// function isEven (n=2) {
//     if (n%2==0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isEven(10))
// console.log(isEven(7))

//22
// function calculateGrade (marks) {
//     if (marks >= 90) {
//         return 'A'        
//     } else if (marks >= 80) {
//         return 'B'
//     } else if (marks >= 70) {
//         return 'C'
//     } else if (marks >= 60) {
//         return 'D'
//     } else{
//         return 'F'
//     }
// }
// console.log(calculateGrade(95))  // A
// console.log(calculateGrade(75))  // C
// console.log(calculateGrade(55))  // F

//23
// function sum(a = 10, b = 20) {
//     return a + b
// }

// console.log(sum(5, 15))
// console.log(sum(5))
// console.log(sum())
// 20
// 25
// 30
//As we have give default values as 10 and 20 that are defined for the variable and when give cutom numbers are defined to th variables 

//24
// function greet (name = 'Guest') {
//     console.log("Hello",name);
// }
// greet('Omer')  // Hello Omer
// greet()        // Hello Guest

//25
// function calculatePrice (price = 0, discount = 0) {
//     return price * (1 - discount / 100)
// }
// console.log(calculatePrice(1000, 10))  // 900
// console.log(calculatePrice(1000))      // 1000

//26
// function introduce(name = 'Anonymous', age = 0, city = 'Unknown') {
//     console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
// }

// introduce('Omer', 25, 'Hyderabad')
// introduce('Ali', 22)
// introduce('Sara')
// introduce()
// Name: Omer, Age: 25, City: Hyderabad
// Name: Ali, Age: 22, City: Unknown
// Name: Sara, Age: 0, City: Unknown
// Name: Anonymous, Age: 0, City: Unknown

//27
// import readlineSync from 'readline-sync'

// function userDetails() {
//     let username = readlineSync.question('Enter username: ')
//     let userrole = readlineSync.question('Enter the user role: ')
    
//     return {username, userrole}
// }

// let user = userDetails()
// console.log(user)
// Enter username: Omer
// Enter the user role: Admin
// { username: 'Omer', userrole: 'Admin' }

//28
// import readlineSync from 'readline-sync'

// function getAge () {
//     let age = readlineSync.questionInt("Enter your age:")
//     return age
// }

// let a = getAge()
// console.log(a);

//29
// import readlineSync from 'readline-sync'

// function login () {
//     let username = readlineSync.question("Enter your username: ")
//     let password = readlineSync.question("Enter your password: ")
//     if(username == "admin" && password == '1234')
//         return "Login successful"
//     else
//         return "Invalid credentials"
// }

// let log_in = login()
// console.log(log_in);

//30
// import readlineSync from 'readline-sync'
// function calculator (op='+',a=1,b=1) {
//     a = readlineSync.questionInt("Enter first number:")
//     b = readlineSync.questionInt("Enter second number:")
//     op = readlineSync.question("Enter operation (+, -, *, /):")

//     if (op == '+') {
//         return a+b
//     } else if (op == '-') {
//         return a-b
//     } else if (op == '*') {
//         return a*b
//     } else if (op == '/') {
//         return a/b
//     } else {
//         return 'Invalid Option'
//     }
// }
// let res = calculator()
// console.log(res);

//Bonus 1 
// function sumArray (arr=[1,1,1,1,1]) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum
// }
// let numbers = [10, 20, 30, 40]
// console.log(sumArray(numbers))  // 100

//Bonus2
// function findLargest (arr=[1,2,3,4,5]) {
//     let max = 0
//     for( let i = 0; i< arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// let numbers = [45, 23, 89, 12, 67]
// console.log(findLargest(numbers))  // 89

//Bonus 3
function isPrime(n = 10) {
    if (n <= 1) return 'Not a prime number'

    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return 'Not a prime number'
    }
    return 'It is a prime number'
}

console.log(isPrime(7))
console.log(isPrime(10))
console.log(isPrime(13))

//Bonus 4
// function reverseString (arr = [1,1,1,1,1]) {
//     let str= ''
//     for (let i = 0; i < arr.length; i++) {
//         str = str + arr[arr.length-i-1]
//     }
//     return str
// }

// console.log(reverseString('hello'))  // olleh
// console.log(reverseString('JavaScript'))  // tpircSavaJ

//Bonus4
// function fibonacci (n=10) {
//     let a = 0
//     let b = 1
//     let c = a+b
//     for (let i = 2; i <= n; i++) {
//         b=a
//         a=c
//         c=a+b
//     }
//     return c
// }
// console.log(fibonacci(5))   // 5 (sequence: 0, 1, 1, 2, 3, 5)
// console.log(fibonacci(10))  // 55
