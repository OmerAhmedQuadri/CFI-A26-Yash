import fs from 'fs'
// const fs = require('fs')

let temp
fs.readFile('file.txt', 'utf-8', (err, data) => {
    if(err) return console.log(err);
    console.log(data);
    temp = data

    fs.readFile('file2.txt', 'utf-8', (err,data2) => {
        if(err) return console.log(err);
        console.log(data2);
        temp += data2

        fs.writeFile('output.txt',temp, (err) => {
            if(err) return console.log(err);
            console.log('Write Success');
        })
    })
})

setTimeout(() => {
    console.log(temp);
    
}, 1000);