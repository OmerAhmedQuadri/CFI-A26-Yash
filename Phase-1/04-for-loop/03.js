let str = ''

for (let index = 0; index < 5; index++) {
    str = str + String.fromCharCode(65+index) + ' '
    console.log(str);
}