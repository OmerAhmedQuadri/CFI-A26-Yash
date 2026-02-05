function getFactorial(num) {
    if(num<0) return 'Invalid number'
    // if(num==0) return 1//0!=1
    let x = 1
    for (let i = 1; i <= num; i++) {
        x = x * i
    }
    return x
}

console.log(getFactorial(-1));
