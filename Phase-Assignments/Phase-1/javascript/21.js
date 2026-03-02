// Q No : 21
// Question: Write a function that finds the maximum of three numbers.
// Expected Output: 3

function max(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (b >= c) {
            return b;
        } else {
            return c;
        }
    }
}

console.log(max(3, 1, 2)); 
