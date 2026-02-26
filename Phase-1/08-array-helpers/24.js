const fruits = ['banana','orange','apple','mango','grapes']


// const res = fruits.splice(1,3)
// const res = fruits.splice(1,2,'guava')
const res = fruits.splice(1,0,'guava','berries')

const index = fruits.indexOf('guava')
if(index != -1)
    fruits.splice(index,1)

console.log('result :', res);
console.log('fruits :', fruits);
