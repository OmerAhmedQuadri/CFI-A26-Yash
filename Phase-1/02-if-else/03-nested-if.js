// const name = 'anas'
// const marks =80
// if (name == 'anas'){
//     if (marks>90)
//     console.log('anas has scored')
//     else if (marks > 70)
//     console.log('anas just passed');
//     else
//     console.log('anas has failed');
// }
// else if (name == 'yash'){
//     if (marks>90)
//     console.log('yash has scored')
//     else if (marks > 60)
//     console.log('yash just passed');
//     else
//     console.log('yash has failed')
// }

// let a = 20
// let b = 50
// let man
// if(a>b)
//     max=a
// else
//     max=b
// console.log(max);
// console.log('Max value is:'+max);
// console.log(`Max value is:`,max);
// console.log(`Max value is:${max}`);
// console.log(`Max value is: ${max}`);//back tick must
//called as string literal or template literal

const price = 5000
let discount = 0

if (price >= 1000) {
    discount = 20
} else if(price >= 500) {
    discount = 30
}else {
    discount = 50
}
console.log(`your discount is ${discount}%`);
