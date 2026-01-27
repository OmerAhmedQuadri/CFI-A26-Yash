// let arr = ['kvd', 24, true, null, undefined]
// // arr[6]='ve'
// // console.log(arr[6]);
// // console.log(arr.length);

// // console.log(arr[3]);
// // console.log(typeof arr);
// // console.log(typeof arr[3]);

// // arr[3] = 'adfib'
// // console.log(arr[3]);
// //console.log(arr['d']);
// // arr.push(20)
// // console.log(arr);
// // arr.pop()
// // console.log(arr);
// // arr.pop(1)
// // console.log(arr);//only works on last element even if index is mentioned


// //console.log(arr.length)//index+1 is returned


// // arr[arr.length] = 20
// // console.log(arr);
// // console.log(arr[arr.length-1]);

// console.log(arr);
// arr.shift()//returns index 0 element
// console.log(arr);
// console.log(arr.unshift('kvd'))//returns the updated length
// console.log(arr);

// let fruits = ['apple','mango','guava']
// let vegies = ['tomato','carrot','potato']
// let basket = [fruits,vegies]
// console.log(basket);
// console.log(basket.length);
// console.log(basket[0]);
// console.log(basket[0].length);
// console.log(basket[0][1]);
// console.log(basket.flat());
// console.log(basket);
// basket.flat()//does not alter the array unless assigned
// console.log(basket);
// basket=basket.flat()
// console.log(basket);

// let arr = [10, 'Yash', ['apple', 'banana']]
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[2][1]);

// let students = [
//     ['Name','Age','Address'],
//     ['Fahad',21,'towlichowki'],
//     ['Taha',22,'Bahadurpura'],
//     ['Abdul rahman',22,'Malakpet']
// ]
// console.table(students,students[0])
// // console.log(students);

// let arr1 = [10,20,30]
// let arr2 = arr1
// arr1.push(100)
// arr2[0] = 1
// console.log(arr1);
// console.log(arr2);


let arr1 = [100,200,300]
let arr2 = [...arr1]

// arr1.pop()
// console.log(arr1);
// console.log(arr2);
// console.log(...arr2);


let arr3 = arr1

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr1==arr2);
console.log(arr1==arr3);
console.log(arr1===arr2);
console.log(arr1===arr3);
// console.log((...arr1)==(...arr3));
