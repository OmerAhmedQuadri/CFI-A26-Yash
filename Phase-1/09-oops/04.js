class User {
    #balance = 0
    constructor(name, age, bal) {
        this.name = name
        this.age = age
        this.#balance = bal        
    }
    getBalance () {
        return this.#balance
    }
    deposit (amt) {
        if (amt < 0 || isNaN(amt) || typeof(amt) != 'number') return null
        this.#balance += amt
        return this.#balance
    }
    withdraw (amt) {
        if (amt < 0 || isNaN(amt) || typeof(amt) != 'number' || amt > this.#balance) return null
        this.#balance -= amt
        return this.#balance
    }
}

const user1 = new User('omer',21,101)
// user1.balance = 1000000//balance is private so creating a new garbage value js is loosely typed!!!
// console.log(user1.balance);
// user1.bal = 1000000//working
// console.log(user1.bal);
console.log(user1.getBalance());
console.log(user1.deposit(500));
console.log(user1.withdraw(50));
