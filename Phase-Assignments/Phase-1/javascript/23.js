// Q No : 23
// Question: Write a function that checks if a given number is a prime number.
// Expected Output: 7 is a prime number

function isPrime(num) {
    if(!(typeof num == 'number') || (Number.isNaN(num)))
        return 'Not a valid form of input'
    if (num < 1)
        return `${num} Not a prime number`
    if(num == 1)
        return '1 is neither prime not composite'
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num%i == 0)
            return `${num} is not a Prime Number`
    }
    return `${num} is Prime Number`
}

console.log(isPrime(12));
