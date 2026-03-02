// Q No : 7
// Question: Write a function that takes a number and prints EVEN or ODD, or throws
// an error if the given argument is not a number.
// Expected Output: 5 is Odd

function EvenOdd(num) {
    if(!(typeof num == 'number') || (Number.isNaN(num)))
        throw new Error("Not a valid format of number");
    if(num % 2 == 0)
        return console.log(num,'is Even');
    return console.log(num,'is Odd');
}

EvenOdd(5)