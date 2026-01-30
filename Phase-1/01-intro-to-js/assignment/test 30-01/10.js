let num = 839902
let i = 0

while(num>0){
    i=i*10 + (num%10)
    num=Math.floor(num/10)
}
console.log(i);
