// // console.log(25);
// // console.log('25');
// // console.log( Number(25));
// // console.log(Number('25e'));//NaN

// // console.log(typeof 25);
// // console.log(typeof '25');
// // console.log(typeof Number(25));
// // console.log(typeof Number('25e'));//NaN is number datatype

// // console.log(parseInt('asdf1234'));//NaN
// // console.log(parseInt('1234dvzc12'));//1234
// // console.log(parseInt('12469.213fvui'));//12469

// // console.log(Number(''));//0
// // console.log(Number(true));//1
// // console.log(Number('true'));//NaN
// // console.log(Number());//0
// // console.log(Number(' '));//0
// // console.log(Number(undefined));//NaN
// // console.log(Number(null));//0
// console.log(Number(2134.123));



// console.log(parseInt('200px'));//200
// console.log(parseInt('200 20'));//200
// console.log(parseInt('200-50'));//200
// console.log(parseInt(' 200-50'));//200
// console.log(parseInt('   ps200-50'));//NaN
// console.log(parseInt('   __200-50'));//NaN
// console.log(parseInt(' '));//NaN


// console.log(parseInt('101010110101',2));
// console.log(parseInt('1010', 2));
// console.log(parseInt('0x1010'));
// console.log(parseInt('1010', 16));

// console.log(parseInt('0b1010'));//0 does parse only take 0x

// let num = 01010//shows error but gives octal value

// console.log(num);
//0b or 0B binary 
//0o or 0O or 0 octa
//0d or 0D decimal
//0x or 0X hexa
//0h or 0H assembly
//# or $ color

// let num1 = ' 155.263 6.33'
// // console.log(num1.toFixed(3));//round off to3 points
// console.log(parseFloat(num1));


let num = 0xa
console.log(num.toString())
console.log(num.toString(2))//in binary coversion stored as string
//cannot gives 0xobly number 8, 16