// Q No : 24
// Question:  What is the difference between break and continue? Give one example
// of each.
// Expected Output: 

//break
//break comes out of loop when triggered it is a code breaker

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        break//post 3 all are skipped
    }
    console.log(i);
}

console.log();

//continue
//continue skips to the end of block and the next part is started only single iteration is skipped

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue//3 is skipped
    }
    console.log(i);
}