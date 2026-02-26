class Stack {
    #data = []
    height = 0
    limit = 5
    constructor() {

    }

    top () {
        if(this.height==0){
            console.log('Stack is empty');
            return
        }
        console.log('Top:');
        console.log(this.#data[this.height-1]);
    }

    pop () {
        if(this.height == 0) {
            console.log('Stack is empty');
            return
        }
        this.#data.pop()
        return this.height--
    }

    push(val) {
        if(this.height >= this.limit){
            console.log('Stack is full');
            return
        }
        this.#data[this.height] = val
        this.height++
    }

    print() {
        if (this.height == 0) {
            console.log('Stack is empty');
            return
        }
        console.log('Stack: ');
        for (let i = this.height - 1; i >= 0; i--) {
            console.log('----');
            console.log('|'+this.#data[i]+'|');
        }
        console.log('----');
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.top()
stack.print()