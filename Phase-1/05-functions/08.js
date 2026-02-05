function isPrime(n = 10) {
    if (n <= 1) return false
let prime = true
    for (let i = 2; i < n; i++) {
        if (n % i == 0)
            // return false
        prime = false
        break
    }
    // return true
    return prime
}
console.log(isPrime(2));

console.log(isPrime(7))
console.log(isPrime(10))
console.log(isPrime(13))


// for (let i = 0; i < 100; i++) {
//     if(isPrime(i)){
//         console.log(i);
// }}