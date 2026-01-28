//1
let temperature = 35

if (temperature > 30)
    console.log("It's hot!");

//2
let age = 16

if (age >= 18)
    console.log("You can drive");

//3
let num = 0

if (num) {
    console.log('Number exists')
}

console.log('End of code')
//End of code
//0 is considered as an binary notation for false making the condition false

//4
let username = "admin"

if (username) {
    console.log('Welcome ' + username)
}

console.log('Rest of the code')
//Welcome admin
//Rest of the code

//5
let score = 95

if (score >= 90)
    console.log("Excellent!");

//6
let price = 100

if (price >= 50) {
    console.log('Expensive item')
}
//Expensive item

//7
let isRaining = true

if (isRaining == true)
    console.log("Take an umbrella");

//8
let name = ""

if (name) {
    console.log('Hello ' + name)
}

console.log('Program ended')
//Program ended

//9
let marks = 85

if (marks >= 40)
    console.log("Pass");

//10
num = 50

if (num > 30) 
    console.log('Greater than 30')//inside if when statements passed in {} there are considered the block or body of condition if non specified only the next statement is part of the if condition
    console.log('This is a big number')//outside if

console.log('Done')//outside if
//Greater than 30
//This is a big number
//Done
//1 line in if condition

//11
age = 15

if (age >= 18)
    console.log("Adult");
else
    console.log("Minor");

//12
num = 7

if (num >= 10) {
    console.log('Number is greater than or equal to 10')
} else {
    console.log('Number is less than 10')
}
//Number is less than 10

//13
let number  = 8
if (number%2 == 0)
    console.log("Even");
else
    console.log("Odd");

//14
username = 'omer'

if (username == 'admin') {
    console.log('Hello admin')
} else {
    console.log('Hello user')
}
//Hello user

//15
let password = "pass123"

if (password == 'admin123')
    console.log("Login successful");
else
    console.log("Wrong password");

//16
marks = 35

if (marks >= 40) {
    console.log('Pass')
} else {
    console.log('Fail')
}
//Fail

//17
let a = 1
let b = 20

if (a > b)
    console.log(a);    
else
    console.log(b);

//18
temperature = 25

if (temperature > 30) {
    console.log('Hot weather')
} else {
    console.log('Pleasant weather')
}
//Pleasant weather

//19
num = -5

if (num >0)
    console.log("Positive" );
else
    console.log("Negative or Zero");

//20
name = 'Omer'

if (true) {
    let name = 'Ahmed'
    console.log(name)
}

console.log(name)
//Ahmed
//Omer
//When include {} an variable is declared JS has a concept of scope it is treated as an local variable that is manuplated
//local variable has more preference over global variable when in an block

//21
marks = 75

if (marks >= 90)
    console.log("A Grade");    
else if (marks >= 70)
    console.log("B Grade");    
else if (marks >= 50)
    console.log("C Grade");
else
    console.log("Fail");

//22
name = 'fahad'

if (name == 'omer') {
    console.log('Hello omer')
} else if (name == 'fahad') {
    console.log('Hello fahad')
} else {
    console.log('Hello stranger')
}
//Hello fahad

//23
let day = 3

if (day ==1)
    console.log('Monday');    
else if (day ==2)
    console.log('Tuesday');    
else if (day ==3)
    console.log('Wednesday');    
else if (day ==4)
    console.log('Thursday');    
else if (day ==5)
    console.log('Friday');    
else if (day ==6)
    console.log('Saturday');    
else
    console.log('Sunday');

//24
num = 15

if (num > 20) {
    console.log('Greater than 20')
} else if (num > 10) {
    console.log('Greater than 10')
} else if (num > 5) {
    console.log('Greater than 5')
} else {
    console.log('5 or less')
}
//Greater than 10
//if checks for the first truthy condition and exits out of the if branch

//25
age = 35

if (age < 13)
    console.log("Child");
else if (age < 20)
    console.log("Teenager");
else if (age < 60)
    console.log("Adult");    
else
    console.log("Senior" );

//26
price = 1500

let discount = 0

if (price >= 5000) {
    discount = 30
} else if (price >= 2000) {
    discount = 20
} else if (price >= 1000) {
    discount = 10
} else {
    discount = 5
}

console.log('Your discount is ' + discount + '%')
//Your discount is 10%

//27
score = 0

if (score == 0)
    console.log("No score yet");
else if (score < 50)
    console.log("Fail");    
else if (score < 75)
    console.log("Pass");
else
    console.log("Excellent");

//28
temperature = 15

if (temperature < 0) {
    console.log('Freezing')
} else if (temperature < 10) {
    console.log('Cold')
} else if (temperature < 20) {
    console.log('Cool')
} else if (temperature < 30) {
    console.log('Warm')
} else {
    console.log('Hot')
}
//Cool

//29
price = 3500
discount = 0

if (price >= 5000)
    discount = 25
else if (price >= 3000)
    discount = 15
else if (price >= 1000)
    discount = 10

console.log('Your discount is ' + discount + '%')

//30
let bmi = 22

if (bmi < 18.5)
    console.log("Underweight");    
else if (bmi < 25)
    console.log("Normal");    
else if (bmi < 30)
    console.log("Overweight");    
else
    console.log("Obese");

//31
name = 'yash'
marks = 75

if (name == 'yash') {
    if (marks > 90) {
        console.log('Yash scored excellent')
    } else if (marks > 60) {
        console.log('Yash passed')
    } else {
        console.log('Yash failed')
    }
}
//Yash passed

//32
username = "admin"
password = "1234"

if (username == 'admin') {
    if (password == "1234") {
        console.log("Login successful");        
    } else {
        console.log("Wrong password");        
    }
} else {
    console.log("User not found");
}

//33
age = 25
let hasLicense = true

if (age >= 18) {
    if (hasLicense) {
        console.log('You can drive')
    } else {
        console.log('You need a license')
    }
} else {
    console.log('You are too young')
}
//You can drive

//34
age = 15
let hasParent = true

if (age >= 18) {
    console.log("Ticket confirmed");
} else if (hasParent) {
    console.log("Ticket confirmed with parent");
} else {
    console.log("Need parent permission");
}


//35
marks = 85
let attendance = 90

if (marks >= 80 && attendance >= 85)
    console.log('Excellent student')

//36
num = 10

if (num > 0) {
    if (num % 2 === 0) {
        console.log('Positive even number')
    } else {
        console.log('Positive odd number')
    }
} else {
    console.log('Negative or zero')
}
//Positive even number

//37
marks = 78
attendance = 70

if (marks >= 40) {
    if (attendance >= 75) {
        console.log('Pass');
    } else {
        console.log("Detained due to low attendance");
    }    
} else {
    console.log("Fail");    
}

//38
let isCitizen = true

if (age >= 18&& isCitizen)
        console.log('Can vote')
//Using && opertor to consolatidate the code into a shoerter and more clean code

//39
a = 20
b = 50
let max

if (a > b) {
    max = a
} else {
    max = b
}

console.log(`Max value is: ${max}`)
//Max value is: 50

//40
name = "Omer"
age = 25

console.log(`My name is ${name} and I am ${age} years old`);

//41
price = 5000
discount = 20

console.log(`Price: ${price}, Discount: ${discount}%, Final: ${price - (price * discount / 100)}`)
//Price: 5000, Discount: 20%, Final: 4000

//42
let item = "Laptop"
price = 50000
let quantity = 2

console.log(`Item: ${item}, Price: ${price}, Quantity: ${quantity}, Total: ${price*quantity}`);

//43
console.log('Max value is: ' + max)//prints Max value is: max
//here by using + we are not adding any additional space to the string

console.log(`Max value is: ${max}`)//same output
//here we are using stringliterals to print value inside ``backticks but this way backticks must be used instead of '' or ""

//44
item = 'carrot'

switch (item) {
    case 'apple':
        console.log('It is a fruit')
        break
    case 'carrot':
        console.log('It is a vegetable')
        break
    case 'tomato':
        console.log('It is a vegetable')
        break
    default:
        console.log('Unknown item')
}
//It is a vegetable

//45
day = 3

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Sunday');
        break;
}

//46
num = 2

switch (num) {
    case 1:
        console.log('One')
    case 2:
        console.log('Two')
    case 3:
        console.log('Three')
    default:
        console.log('Other')
}
//break help exit(break)out of the code block in switch case if break is not mentioned it checks at each case and value id truthy it executs all further cases until it finds break or is at defaukt 
//Two
//Three
//Other

//47
let grade = 'B'

switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    case 'F':
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade"); 
        break;
}

//48
let color = 'red'

switch (color) {
    case 'red':
    case 'pink':
        console.log('Shades of red')
        break
    case 'blue':
    case 'navy':
        console.log('Shades of blue')
        break
    default:
        console.log('Other color')
}
//Shades of red

//49
let month = 5

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('Mar');
        break;
    case 4:
        console.log('Apr');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('Aug');
        break;
    case 9:
        console.log('Sept');
        break;
    case 10:
        console.log('Oct');
        break;
    case 11:
        console.log('Nov');
        break;
    default:
        console.log('Dec');
        break;
}

//50
//switch can be used to get the exact truthy value and have a chance to visit multiple cases and execute instead of single condition and break from the block

//51
let fruit = 'apple'

switch (fruit) {
    case 'apple':
    console.log('Red fruit')        
        break;
    case 'banana':
    console.log('Yellow fruit')
        break;
    case 'orange':
    console.log('Orange fruit')
        break;
    default:
    console.log('Unknown fruit')
        break;
}

//52
marks = 90

marks >= 80 ? console.log('Passed') : console.log('Failed')
//Passed

//53
age = 20
let status


age >= 18 ? status = 'Adult' : status = 'Minor'

console.log(status);

//54
num = 7
let result = num % 2 === 0 ? 'Even' : 'Odd'
console.log(result)//Odd

//55
num = -5
result = num >= 0 ? 'Positive' : 'Negative'

//56
price = 1200
discount = price >= 1000 ? 20 : 10
console.log(`Discount: ${discount}%`)
//Discount: 20%

//57
username = "admin"
message = username == "admin" ? "Welcome Admin" : "Welcome Guest"
console.log(message);

//58
marks = 85
grade = marks >= 90 ? 'A' : marks >= 80 ? 'B' : marks >= 70 ? 'C' : 'F'
console.log(grade)//B

//59
//It is not as readable asother control statements and when making nested or complex operation very hardto completein an singlelineunlike others allows multiple blocks

//60
score = 55
result = score >= 50 ? 'Pass' : 'Fail'
console.log(result)

//61
let num1 = 10, num2 = 5, operator = '+'

switch (operator) {
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
        console.log(num1/num2);
        break;
    case '%':
        console.log(num1%num2);
        break;
    default:
        console.log('Invalide Operator');
        
        break;
}

//62
let light = 'yellow'

switch (light) {
    case 'red':
        console.log('Stop');
        break;
    case 'yellow':
        console.log('Get ready');
        break;
    case 'green':
        console.log('Go');
        break;
    default:
        console.log('Invalid value');
        break;
}

if (light == 'red')
    console.log('Stop');
else if (light == 'yellow')
    console.log('Get ready');
else
    console.log('Go');

//63
let balance = 5000
let withdrawAmount = 3000

if (withdrawAmount <= balance) {
    balance = balance - withdrawAmount
    console.log(balance);
} else {
    console.log('Insufficient balance');
}

//64
let year = 2024

if (year % 4 == 0)
    console.log('Leap year');
else
    console.log('Not Leap year');

//65
password = "pass123"

if (password.length >= 12)
    console.log('Strong');
else if (password.length >= 8)
    console.log('Medium');
else
    console.log('Weak');

//66
price = 2500
let isPremiumMember = false

if (isPremiumMember == true)
    discount = 30
else if (price >= 5000)
    discount = 25
else if (price >= 3000)
    discount = 20
else if (price >= 1000)
    discount = 15
else
    discount = 10

let finalPrice = price - (price * discount / 100)
console.log('Price:', finalPrice)

//67
marks = 75
attendance = 80
let hasFee = true

if (marks >= 40 && attendance >= 75 && hasFee == true) {
    console.log('Eligible');    
} else {
    console.log('Not Eligible');

}

//68
num = 0

if (num === 0) {
    console.log('Zero');
} else if (num > 0) {
    console.log(num % 2 === 0 ? 'Positive Even' : 'Positive Odd');
} else {
    console.log(num % 2 === 0 ? 'Negative Even' : 'Negative Odd');
}

//69
let playerChoice = "rock"
let computerChoice = "scissors"

if ((playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "rock"))
    console.log('You win');
else if (playerChoice == computerChoice)
    console.log('Draw');
else
    console.log('Computer Wins');

//70
let hour = 14

if (hour > 5 && hour<= 12)
    console.log('Good morning');
else if (hour > 12 && hour<= 17)
    console.log('Good afternoon');
else if (hour > 17 && hour<= 21)
    console.log('Good evening');
else
    console.log('Good night');