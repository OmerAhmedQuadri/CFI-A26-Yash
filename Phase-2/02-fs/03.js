import fs from 'fs'

console.log('Start');

fs.writeFile('output.txt', 'jdlfxmozsiv', (error) => {
    if(error) {
        console.log('Oops:');
        console.log(error);
        return
    }
    console.log('Write Success!');
    
})

console.log('End');

