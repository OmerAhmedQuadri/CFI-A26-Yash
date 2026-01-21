let a = 5
console.log(a++)//5
console.log(a)//6

let b = 5
console.log(++b)//6
console.log(b)//6

let c = 10
console.log(c--)//10
console.log(c)//9

let d = 10
console.log(--d)//9
console.log(d)//9

let x = 7
let y = x++ + 5
console.log(y)//12
console.log(x)//8

x = 7
y = ++x + 5
console.log(y)//13
console.log(x)//8

let num = 3
console.log(num++)//3
console.log(num++)//4
console.log(num++)//5
console.log(num)//6

a = 5
let result = a++ + ++a
console.log(result)//12
console.log(a)//7

let p = 20
let q = --p + p--
console.log(q)//38
console.log(p)//18

let m = 10
let n = m++ + m + ++m
console.log(n)//33
console.log(m)//12