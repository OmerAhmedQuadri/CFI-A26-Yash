// // // // // const person = {
// // // // //     'full name': 'Yash',
// // // // //     age: 21,
// // // // //     a: 23,
// // // // // }
// // // // // console.log(person);
// // // // // person.name='reddy'
// // // // // console.log(person.name);
// // // // // let a = 'age'

// // // // // console.log(person.a);
// // // // // console.log(person[a]);
// // // // // console.log(person['a']);




// // // // // person.address = 'hyd'
// // // // // console.log(person);
// // // // // console.log(person.a);
// // // // // // console.log(person[address]);//throws error key must be given in ''
// // // // // console.log(person['address']);
// // // // // // console.log(person.fullname);//error no fullname 
// // // // // // console.log(person.'full name');//error no full name
// // // // // console.log(person['fullname']);//no such nameso undefined
// // // // // console.log(person['full name']);

// // // // // // person.fullname = person.name
// // // // // console.log(person);

// // // // // delete person.name
// // // // // console.log(person);

// // // // // let per_son = {
// // // // //     name: 'Yash',
// // // // //     age: 21
// // // // // }
// // // // // per_son.address = 'hyd'

// // // // // console.log(per_son);
// // // // let person = {
// // // //     name : 'Yash',
// // // //     age : 21,
// // // //     subject : 'js',
// // // //     //address : {
// // // //     // doorNumber : 12,
// // // //     // area : 'Masab Tank',
// // // // // }

// // // // }

// // // // let address = {
// // // //     doorNumber : 12,
// // // //     area : 'Masab Tank',
// // // // }

// // // // // console.log(person);
// // // // // console.log(person.address);
// // // // // console.log(person.address.doorNumber);
// // // // // console.log(person['address']['doorNumber']);

// // // // // let user ={
// // // // //     person: person,
// // // // //     addr: address
// // // // // }

// // // // let obj1 = {
// // // //     a: 1,
// // // //     b: 2,
// // // // }

// // // // let obj2 = {
// // // //     c: 3,
// // // //     d: 4,
// // // // }

// // // // // let obj3 = {
// // // // //     obj1 ,
// // // // //     obj2 :obj2.c,
// // // // // }



// // // // // console.log(obj3);




// // // let book = {
// // //     title : 'js',
// // //     pages : 500,
// // // }

// // // let author = {
// // //     author_name : 'RY',
// // //     author_age : 20
// // // }

// // // // let a ={
// // // //     book, author
// // // // }

// // // // console.log(a);


// // // let mergedobj = {
// // //     ...book, ...author
// // // }

// // // console.log(mergedobj);

// // let fruits = {
// //     1: 'mango',
// //     2: 'banana',
// //     3: 'kiwi',
// // }

// // let veggies = {
// //     4: 'tomato',
// //     5: 'potato',
// //     3: 'carrot'
// // }

// // // console.log(fruits);
// // // console.log(veggies);


// // let basket = {
// //     ...veggies,
// //     ...fruits 
// // }

// // console.log(basket);


// let obj1 = {
//     1:1,
//     2:2,

// }

// let obj2 = {
//     1:1,
//     2:2,

// }

// let obj3 = {
//     ...obj1,
//     obj1,
//     ...obj2

// }
// console.log(obj3);

user ={
        name: 'Atif',
        age: 20,
        subject: 'node'
    }

let arr1 = [
    {
        name: 'Yash',
        age: 21,
        subject: 'js'
    },
    user2={
        name: 'Reddy',
        age: 22,
        subject: 'py'
    }, user
    // {
    //     name: 'Atif',
    //     age: 20,
    //     subject: 'node'
    // }
]

// console.log(arr1);
// console.table(arr1)

// arr1.pop()
console.log(arr1);
console.log(user2);
// console.log(arr1.user2);
// console.log(arr1[user2]);///garbage statement


