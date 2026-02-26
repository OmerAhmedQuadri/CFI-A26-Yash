//1
// const nums = [1, 2, 3, 4, 5]

// let newArr = nums.map( (ele) => {
//     return ele*3
// })

// console.log(newArr);

//2
// const nums = [10, 20, 30, 40, 50]

// let newArr = nums.map( (ele) => {
//     return ele/10
// })

// console.log(newArr);

//3
// const words = ['hello', 'world', 'javascript']

// let newArr = words.map( (ele) => {
//     return ele.toUpperCase()
// })

// console.log(newArr);

//4
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newArr = nums.filter( (ele) => {
//     if (ele%2!=0) {
//         return ele
//     }
// })

// console.log(newArr);

//5
// const nums = [5, 12, 3, 18, 25, 7, 30]

// let newArr = nums.filter( (ele) => {
//     if (ele > 10) {
//         return ele
//     }
// })

// console.log(newArr);

//6
// const names = ['Ali', 'Bob', 'Sam', 'John', 'Jo']

// let newArr = names.filter( (ele) => {
//     if (ele.length > 3) {
//         return ele
//     }
// })

// console.log(newArr);

//7
// const nums = [1, 2, 3, 4, 5]

// nums.forEach((ele, index, arr) => {
//   arr[index] = ele * 5
// })

// console.log(nums);

//8
// .map() is an array helper using which we can store the array and modify and store it in an new array or itself
// .forEach() is also an array helper that acts as the same as map but doesn't create and allow crerating a new array

//9
// const student = {
//     name: 'Rahul',
//     age: 22,
//     city: 'Mumbai',
//     course: 'Fullstack'
// }

// console.log(Object.keys(student));
// console.log(Object.values(student));

//10
// const nums = [1, 2, 3, 4, 5]
// let arr = []
// for (let i = 0; i < nums.length; i++) {
//     arr.push(nums[i]*2)
// }

// console.log(arr);

//11
// const prices = [100, 200, 350, 400, 150];

// let newArr = prices.map((ele) => {
//     let mrp = ele + (ele * 18 / 100);
//     return Number(mrp.toFixed(2));
// });

// console.log(newArr);

//12
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = nums
//     .filter(ele => ele % 2 === 0)
//     .map(ele => ele * 2);

// console.log(newArr);

//13
// const students = [
//     { name: 'Alice', marks: 85 },
//     { name: 'Bob', marks: 42 },
//     { name: 'Charlie', marks: 76 },
//     { name: 'David', marks: 35 },
//     { name: 'Eve', marks: 90 }
// ]

// let newArr = students.filter( (ele) =>{
//     if(ele.marks >= 50)
//         return 
// })

// console.log(newArr);

//14
// let newArr = students.map( (ele) =>{
//     return ele.name
// })

// console.log(newArr);

//15
// let newArr = students.map( (ele) => {
//     let grade;

//     if (ele.marks >= 80) grade = 'A';
//     else if (ele.marks >= 60) grade = 'B';
//     else if (ele.marks >= 50) grade = 'C';
//     else grade = 'F';

//     return { ...ele, grade };
// });

// console.log(newArr);

// //16
// const words = ['cat', 'elephant', 'dog', 'hippopotamus', 'rat']

// let newArr = words
//     .filter( (ele) => {
//         if(ele.length > 4)
//             return true
//     })

//     .map( (ele) => {
//         return ele.charAt(0).toUpperCase() + ele.slice(1)
//     })

// console.log(newArr);

//17
// const emails = ['Alice@Gmail.com', 'BOB@YAHOO.COM', 'charlie@hotmail.COM']

// let newArr = emails.map( (ele) => {
//     return ele.toLowerCase()
// })

// console.log(newArr);

//18
// const nums = [1, 2, 3, 4, 5]

// let newArr = nums.map( (ele) => {
//     let va = {value : ele , square : Math.pow(ele, 2)}
//     return va
// })

// console.log(newArr);

//19
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 28,
//     email: 'john@example.com',
//     isActive: true
// }

// Object.keys(user).forEach(key => {
//     console.log(`${key} : ${user[key]}`);
// })

//20
// const nums = [-5, -3, 0, 2, 4, -1, 7, -8]

// let newArr = nums
// .filter( (ele) => {
//     if(ele > 0)
//         return ele
// })

// .map( (ele) => {
//     return ele*ele
// })

// console.log(newArr);


//21
// const cart = [
//     { product: 'Shirt', price: 500, qty: 2 },
//     { product: 'Pants', price: 1200, qty: 1 },
//     { product: 'Shoes', price: 2000, qty: 1 },
//     { product: 'Cap', price: 300, qty: 3 }
// ]


// let newArr = cart.map(item => ({
//     ...item,
//     total: item.price * item.qty
// }));

// console.log(newArr);

//22
// let newarr = newArr.filter( (ele) => {
//     if(ele.total > 1000)
//         return ele
// })

// console.log(newarr);

//23
// const users = [
//     { name: 'Alice', age: 17, country: 'India' },
//     { name: 'Bob', age: 22, country: 'USA' },
//     { name: 'Charlie', age: 15, country: 'India' },
//     { name: 'David', age: 25, country: 'India' },
//     { name: 'Eve', age: 19, country: 'USA' }
// ]

// let newArr = users.filter( (ele) => {
//     if(ele.country == 'India' && ele.age > 18)
//         return ele
// })

// console.log(newArr);

//24

// let newarr = newArr.map( (ele) => {
//     return ele.name
// })

// console.log(newarr);

//25
// const sentences = ['hello world', 'i love javascript', 'coding is fun']


// let newArr = sentences.map((ele) => {

//     let result = "";

//     for (let i = 0; i < ele.length; i++) {

//         if (i == 0) {
//             result += ele[i].toUpperCase();
//         }
//         else if (ele[i - 1] == " ") {
//             result += ele[i].toUpperCase();
//         }
//         else {
//             result += ele[i];
//         }

//     }

//     return result;
// });

// console.log(newArr);

//26
// const data = [1, 'two', 3, 'four', 5, 'six', 7]

// let newArr = data.filter( (ele) => {
//     if(typeof ele == 'number')
//         return ele
// })

// console.log(newArr);

//27
// const employees = [
//     { name: 'John', department: 'Engineering', salary: 80000 },
//     { name: 'Jane', department: 'Design', salary: 70000 },
//     { name: 'Mark', department: 'Engineering', salary: 90000 },
//     { name: 'Sara', department: 'HR', salary: 60000 },
//     { name: 'Tom', department: 'Engineering', salary: 85000 }
// ]

// let newArr = employees.map( (ele) => {
//     if(ele.department == 'Engineering'){
//         ele.salary = ele.salary + ele.salary/10
//         return ele
//     }
//     return ele
// })

// console.log(newArr);

//28
// employees.forEach( (ele) => {
//     console.log(`${ele.name} works in ${ele.department} and earns ${ele.salary}`);
    
// })

//29
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const evens = nums
//   .map(num => {
//     if (num % 2 === 0) {
//       return num;
//     }
//   })

// console.log(evens);

// Using .map() creates undefined values for elements that do not match the condition.
// .map() always returns an array of the same length, so it cannot truly filter elements out.
// .filter() removes such undefined values

//30
const products = [
    { name: 'Laptop', price: 50000, inStock: true },
    { name: 'Phone', price: 20000, inStock: false },
    { name: 'Tablet', price: 30000, inStock: true },
    { name: 'Watch', price: 5000, inStock: false },
    { name: 'Headphones', price: 3000, inStock: true }
];

products
  .filter((ele) => ele.inStock)
  .map((ele) => ({
      ...ele,
      price: ele.price * 0.9
  }))
  .forEach((ele) => {
      console.log(`${ele.name} is available for ₹${ele.price}`);
  });
