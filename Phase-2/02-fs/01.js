import fs from 'fs'

console.log('Start');

fs.readFile('file.txt', 'utf8', (error, data) => {
    if(error) {
        console.log('Oops:',data);
        console.log(error);
        return
    }
    console.log(data);
    console.log(error);
})

console.log('End');
