// Q No : 34
// Question: Construct a CLI application with the following operations menu:
// 0. Exit
// 1. Area of square
// 2. Area of rectangle
// 3. Area of circle
// Expected Output: 
// ====Areas====
// 0-Exit
// 1-Square
// 2-Rectangle
// 3-Circle
// Enter your choice: 0


import { question, questionInt } from "readline-sync";

function square() {
    let side = questionInt("Enter the length of the square: ")
    let area = side * side
    return `Area : ${area}`
}

function rectangle() {
    let length = questionInt("Enter the length of the rectangle: ")
    let breath = questionInt("Enter the breath of the rectangle: ")
    let area = length * breath
    return `Area : ${area}`
}

function circle() {
    let radius = questionInt("Enter the radius of the circle: ")
    let area = radius * 2 * 3.14
    return `Area : ${area}`
}

function main() {
    while (true) {
        console.log("====Areas====");
        console.log('0-Exit');
        console.log('1-Square');
        console.log('2-Rectangle');
        console.log('3-Circle');

        let choice = questionInt("Enter your choice: ")

        switch (choice) {
            case 0:
                return

            case 1:
                console.log(square())
                break
            case 2:
                console.log(rectangle())
                break
            case 3:
                console.log(circle())
                break
            default:
                console.log('Invalid Choice');
                break
        }
    }
}

main()