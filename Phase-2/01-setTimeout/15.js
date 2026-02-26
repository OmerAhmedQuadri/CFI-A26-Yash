console.log('Start');

let count = 3
const id = setInterval(() => {
    console.log(count--);
    if (!count) {
        clearInterval(id)
        console.log(id);
    }
}, 1000);
console.log(id);
console.log('End');