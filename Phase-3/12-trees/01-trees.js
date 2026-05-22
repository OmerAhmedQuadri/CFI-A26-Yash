class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
        this.arr = []
    }

    insert(value) {
        if (value == null || value == undefined)
            return

        const newNode = new Node(value)

        if (this.root == null) {
            this.root = newNode
            return
        }

        let current = this.root

        while (true) {
            if (value < current.value) {
                if (current.left == null) {
                    current.left = newNode
                    return
                }
                current = current.left
            }

            if (value > current.value) {
                if (current.right == null) {
                    current.right = newNode
                    return
                }
                current = current.right
            }
        }

    }

    search(value) {
        if (value == null || value == undefined)
            return false

        let current = this.root
        while (current == 0 || current) {
            if (value < current.value) {
                current = current.left
            }
            else if (value > current.value) {
                current = current.right
            }
            else
                return true
        }
        return false
    }

    preOrder() {

        this.arr = []
        const recursion = (node) => {
            if (node == null)
                return

            this.arr.push(node.value)
            recursion(node.left)
            recursion(node.right)
        }

        recursion(this.root)
        console.log(this.arr)

    }
    inOrder() {

        this.arr = []
        const recursion = (node) => {
            if (node == null)
                return

            recursion(node.left)
            this.arr.push(node.value)
            recursion(node.right)
        }

        recursion(this.root)
        console.log(this.arr)

    }
    postOrder() {

        this.arr = []
        const recursion = (node) => {
            if (node == null)
                return


            recursion(node.left)
            recursion(node.right)
            this.arr.push(node.value)
        }

        recursion(this.root)
        console.log(this.arr)
    }
    bfs() {
        const result = []
        const queue = []
        if(this.root!=null) queue.push(this.root)
        let index = 0
        while (index < queue.length) {
            const node = queue[index]
            result.push(node.value)
            index++
            if(node.left!=null)queue.push(node.left)
            if(node.right!=null)queue.push(node.right)
        }
    return console.log(result);
    
    }
}

const tree = new Tree()
tree.insert(50)
tree.insert(30)
tree.insert(70)
tree.insert(20)
tree.insert(40)
tree.insert(60)
tree.insert(85)
tree.insert(10)
tree.insert(25)
tree.insert(45)
tree.insert(55)
tree.insert(65)
tree.insert(80)
tree.insert(90)
console.log(tree);
console.log(tree.search(24));
console.log(tree.search(14));
console.log(tree.search(0));
// tree.preOrder()
// tree.inOrder()
// tree.postOrder()
tree.bfs()

//                 50
//             /         \
//            /           \
//          30             70
//         /  \         /      \
//       20    40      60       85
//      /  \     \    /  \     /  \
//    10   25    45  55   65  80   90 