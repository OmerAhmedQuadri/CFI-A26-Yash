//Input readline and use it and take an inout year and check if it isleap year or not
import readlineSync from 'readline-sync'

let year = readlineSync.questionInt("Enter an year:")

if(year%4==0 && (year%100!=0 || year%400==0)){
    console.log(`${year} is an leap year`);
}else {
    console.log(`${year} is an not leap year`);
}