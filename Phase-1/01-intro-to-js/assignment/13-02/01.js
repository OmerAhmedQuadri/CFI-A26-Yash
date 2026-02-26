//1
// const nums = [10, 20, 30, 40, 50, 30, 60];

// let res = nums.indexOf(30)

// console.log(res);

//2
// let res = nums.indexOf(30,3)

// console.log(res);

//3
// const colors = ['red', 'blue', 'green', 'blue', 'yellow'];

// let res = colors.lastIndexOf('blue')

// console.log(res);

//4
// const nums = [1, 2, NaN, 4, 5];

// let res1 = nums.indexOf(NaN)//checks the typeof then value i.e === so fails to find NaN typeof is number

// let res2 = nums.includes(NaN)//returns boolean checks the value

// console.log(res1,res2);

//5
// const permissions = ['read', 'write', 'execute'];
// const userPermission = 'write';

// if(permissions.includes(userPermission))
//     console.log('Access Granted');
// else
//     console.log('Access Denied');
    

//6
// const nums = [2, 4, 6, 8, 10];

// let res = nums.every(num => num%2 == 0)

// console.log(res);

//7
// const nums = [1, 2, 3, 4, 5, 6];

// let res = nums.some( n => n>5)

// console.log(res);

//8
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 30 }
// ];

// let res = users.every(n => n>18)

// console.log(res);

//9
// let res = users.some(n => n>18)

// console.log(res);

//10
// const stack = [];

// stack.push('A'); // ['A']
// stack.push('B'); // ['A', 'B']
// stack.push('C'); // ['A', 'B', 'C']

// const firstPop = stack.pop();  // ['A', 'B']
// const secondPop = stack.pop(); // ['A']

// console.log("Stack after pops:", stack);        // ['A']
// console.log("First pop returned:", firstPop);   // 'C'
// console.log("Second pop returned:", secondPop); // 'B'

//11
// const queue = ['task1', 'task2', 'task3'];

// const removedTask = queue.shift(); // ['task2', 'task3']

// queue.unshift('urgent-task'); // ['urgent-task', 'task2', 'task3']
// console.log("Final queue:", queue);
// console.log("Removed task:", removedTask);

//12
// const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

// let res = fruits.slice(1,4)

// console.log(res);

//13
// let res = fruits.slice(-2)

// console.log(res);

//14
// const nums = [1, 2, 3, 4, 5];

// let res = nums.splice(1,2,99,88)

// console.log(nums);

//15
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined1 = arr1.concat(arr2);//Combines arrays into a new array.
// console.log(combined1);

// const combined2 = [...arr1, ...arr2];//stores each element into a new array.
// console.log(combined2);

//16
// const words = ['JavaScript', 'is', 'awesome'];

// console.log(words.join(' '));
// console.log(words.join('-'));
// console.log(words.join(''));

//17
// const csv = "John,Doe,30,john@example.com";

// let res = csv.split(',')

// console.log(res);

//18
// const nums = [1, 2, 3, 4, 5];

// let res = nums.reverse()

// console.log(res);
// console.log(nums);
//the originalis alsomodified to not change the original array use toreverse

//19
// const str = "JavaScript";

// let res = str.split('').reverse().join('')

// console.log(res);

//20
// const words = ['zebra', 'apple', 'mango', 'banana'];

// let res = words.sort()

// console.log(res);

//21
// const nums = [100, 5, 20, 10, 1000];

// let res = nums.sort( (a,b) => a-b)

// console.log(nums);

//22
// let res = nums.sort( (a,b) => b-a)

// console.log(nums);

//23
// const users = [
//     { name: 'Charlie', age: 35 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 }
// ];

// let res = users.sort( (a,b) => {
//     return a.age - b.age
// }, {})

// console.log(res);

//24
// let res = users.sort((a, b) => a.name.localeCompare(b.name));

// console.log(res);

//25
// const nested = [1, [2, 3], [4, [5, 6]]];

// let res = nested.flat(2)

// console.log(res);

//26
// const arr = [1, 2, 3, 4, 5];

// let res = arr.fill(0,1,3)

// console.log(res);

//27
// const fruits = ['apple', 'banana', 'orange', 'grape'];

// let res = fruits.at(0)
// let res = fruits.at(-1)
// let res = fruits.at(-2)

// console.log(res);

//28
// const nums = [1, 2, [3, [4, [5]]]];

// let res = nums.toString()//1,2,3,4,5 - flattend and csv

// console.log(res);

//29
// const prices = [1000.50, 2500.75, 500.99];

// let res = prices.toLocaleString('en-INR',{style:'currency',currency:'INR'})
// let res = prices.toLocaleString('en-US',{style:'currency',currency:'USD'})
// let res = prices.toLocaleString('de-DE',{style:'currency',currency:'EUR'})

// console.log(res);

//30
// const nums = [1, 2, 3, 4, 5];

// const reversedCopy = nums.toReversed();
// console.log("Reversed copy:", reversedCopy);// [5, 4, 3, 2, 1]
// console.log("Original array:", nums);// [1, 2, 3, 4, 5]//in reverse the original changes

//31
// const items = ['apple', 'banana', 'orange', 'grape', 'mango'];

// function removeItem(arr, item) {
//     const index = arr.indexOf(item);
//     if (index !== -1) {
//         arr.splice(index, 1);
//     }
//     return arr;
// }

// const updatedItems = removeItem(items, 'orange');
// console.log(updatedItems);

//32
const nums = [5, 10, 15, 20, 25, 30, 15, 35];

