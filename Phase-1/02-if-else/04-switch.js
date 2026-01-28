let age = 15

switch (age) {
    case 21:
        console.log('you can get a license and  can vote');
        
        break;
    case 18:
        console.log('you can get a license but cannot vote');
        break;

    case age >1://cannot compare in js single cased only
        console.log('you can get a license but cannot vote');
        break;

    default:
        console.log('you are not an adult');
        break;
}

//this is how you comapre in JS
switch (true) {
    case age>=21:
        console.log('you can get a license and  can vote');
        
        break;
    case age>=18:
        console.log('you can get a license but cannot vote');
        break;

    case age >=1://cannot compare in js single cased only
        console.log('you are a todler');
        break;

    default:
        console.log('you are not an adult');
        break;
}

let item = 'apple'

switch(item){
    case 'apple':
        console.log('apple');
    case 'orange':
        console.log('orange');
    default:
        console.log('idk');
}