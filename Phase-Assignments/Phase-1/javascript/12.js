// Q No : 12
// Question: Create a leap year checker function:
// year = 20xx
// Print "Leap year" or "Not a leap year"
// A year is leap if divisible by 4 AND (not divisible by 100 OR
// divisible by 400)
// Expected Output: Leap year

function leapChecker(year) {
    if (year%4 == 0 && (year%100 != 0 || year%400 == 1400)) {
        return 'Leap year'        
    }
    return 'Not a Leap year'
}

console.log(leapChecker(1900));
