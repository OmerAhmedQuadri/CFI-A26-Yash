class User {
    #balance = 0
    static branch = 'Masab Tank'
    static ValidateDetails (name,age,city,bal) {
        if(typeof name != 'string' || name == null || name.trim().length<2 || (/\d/.test(name)))
            throw new Error("Please enter a valid name");
        if(typeof(age)!='number' || age<18 || isNaN(age) || age == null || age>100)
            throw new Error("Please enter a valid age");
        if(typeof city != 'string' || city == null || city.length<4 || (/\d/.test(city)))
            throw new Error("Please enter a valid city");
        if(!bal || typeof(bal)!='number' ||isNaN(bal) ||bal<0 || bal>10000)
            throw new Error("Plese enter a valid amount");
            
    }
    constructor(name,age,city,bal) {
        User.ValidateDetails(name,age,city,bal)
        this.name = name
        this.age = age
        this.city = city
        this.#balance = bal
    }
    getDetails() {
        console.log(`Name   : ${this.name}\nAge    : ${this.age}\nCity   : ${this.city}\nBranch :${User.branch}`);
    }
    updateName(name) {
        User.ValidateDetails(name,this.age,this.city,this.#balance)
        this.name = name
    }
    updateAge(age) {
        User.ValidateDetails(this.name,age,this.city,this.#balance)
        this.age = age
    }
    updateCity(city) {
        User.ValidateDetails(this.name,this.age,city,this.#balance)
        this.city = city
    }
    withdraw(bal){
        if(typeof(bal)!='number' || isNaN(bal) || bal<1 || bal>10000 || bal == null){
            throw new Error ('Please enter a valid amount to withdraw')
        }
        if(bal > this.#balance)
            throw new Error('Amoiunt cannot be greater than existiing balance');
        this.#balance -= bal
        return this.#balance
    }
    deposit(bal){
        if(typeof(bal)!='number' || isNaN(bal) || bal<1 || bal>10000 || bal == null){
            throw new Error ('Please enter a valid amount to withdraw')
        }
        this.#balance += bal
        return this.#balance
    }
}

const user1 = new User('Yash', 21, 'Hyderabad', 5000);
user1.updateName("Yashwanth ")
user1.getDetails();
console.log();

user1.updateAge(23)
user1.getDetails();
console.log();

user1.updateCity("Yashwanth ")
user1.getDetails();
console.log();

console.log("Remaining Balance:", user1.withdraw(1000))
console.log("Remaining Balance:", user1.deposit(10000))
