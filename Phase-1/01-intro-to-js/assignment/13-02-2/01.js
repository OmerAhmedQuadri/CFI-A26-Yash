//1
// let car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     price: 2500000,
//     getInfo : function(){
//         return `${this.brand} ${this.model} (${this.year}) - ₹${this.price}`
//     }
// }

// console.log(car.getInfo());

//2 
// let calculator = {
//     num1: 0,
//     num2: 0,

//     setNumbers: function(a, b) {
//         this.num1 = a;
//         this.num2 = b;
//     },

//     add: function() {
//         return this.num1 + this.num2;
//     },

//     sub: function() {
//         return this.num1 - this.num2;
//     },

//     mul: function() {
//         return this.num1 * this.num2;
//     },

//     div: function() {
//         if (this.num2 === 0)
//             return '0 is invalid';
//         return this.num1 / this.num2;
//     }
// };

// calculator.setNumbers(1, 0);
// console.log(calculator.div());

//3
// const student = {
//   name: 'Rahul',
//   marks: [85, 90, 78, 92, 88],

//   getAverage: function() {
//     const total = this.marks.reduce((sum, mark) => sum + mark, 0);
//     return total / this.marks.length;
//   },

//   getHighest: function() {
//     return Math.max(...this.marks);
//   },

//   getLowest: function() {
//     return Math.min(...this.marks);
//   },

//   hasPassed: function() {
//     return this.getAverage() >= 50;
//   }
// };

// console.log("Name:", student.name);
// console.log("Average Marks:", student.getAverage());
// console.log("Highest Mark:", student.getHighest());
// console.log("Lowest Mark:", student.getLowest());
// console.log("Has Passed:", student.hasPassed());

//4
// let counter = {
//     count: 0,
//     increment: function () {
//         return this.count+=1
//     },
//     decrement: function () {
//         return this.count-=1
//     },
//     reset: function () {
//         return this.count = 0
//     },
//     getValue: function () {
//         return this.count
//     }
// }

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());

// console.log(counter.decrement());
// console.log(counter.decrement());

// counter.reset();
// console.log("After reset:", counter.getValue());

//5
// let product = {
//     name: 'Laptop',
//     price: 50000,
//     discount: 0,
//   applyDiscount(percentage) {
//     if (typeof percentage !== 'number' || percentage < 0 || percentage > 100) {
//       console.log('Invalid discount percentage. Must be between 0 and 100.');
//       return;
//     }
//     this.discount = percentage;
//   },

//   getFinalPrice() {
//     return this.price - (this.price * this.discount / 100);
//   },

//   removeDiscount() {
//     this.discount = 0;
//   }
// };

// console.log("Original Price:", product.getFinalPrice()); // 50000

// product.applyDiscount(10);
// console.log("After 10% Discount:", product.getFinalPrice()); // 45000

// product.removeDiscount();
// console.log("After Removing Discount:", product.getFinalPrice()); // 50000

//6
class BankAccount {
    #balance = 0
    constructor() {
        accountHolder        
    }
}