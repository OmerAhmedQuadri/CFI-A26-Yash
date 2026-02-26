const nums = [12,24,33,65,76,99]

const allNaturals = nums.every( (ele) => ele > 0)

console.log(allNaturals);

const arr = [24,54,45,6,99,100]

const valid = arr.every(ele => ele%3==0)

console.log(valid);


//-----------------------------------------------------------------------------------------------
const users = [
    { name : 'omer', role: 'admin', age : 21},
    { name : 'zayd', role: 'manager', age : 23 },
    { name : 'taha', role: 'user',age : 19},
]

const allAdults = users.every(usr => usr.age >= 18)

console.log(allAdults);
