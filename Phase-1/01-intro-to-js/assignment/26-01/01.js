//1
let myInfo = [
    name = 'Yashwanth',
    age = 21,
    city = 'Hyderabad',
    boolean = true,
]

//2
console.log(myInfo[1]);

//3
myInfo[2] = 'Chennai'

//4
let colors = [
    'black',
    'blue',
    'red'
]

colors.push('orange')
colors.push('brown')

console.log(colors);

//5
let numbers = [5, 10, 15, 20, 25]

let x = numbers.pop()

console.log(numbers, '\n'+x);

//6
//Prediction
//length = 4
//40
let arr = [10, 20, 30, 40]
console.log(arr.length)
console.log(arr[arr.length - 1])

//7
let fruits = ['Mango', 'Apple', 'Banana']
console.log(fruits.shift())
console.log(fruits);

//8
let animals = ['Lion', 'Tiger']
animals.unshift('Cat')
animals.unshift('Dog')
console.log(animals);


//9
numbers = [5, 10, 15, 20, 25]
numbers[numbers.length]= 30
console.log(numbers);

//10
let items = ['pen', 'book', 'bag']
items.push('pencil')
items.pop()
items.unshift('eraser')
console.log(items)//['eraser', 'pen', 'book', 'bag']
console.log(items.length)//4

//11
let myFruits = ['Mango', 'Apple', 'Banana']
let myVeggies = ['Carrot', 'Potato', 'Radish']
let basket = [myFruits,myVeggies]

console.log(basket);

//12
console.log(basket[0][1]);

//13
fruits = ['apple', 'mango', 'banana']
veggies = ['tomato', 'potato']
basket = [fruits, veggies]

console.log(basket.length)//2
console.log(basket[0].length)//3
console.log(basket[1].length)//2

//14
let data = [10, 'hello', ['a', 'b', 'c']]
console.log(data[2][1]);

//15
arr = [5, 'test', ['x', 'y', 'z']]
console.log(arr[2])//['x', 'y', 'z']
console.log(arr[2][0])//x
console.log(arr[2][2])//z

//16
let studentData = [
    [ 'Ali', 20, 'Delhi'],
    ['Sara', 22, 'Mumbai'],
    ['John', 21, 'Bangalore']
]

console.log(studentData[1][2]);

//17
console.log(studentData[2][1]);

//18
fruits = ['apple', 'mango', 'banana']
veggies = ['tomato', 'potato']
basket = [fruits, veggies]

console.log(basket)

basket=basket.flat()

console.log(basket);

//19
let arr1 = [['a', 'b'], ['c', 'd']]
let arr2 = ['a', 'b', 'c', 'd']
/*arr1 is an nested 1D array with two arrays as elements in it one array[0] containing a and b
and second array[1] containing c and d
While arr2 is an a 1D array with 4 individual elements a, b, c and d*/

//20
let table = [
    [11, 12],
    [21, 22],
    [31, 32],
]

console.log(table[1][0]);

//21
arr1 = [10, 20, 30]
arr2 = arr1
arr1[0] = 100
console.log(arr1)//[100, 20, 30]
console.log(arr2)//[100, 20, 30]
//In JavaScript for Non Primitive Datatypes it only stores the reference and not each value seperately that is they share the same memory

//22
arr1 = [5, 10, 15]
arr2 = arr1
arr2.push(20)
console.log(arr1)//[5, 10, 15, 20]
console.log(arr2)//[5, 10, 15, 20]

//23
let original = [1, 2, 3]
let duplicate = [...original]
duplicate.pop()

console.log(original);
console.log(duplicate);

//24
arr1 = [100, 200]
arr2 = [...arr1]
arr2[0] = 999
console.log(arr1[0])//100
console.log(arr2[0])//999

//25
arr1 = [1, 2, 3]
arr2 = [...arr1]
console.log(arr1 == arr2)//false
console.log(arr1[0] == arr2[0])//true
//arr1 and arr2 are different as they do not share the same memory because of the spreadoperator used they are seen as differnt elemnts
//whereas below we are comparing the values inside the array to check if they are equal

//26
arr1 = [1, 2, 3]
arr2 = [1, 2, 3]
console.log(arr1 == arr2)
//false same as the above they do not share the same memory

//27
arr2 = arr1        // Method 1
arr2 = [...arr1]   // Method 2
//Method 1 create an array arr1 using the same refernce in shared memory
//Method 2 creates an image of elements of arr2 in arr1 in an new space

//28
arr1 = [1, 2, 3]
arr2 = [...arr1]
arr3 = arr1
arr3.push(4)

console.log(arr1);
console.log(arr2);

//29
let student = {
    name: 'Yashwanth',
    age: 21,
    city:'Hyderabad',
}

console.log(student);

//30
console.log(student.name);

//31
student.marks=85

console.log(student);

//32
student['full name'] = 'Yashwanth Reddy'
//console.log(student);

console.log(student['full name']);

//33
const person = {
  name: 'Omer',
  age: 21
}

person.city = 'Hyderabad'
console.log(person)//{ name: 'Omer', age: 21, city: 'Hyderabad' }

//34
let car = {
    brand:'Tesla',
    model:'Model X',
    year:2022
}
delete car.year
console.log(car);

//35
const user = {
  'user name': 'john123',
  'email address': 'john@example.com'
}

console.log(user['user name'])//john123
console.log(user['email address'])//john@example.com

//36
let phone  = {
    brand: 'iPhone',
    price: 27000,
    color: 'blue',
}

console.log(phone);

phone.price=25000

console.log(phone);

//37
per_son = {
  'full name': 'Omer Ahmed',
  age: 21
}//In JS objects are denoted using {} to seperate them from other other datatypes preventing from unlikely and unexpected errors

//38
let book ={
    title:'JS',
    author:'RY',
    pages:500,
    isAvailable:true
}
console.log(book);

//39
const obj = { name: 'Omer' }
console.log(obj.age)//undefined
//undefined as is the datatype returned for any empty value or path in JS instead of null or others

//40
book ={
    title:'JS',
    author:'RY',
    pages:500,
    isAvailable:true,
    signed:true
}

book.copiesavailable=20
book.type='paperback'
//console.log(book);
book.signed=false
//console.log(book);
delete book.copiesavailable
console.log(book);

//41
arr1 = [
    {name:'doritos', price:30, inStock:100},
    {name:'lays', price:20, inStock:150},
    {name:'bingo', price:10, inStock:200},
]
console.table(arr1)

//42
console.log(arr1[1].price);

//43
let obj1 = {
    key: 'value',
    keychain: 'batman',
    array:['1',2]
}
console.log(obj1.array[0]);

//44
fruits = ['apple', 'mango']
veggies = ['tomato', 'potato']
basket = [fruits, veggies]

basket[0].push('banana')
console.log(fruits)//['apple', 'mango', 'banana]
console.log(basket[0])//['apple', 'mango', 'banana]

//45
let studentObjects = {
    name: "Yashwanth",
    rollNumber : 1204,
    marks : [50,60,70]
}

console.log('Average Marks:',(studentObjects.marks[0]+studentObjects.marks[1]+studentObjects.marks[2])/3);

//46
let dict1 = {1:1, 2:2}
let dict2 = {1:1, 2:2}
console.log(dict1==dict2);//false
//as reference is different and JS does not recognize them as as equal

//47
arr = [1, 2, 3]
arr.push(4)
arr[0] = 10
arr.pop()
console.log(arr)//[10, 2, 3]
console.log(arr.length)//3

//48
let school ={
    name: 'The Hacking School',
    address : {
        city : 'Masab Tank',
        pincode : 500006
    },
    students : ['Yashwanth', 'Fazal', 'Haseeb', 'Atif']
}

console.log(school.address.city);

//49
// Case 1
obj2 = obj1
//In this obj2's reference is given to obj1 if one of them is manuplated the other is also changed as they share the same memory and reference

// Case 2  
obj2 = { ...obj1 }
//here each element is copied and given as a new element with different address

//50
let people = [
  {
    name: 'Yashwanth',
    hobbies: ['coding', 'travel', 'music']
  },
  {
    name: 'Anas',
    hobbies: ['coding', 'travel']
  }
]

console.log(people[0].hobbies[1])
