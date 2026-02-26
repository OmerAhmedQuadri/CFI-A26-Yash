// import {questionInt} from 'readline-sync'

// let timer = questionInt('Enter the time for stopwatch: ')

// let temp = timer
// for (let i = 1; i <= timer; i++) {
//     setTimeout(() => {
//         console.log(temp--);
//     }, i*1000);
// }

// import {questionInt} from 'readline-sync'

// let timer = questionInt('Enter the time for stopwatch: ')

// for (let i = 1; i <= timer; i++) {
//     setTimeout(() => {
//         console.log(timer - i +1);
//     }, (timer-i)*1000);
// }

import {questionInt} from 'readline-sync'

let timer = questionInt('Enter the time for stopwatch: ')

let temp = timer
for (let i = timer; i > 0; i--) {
    setTimeout(() => {
        console.log(i);
    }, (timer - i + 1)*1000);
}