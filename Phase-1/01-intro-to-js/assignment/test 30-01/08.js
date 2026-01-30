// //print prime numbers from 1 to 20



let i = 2
// let j = 2
// let isPrime = false

while (i<=20) {
    let j=2
    let isPrime = true

    while (j < i) {
        if(i%j==0){
            isPrime = false
            break
        }
        j++

    }
        if (isPrime) {
            console.log(i);
            
        }
    i++
}


// let i=2, j=2
// while(j<=20){
//     while (i<=Math.sqrt(j)){
//         if(i%2==0 || i%3==0)
//             break
//         i++
//     }

// j++
// }
// i=2
// let n=20

// while(i<= 20)
// {
//     if(n%i==0){
//         break
//     }
//     console.log(i);
    
//     i++
// }