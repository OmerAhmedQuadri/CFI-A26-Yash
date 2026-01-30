//1
let num = 5

while (num > 0) {
    console.log('hello world', num)
    num--
}
console.log('rest of the code')
//hello world 5
//hello world 4
//hello world 3
//hello world 2
//hello world 1
//rest of the code

//2
while (num<5) {
    num++
    console.log(num);
}

//3
let i = 1

while (i < 5) {
    console.log(i)
    i++
}
console.log('rest of the code')
//1
//2
//3
//4
//rest of the code

//4
i=0
while (i<10) {
    console.log("Omer");
    i++
}

//5
i = 0

while (i < 10) {
    console.log('omer')//10times
    i = i + 1
}
console.log(i)//10

//6
while (i>0) {
    console.log(i);
    i--
}

//7
//let i = 0

// while (i < 5) {
//     console.log(i)
// }
//This is an infinite while loop as the variable value is constant it is neither incremented or decremented causing an endless loop

//8
i = 2
while(i<=10){
    console.log(i);
    i +=2
}

//9
i = 0

while (i < 5) {
    console.log(i)
    i++
}
console.log('some other code')

while (i < 10) {
    console.log(i)
    i++
}
console.log('rest of the code')
//0 to 4 \n some other code \n 5 to 9 \n rest of the code

//10
i=1
while (i<10) {
    console.log(i);
    i +=2
}

//11
i = 0

while (i < 10) {
    console.log(i++)
}
//0 to 9
//post increment adds 1 atthe next operation so it is irectly printing the value of i 

//12
i = 0

while (i < 10) {
    console.log(i++)
}
console.log('some other code')

while (i < 5) {
    console.log(i++)
}
console.log('rest of the code')
//0 to 9 \n some other code \n rest of the code
//the second loop does not print as it is a false condition

//13
i=5

while (i<=10) {
    console.log(i);
    i++
}

//14
// Version 1
i = 0
while (i < 5) {
    console.log(i)
    i++
}
//This is a two step process of printing the output and then incrementing it in another step/statement
// Version 2
i = 0
while (i < 5) {
    console.log(i++)
}
//In this both are done in the same step

//15
num = 1

while (num <= 3) {
    console.log(num++)
    console.log(num)
}
//1
//2
//2
//3
//3
//4

//16
i=10

while (i>=5) {
    console.log(i--);
}

//17
i = 0

while (i < 5) {
    console.log('Count:', i++)
}
console.log('Final i:', i)
//0 1 2 3 4
//5

//18
i=0
while (i<=10) {
    console.log(i++);
    i++
}

//19
i = 0

while (i < 10) {
    console.log(++i)
}//1 to 10

//20
i = 0

while (i < 10) {
    console.log(++i)
}
console.log('some other code')

while (i < 5) {
    console.log(++i)
}
console.log('rest of the code')
//1 to 10 \n some other code \n rest of the code

//21
// Version 1: Post-increment
i = 0
while (i < 5) {
    console.log(i++)
}//0 to 4 and the final value of i is 5... it is increment at the next operation

// Version 2: Pre-increment
i = 0
while (i < 5) {
    console.log(++i)
}//1 to 5 and final value of i is 5 it is inremented then and there and printed

//22
i=0
while (i<5) {
    console.log(++i);
}

//23
num = 0

while (num < 3) {
    console.log(++num)
    console.log(num)
}
//112233

//24
// Code	                                First Print 	Second Print	Third Print
// i = 0; while(i < 3) console.log(i++)     0               1               2
// i = 0; while(i < 3) console.log(++i)	    1               2               3
// i = 1; while(i < 4) console.log(i++)	    1               2               3
// i = 1; while(i < 4) console.log(++i)	    2               3               4

//25
i=5
while (i>0) {
    console.log(i--);
}

//26
i = 0

while (++i < 5) {
    console.log(i)
}
console.log('Final:', i)
//1234
//5

//27
let str = ''

str = str + '*'
console.log(str)

str = str + '*'
console.log(str)

str = str + '*'
console.log(str)
// *
// **
// ***

//28
i=0
str = ''
while (i<3) {
    str = str + '*'
    console.log(str);
    i++
}

//30
i=0
str = ''
while (i<5) {
    str = str + '#'
    console.log(str);
    i++
}

//31
str = ''
i = 0

while (i < 4) {
    str = str + i + ' '
    console.log(str)
    i++
}
// 0
// 0 1
// 0 1 2
// 0 1 2 3

//32
let arr = ['A ', 'B ', 'C ', 'D ']
let j=0
str = ''
while (j<4) {
    str = str +arr[j]
    console.log(str);
    j++
}

//33
str = ''
i = 1

while (i <= 5) {
    str = str + i + ' '
    console.log(str)
    i++
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

//34
arr = ['H ', 'E ', 'L ', 'L ', 'O ']
j=0
str = ''
while (j<5) {
    str = str +arr[j]
    console.log(str);
    j++
}

//35
str = '0 '
i = 1

while (i < 5) {
    str = str + i + ' '
    console.log(str)
    i++
}
// 0 1 
// 0 1 2 
// 0 1 2 3 
// 0 1 2 3 4 

//36
i=2
str = ''
while (i<=10) {
    str = str + i+ ' '
    console.log(str);
    i +=2
}
// 2 
// 2 4 
// 2 4 6 
// 2 4 6 8 
// 2 4 6 8 10 

//37
i = 1
let n = 6
str = ''

while (i < n) {
    str = str + i + ' '
    console.log(str)
    i++
}
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

//38
i = 1
let x=0
j = 1
str = ''

while (i <= 10) {
    str = str + i +' '
    i++
    x++
    if (x === j) {
        console.log(str);
        str = ''
        x=0
        j++
    }
}

//39
i = 0
let max = 4
str = 'a '

while (i < max) {
    console.log(str)
    str = str + 'a a '
    i++
}
//a 
//a a a
//a a a a a
//a a a a a a a

//40
i = 1
n = 6
str = ''

while (i <= n) {
    str = str + i + ' '
    console.log(str)
    i++
}

//41
i = 1
n = 6
str = ''

while (i < n) {
    str = str + '* '
    console.log(str)
    i++
}

//42
i = 1
n = 5
str = ''

while (i < n) {
    str = str +'@ '
    console.log(str)
    i++
}

//43
i = 5
n = 1
str = ''

while (i >= n) {
    str = str + i + ' '
    console.log(str)
    i--
}

//44
j=0
str = ''
while (j<5) {
    str = str + String.fromCharCode(65+j)+' '
    console.log(str);
    j++
}

//45
i=1
str = ''
while (i<=9) {
    str = str + i+ ' '
    console.log(str);
    i +=2
}

//46
i=2
str = ''
while (i<=10) {
    str = str + i+ ' '
    console.log(str);
    i +=2
}

//47
import readlineSync from 'readline-sync'

let name = readlineSync.question('Enter your name: ')
let age = readlineSync.questionInt('Enter your age: ')

console.log(`Hello ${name}, you are ${age} years old`)
//Hello Yash, you are 21 years old

//50
let num1 = readlineSync.questionInt("Enter a number:")
i= 1
while (i<=num1) {
    console.log(i);
    i++
}

//51
name = readlineSync.question("Enter you name:")
n = readlineSync.questionInt("How many times to print:")
i=0
while (i<n) {
    console.log(name);
    i++
}

//52
//question() takes string inputs even when an number is given as input
//questionInt() takes number value if decimal give only takes integer part and when string input is given asks to re enter

//53
num = readlineSync.questionInt("Enter the number for table:")
i=1
while (i<=10) {
    console.log(`${num}x${i}=${num*i}`);
    i++
}

//54
num = readlineSync.questionInt("Enter the number of rows:")
i=0
str = ''
while (i<num) {
    str = str + '*'
    console.log(str);
    i++
}

//55
i=1
x=0
while (i<= 10) {
   x=x+i
   i++
}
console.log('Sum:',x);

//56
let sum = 0
i = 1

while (i <= 5) {
    sum = sum + i
    console.log('i:', i, 'sum:', sum)
    i++
}
console.log('Total:', sum)
// i: 1 sum: 1
// i: 2 sum: 3
// i: 3 sum: 6
// i: 4 sum: 10
// i: 5 sum: 15
// Total: 15

//57
i=0
x=0
while (i<= 20) {
   x=x+i
   i +=2
}
console.log('Sum:',x);

//58
i=1
x=[]

while (i<=100) {
    if(i%7===0)
        x.push(i)
    i++
}
console.log(x.length);

//59
num = readlineSync.questionInt("Enter a number:")
x=1

while (num>=1) {
    x=x*num
    num--
}
console.log('Factorial:',x);

//60
i=1
x=0
while (i<=50) {
   x=x+i
   i +=2 
}
console.log(x);

//61
num = readlineSync.questionInt("Enter a NUmber")
i=0

if (num === 0) {
    console.log("1");
    
}else{
while (num>0) {
    i++
    num = Math.floor(num/10)
}}
console.log(i);

//62
i=3
x=0
while (i<=30) {
   x=x+i
   i +=3
}
console.log(x);
