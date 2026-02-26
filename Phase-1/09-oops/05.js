class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    updateAge(age) {
        this.age = age
        return this.age
    }
    getDetails() {
        console.log('Name :', this.name, '\nAge :', this.age);
    }
}

// const dog = new Animal('Tommy',5)
// console.log(dog);
// dog.getDetails()

class Dog extends Animal {
    #sound = 'woooooffff'
    constructor(name, age, breed, sound) {
        super(name, age)
        this.breed = breed
        if(sound) this.#sound = sound
    }
    getDetail() {
        super.getDetails()
        console.log('Breed: ' + this.breed);

    }
    sound () {
        console.log(this.name, 'says', this.#sound);
    }
}

const dog = new Dog('tommy', 2, 'golden retriver', )
console.log(dog);
dog.getDetail()
dog.sound()