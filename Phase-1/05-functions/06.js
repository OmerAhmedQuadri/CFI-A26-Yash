//function without parameters and without return statement

// function sayHello() {
//     console.log('Hello World');
//return
//log("after return ")
// }
// console.log(sayHello());


//function with parameters and without return statement

// function sayHello(name = 'Guest') {
//     console.log('Hello',name);
// }

// function isEven(num) {
//     if(num%2==0)return true
//     return false
// }
// console.log(isEven(55));


let all =[23, 55, 64, 76, 99, 108]
let even = []

for (let i = 0; i < all.length; i++) {
    if(all[i]%2==0)
        even.push(all[i])
}
console.log(even);
