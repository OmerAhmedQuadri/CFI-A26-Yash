class MyArray {
    #_data = []
    constructor(...items) {
        this.#_data = items
    }
    printArray() {
        return this.#_data
    }
    push(val) {
        this.#_data[this.#_data.length] = val
        return this.#_data
    }
    pop() {
        this.#_data.splice(this.#_data.length,1)
        return this.#_data
    }
    shift() {
        this.#_data.splice(0,1)
        return this.#_data
    }
    unshift(val) {
        for (let i = this.#_data.length; i > 0; i--) {
            this.#_data[i]=this.#_data[i-1]   
        }
        this.#_data[0] = val
        return this.#_data
    }
}

const arr = new MyArray(1,2,3,4,4,32,4)

console.log(arr.unshift(5));
