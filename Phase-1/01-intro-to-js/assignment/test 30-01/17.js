let num = 4563289
let i=0,x=0

while (num>0) {
    x=num%10
    i=i+x
    num = Math.floor(num/10)
}
console.log(i);


