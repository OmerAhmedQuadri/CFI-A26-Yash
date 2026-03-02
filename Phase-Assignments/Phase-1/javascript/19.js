// Q No : 
// Question: Write a program that prints all numbers from 1 to 50 and prints
// "Fizz" if the number is divisible by 3, "Buzz" if the number is divisible
// by 5, and "FizzBuzz" for both.
// Expected Output: ➔ 1
// ➔ 2
// ➔ 3 Fizz
// ➔ 4
// ➔ 5 Buzz
// ➔ 6 Fizz
// ➔ .
// ➔ .
// ➔ 15 FizzBuzz
// ➔ 16

for (let i = 1; i <= 50; i++) {
    let str = '➔  '+i + ' '
    if (i%3==0) {
        str = str + 'Fizz'
    }
    if (i%5==0) {
        str = str + 'Buzz'
    }
    console.log(str);
    
}

