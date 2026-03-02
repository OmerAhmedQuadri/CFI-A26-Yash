// Q No : 13
// Question: Write a function using filter() to find all words longer than 4
// letters in an array of strings.
// Expected Output: [ 'Yashwanth', 'Haseeb', 'Fazal' ]

let arr = ['Yashwanth', 'Omer', 'Atif', 'Haseeb', 'Fazal']

function words(arr) {
    let newArr = arr.filter( (ele) => {
        if(ele.length > 4)
            return true
    })
    console.log(newArr);
}

words(arr)

