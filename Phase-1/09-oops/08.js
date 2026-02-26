class MyArray {
    constructor(arr) {
        this.arr = arr
    }

    push(x) {
        this.arr.push(x)
        return this.arr
    }
    pop() {
        this.arr.pop()
        return this.arr
    }
    shift() {
        this.arr.shift()
        return this.arr
    }
    unshift(x) {
        this.arr.unshift(x)
        return this.arr
    }
    length() {
        return this.arr.length
    }
    flat(x=Infinity) {
        return this.arr.flat(x)
    }
}

const arr1 = new MyArray([1,2,3,4,5,6,7,8,9,10])

console.log(arr1.push(11));
console.log(arr1.pop())
console.log(arr1.unshift(0))
console.log(arr1.shift())
console.log(arr1.length())
console.log(arr1.flat())