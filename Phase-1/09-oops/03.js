const user = {
    name: 'omer',
    age: 18,
    balance: 101,
    getDetails: function () {
        return (`Name: ${this.name}
Age: ${this.age}
Balance: ${this.balance}`);
    },
    updateBalance: function (bal) {
        if (bal < 0 || isNaN(bal) || typeof(bal) != 'number') return null
        this.balance = bal
        return this.balance
    },
    isAdult: function () {
        return this.age >= 18
    },
    updateAge: function (age) {
        if (age < 0 || isNaN(age) || typeof(age) != 'number') return null
        this.age = age
        return this.age
    },
    getBalance: function () {
        return this.balance
    }
}

console.log(user);
console.log(user.getDetails())
console.log(user.updateBalance("sfr"))
console.log(user.isAdult())
console.log(user.updateAge(23))
console.log(user.getBalance())
