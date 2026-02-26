//1
// const nums = [5, 10, 15, 20, 25]

// let newArr = nums.reduce( (acc, crr) => {
//     return acc+crr
// })

// console.log(newArr);

//2
// const nums = [2, 3, 4, 5]

// let newArr = nums.reduce( (acc, crr) => {
//     return acc*crr
// })

// console.log(newArr);

//3
// const nums = [45, 23, 67, 12, 89, 34]

// let newArr = nums.reduce( (acc, crr) => {
//     if(acc<crr)
//         return crr
//     return acc
// }, nums[0])

// console.log(newArr);

//4
// const nums = [45, 23, 67, 12, 89, 34]

// let newArr = nums.reduce( (acc, crr) => {
//     if(acc>crr)
//         return crr
//     return acc
// }, nums[0])

// console.log(newArr);

//5
// const words = ['hello', 'world', 'javascript', 'is', 'awesome']

// let newArr = words.reduce( (acc, crr) => {
//     return acc+' '+crr
// })

// console.log(newArr);

//6
// const nums = [10, 20, 30, 40, 50]

// let res = nums.find( (n) => {
//     if(n > 25) return true
// })

// console.log(res);

//7
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ]

// let res = users.find( (n) => {
//     if(n.name == 'Bob') return true
// })

// console.log(res);

//8
// let res = users.findIndex( (n) => {
//     if(n.name == 'Charlie') return true
// })

// console.log(res);

//9
// const nums = [5, 12, 8, 130, 44]

// let res = nums.findIndex( (n) => {
//     if(n > 100) return true
// })

// console.log(res);

//10
// const nums = [1, 2, 3, 4, 5]

// let res = nums.reduce( (acc, crr) => {
//     console.log(acc,crr);
//     return crr
// })//here the first is when returning as only after return it is considering the value if acc so i it is executed but not returned


// let res = nums.reduce( (acc, crr) => {
//     console.log(acc,crr);
//     return crr
// })//here as we are giving the initial value the first iteration is also printed

// console.log(res);

//11
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'grape']

// let fruitsObj = fruits.reduce( (acc,crr) => {
//     if(acc[crr])
//         acc[crr]++
//     else
//         acc[crr] = 1
//     return acc
// }, {})

// console.log(fruitsObj);

//12
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let res = numbers.reduce( (acc,crr) => {
//     if(crr % 2 == 0)
//         acc.even.push(crr)
//     else
//         acc.odd.push(crr)
//     return acc
// }, {even:[],odd:[]})

// console.log(res);

//13
// const students = [
//     { name: 'Alice', marks: 85 },
//     { name: 'Bob', marks: 45 },
//     { name: 'Charlie', marks: 75 },
//     { name: 'David', marks: 92 }
// ]

// let newArr = students.reduce( (acc, crr) => {
//     return acc + crr.marks
// },0)

// let avg = newArr/(students.length)
// console.log(avg);

//14
// let newArr = students.reduce( (acc,crr) => {
//     if(acc > crr)
//         return acc
//     else
//         return crr
// })

// console.log(newArr);

//15
// const cart = [
//     { product: 'Shirt', price: 500, qty: 2 },
//     { product: 'Pants', price: 1200, qty: 1 },
//     { product: 'Shoes', price: 2000, qty: 1 },
//     { product: 'Cap', price: 300, qty: 3 }
// ]

// let newArr = cart.reduce( (acc, crr) => {
//     return acc + (crr.price * crr.qty)
// }, 0)

// console.log(newArr);

//16
// const users = [
//     { name: 'Alice', age: 25, city: 'Mumbai' },
//     { name: 'Bob', age: 30, city: 'Delhi' },
//     { name: 'Charlie', age: 25, city: 'Mumbai' },
//     { name: 'David', age: 30, city: 'Mumbai' }
// ] 

// let newArr = users.reduce( (acc, crr) => {
//     if(crr.city == 'Mumbai')
//         acc.Mumbai.push(crr)
//     else
//         acc.Delhi.push(crr)
//     return acc
// }, {Mumbai : [], Delhi: []})

// console.log(newArr);

//17
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

// let res = words.find( (n) => {
//     if(n.length > 6)
//         return true
// })

// console.log(res);

//18
// const products = [
//     { id: 1, name: 'Laptop', inStock: false },
//     { id: 2, name: 'Phone', inStock: true },
//     { id: 3, name: 'Tablet', inStock: true }
// ]

// let res = products.find( (n) => {
//     if(n.inStock)
//         return true
// })

// console.log(res);

//19
// let res = products.findIndex((n) => {
//     if(n.id == 3)
//         return true
// })

// console.log(res);

//20
// const nums = [3, 7, 12, 5, 8, 15, 20]

// let res = nums.findIndex( (n) => n%5 == 0)

// console.log(res);

//21
// const users = [
//     { name: 'Alice', age: 17, country: 'India' },
//     { name: 'Bob', age: 22, country: 'USA' },
//     { name: 'Charlie', age: 15, country: 'India' },
//     { name: 'David', age: 25, country: 'India' },
//     { name: 'Eve', age: 19, country: 'USA' }
// ]

// let newArr = users.reduce( (acc, crr) => {
//     if (crr.age < 18) {
//         acc.minors.push(crr);
//     } else if (crr.age < 25) {
//         acc.adults.push(crr);
//     } else {
//         acc.seniors.push(crr);
//     }
//     return acc;
// }, {minors: [],adults: [], seniors:[]})

// console.log(newArr);

//22
// const nums = [[1, 2], [3, 4], [5, 6], [7, 8]]

// const res = nums.reduce((acc, curr) => {
//     return [...acc, ...curr];
// }, []);

// console.log(res);

//23
// const transactions = [
//     { type: 'deposit', amount: 1000 },
//     { type: 'withdraw', amount: 500 },
//     { type: 'deposit', amount: 2000 },
//     { type: 'withdraw', amount: 300 },
//     { type: 'deposit', amount: 1500 }
// ]

// const res = transactions.reduce((balance, transaction) => {
//     if (transaction.type === 'deposit') {
//         return balance + transaction.amount;
//     } else {
//         return balance - transaction.amount;
//     }
// }, 0);

// console.log(res);

//24
// const words = ['hello', 'world', 'this', 'is', 'javascript'];

// const res = words.reduce((longest, current) => {
//     return current.length > longest.length ? current : longest;
// });

// console.log(res);

//25
// const students = [
//     { name: 'Alice', subjects: ['Math', 'Science'] },
//     { name: 'Bob', subjects: ['English', 'Math'] },
//     { name: 'Charlie', subjects: ['Science', 'History'] }
// ]

// const res = students.reduce((acc, student) => {
//     student.subjects.forEach(subject => {
//         if (!acc.includes(subject)) {
//             acc.push(subject);
//         }
//     });
//     return acc;
// }, []);

// console.log(res);

//26
// const nums = [5, 10, 15, 20, 25, 30];

// const res = nums.reduce((acc, num) => {
//     acc[num] = num % 10 === 0;
//     return acc;
// }, {});

// console.log(res);

//27
// const employees = [
//     { name: 'John', department: 'Engineering', salary: 80000 },
//     { name: 'Jane', department: 'Design', salary: 70000 },
//     { name: 'Mark', department: 'Engineering', salary: 90000 },
//     { name: 'Sara', department: 'HR', salary: 60000 },
//     { name: 'Tom', department: 'Engineering', salary: 85000 }
// ];

// const res = employees.reduce((acc, crr) => {
//     if (!acc[crr.department]) {
//         acc[crr.department] = 0;
//     }

//     acc[crr.department] += crr.salary;
//     return acc;
// }, {});

// console.log(res);

//28
