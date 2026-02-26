console.log('lets start');

let id = setTimeout(() => {
    console.log('i am in middle');
}, 2000);
console.log(id);
clearTimeout(id)

console.log('end');
