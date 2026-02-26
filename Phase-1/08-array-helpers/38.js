// const num = 56235466.33
const num = [56235466.33, 42324.34, 24234234234.322 , 9007199254740991n]

console.log(num);
console.log(num.toLocaleString());
console.log(num.toLocaleString('en-IN'));
console.log(num.toLocaleString('en-US'));
console.log(num.toLocaleString('en-EU'));
console.log(num.toLocaleString('de-DE'));

console.log(typeof num.toLocaleString());


console.log(num.toLocaleString('en-US',{
    style: 'currency',
    currency: 'USD'//INR EUR 
}));
