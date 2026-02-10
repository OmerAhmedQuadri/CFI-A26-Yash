import read from 'readline-sync'
// takes 2parametera and returns the element from the array

// let arr = [1,2,3,4,5,6,7]
// let target = 9

function linearSearch(arr, target) {
    if(!(Array.isArray(arr)))
        return undefined
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==target){
            return i
        }
    }
    return -1
}

// console.log(linearSearch(arr,target));


(function test() {
    while(true){
        console.log('1.Linear Search\n2.exit');
        let choice = read.questionInt("Enter your choice: ")
        let arr = []
        
        switch (choice) {
            case 1:
                let size = read.questionInt("Enter the size of array: ")
                let arr = []

                for (let i = 0; i < size; i++) {
                    arr.push(read.questionInt(`Enter the ${i} element: `))
                }
                let target = read.questionInt("Enter the target value: ")

                let op = linearSearch(arr, target)

                if (op == -1) {
                    console.log("Element not found");
                    
                } else if (op == undefined) {
                    console.log("Please enter a valid array");
                } else {
                    console.log("element was found at: "+op);
                    
                }

                break;
        
            default:
                return
        }
    }
})()