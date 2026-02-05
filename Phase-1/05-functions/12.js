function getSum(num, sum = 0) {
    if(num == 0)
        return sum
    // console.log(num);
    // sum =sum + num
    // return getSum(--num, sum)
    return getSum(num-1, sum+num)
}
console.log(getSum(3));
