// Q No : 41
// Question:  What is destructuring and how can you rename variables while
// destructuring an object?
// Expected Output: 


//destructuring is used to extract each property of an object sperately and assign it as per user choice

const person = { name: 'Alice', age: 25 };
const { name: personName, age: personAge } = person;

console.log(person);
console.log(personName);
console.log(personAge);

