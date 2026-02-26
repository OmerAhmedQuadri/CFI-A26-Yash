console.log('1');

setTimeout(() => {
   console.log('I am First');
}, 0);

console.log('11');

setTimeout(() => {
    console.log('I am Second');
}, 0);

console.log('111');

setTimeout(() => {
    console.log('I am Third');
}, 0);

setTimeout(() => {
    console.log('I am just getting stareted with adv js');
    setTimeout(() => {
        console.log('I am getting started again');
        
    }, 1000);
}, 2000);