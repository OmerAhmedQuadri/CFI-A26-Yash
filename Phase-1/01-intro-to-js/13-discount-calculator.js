// console.log(typeof Number);
// console.log(typeof null);
// console.log(typeof String);
// console.log(typeof Boolean);
// console.log(typeof BigInt);
// console.log(typeof undefined);
// console.log(typeof Symbol);
// function
// object
// function
// function
// function
// undefined
// function

// let id = Symbol(10)
// console.log(id);
// console.log(typeof id);

// let id2 = Symbol(10)
// console.log(id==id2);

// const a
// console.log(a);

// let _a
// let $a
// let 1a//SyntaxError: Invalid or unexpected token
//let a$g
//let let = 5//error
//no keywords and hypen and special symbols

//case sensitive
// let name
// let Name
// let NAME//three are different


//_ avoid used for private variables

// const price = 255
// const discount = 15

// const sellingPrice = price - (discount*price/100)

// console.log(Math.round(sellingPrice));

// console.log(Math.round(sellingPrice));//rounds to nearest integer
// console.log(Math.floor(sellingPrice));//rounds DOWN to nearest integer
// console.log(Math.ceil(sellingPrice));//rounds UP to nearest integer

// const price = 200
// const discount = 25

// const discountedAmount = discount*price/100

// const sellingPrice =  price - discountedAmount

// console.log(sellingPrice);

const price = 200
const sellingPrice = 150

const discount = (price - sellingPrice)*100/price

//console.log('Discount = ' + discount + '%');//concatination
//console.log('Discount =', discount, '\b%');//escape sequence

//let a = 'Yashwanth'+1+2+3
//console.log(a);

//a = 1+2+3+'Yashwanth'+1+2+3
//console.log(a);

// console.log('Discount = \n' + discount + '%');
// //Discount =
// //25%
// console.log('Discount = \t' + discount + '%');
// //Discount =    25%

// console.log('Hello\tWorld');

// //hello my name is 'Yash'
// console.log('hello my name is \'Yash\'');
// console.log("hello my name is 'Yash'");
// console.log('hello my name is "Yash"');

console.log('Yash \bwanth');
console.log('Yash\\wanth');
console.log('Yash \wanth');
