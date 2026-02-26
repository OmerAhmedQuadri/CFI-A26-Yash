// // // // function sayHello(){
// // // //     console.log('Hello');

// // // // }

// // // // console.log(sayHello);
// // // // sayHello()

// // // // function sayHello(name) {
// // // //     console.log('Hello', name);
// // // // }
// // // // function sayHello(nam2) {
// // // //     console.log("Bye");

// // // // }
// // // //when redeclared it takes the latest function bye not hello

// // // // sayHello('Yashwanth')
// // // // sayHello('Atif')
// // // // sayHello('fgh')
// // // // sayHello('fgh')
// // // // sayHello('fgh')



// // // //when using modulesdoes not work as modules removesredeclaration


// // // // let arr = [1,2,3,4,5]
// // // // // arr.splice('3')
// // // // arr.slice(3)
// // // // console.log(arr);


// // // // let a = 15;
// // // // let b = 5;
// // // // let oper = "a / b";
// // // // eval(oper)
// // // // let res = eval(oper);
// // // // console.log(typeof(res));
// // // // console.log( eval("2 + 3")  ) // → 5
// // // let matrix = [
// // //   [1,  2,  3],
// // //   [4,  5,  6],
// // //   [7,  8,  9]
// // // ];

// // // let top = 0;
// // // let bottom = matrix.length - 1;
// // // let left = 0;
// // // let right = matrix[0].length - 1;

// // // let result = [];

// // // while (top <= bottom && left <= right) {

// // //   // left to right
// // //   for (let i = left; i <= right; i++) {
// // //     result.push(matrix[top][i]);
// // //   }
// // //   top++;

// // //   // top to bottom
// // //   for (let i = top; i <= bottom; i++) {
// // //     result.push(matrix[i][right]);
// // //   }
// // //   right--;

// // //   // right to left
// // //   if (top <= bottom) {
// // //     for (let i = right; i >= left; i--) {
// // //       result.push(matrix[bottom][i]);
// // //     }
// // //     bottom--;
// // //   }

// // //   // bottom to top
// // //   if (left <= right) {
// // //     for (let i = bottom; i >= top; i--) {
// // //       result.push(matrix[i][left]);
// // //     }
// // //     left++;
// // //   }
// // // }

// // // console.log(result.join(" "));


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
// // console.log(primesInRange(0,5));




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

// fibonacci(10)


import fs from 'fs'



fs.readFile('file.txt', 'utf-8', (err, data) => {
    if(err) return console.log(err);
    console.log(data);
    temp = data

    fs.readFile('file2.txt', 'utf-8', (err,data2) => {
        if(err) return console.log(err);
        console.log(data2);
        temp += data2

        fs.writeFile('output.txt',temp, (err) => {
            if(err) return console.log(err);
            console.log('Write Success');
        })
    })
})

setTimeout(() => {
    console.log(temp);
    
}, 1000);