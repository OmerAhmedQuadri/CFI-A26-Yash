const arr = ['apple', 'banana', 'orange']

let res = arr.join()//default ,
//apple,banana,orange

res = arr.join('\n')
res = arr.join('')
res = arr.join(' ')
res = arr.join('|')
res = arr.join(' | ')
res = arr.join(', ')
res = arr.join('\b')

console.log(res);
