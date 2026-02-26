import chalk from 'chalk'

let rand = Math.random()

console.log(rand);

let success = rand > 0.5

console.log('Start');

let myPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
     if (success) {
         return resolve('Promise resolved')
     }
     return reject('promise rejected')
   }, 1000);
})

myPromise
    .then(res =>{
        console.log(chalk.greenBright(res));
    })
    .catch(error => {
        console.log(chalk.redBright(error));
    })

console.log('End');
