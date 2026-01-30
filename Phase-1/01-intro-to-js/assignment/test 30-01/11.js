let i = 1
let x = 1
let j = 1

while(i<=10){
    j=1
    while (j<=10) {
        console.log(`${i}x${j}=${i*j}`);
        j++
    }
    i++
    console.log();
}