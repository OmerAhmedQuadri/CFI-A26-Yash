// //1
// // let i = 0
// // let j = 0

// // while (i < 3) {
// //     while (j < 2) {
// //         console.log('i:', i, 'j:', j)
// //         j++
// //     }
// //     i++
// // }

// //My Prediction
// //00
// //01
// //10
// //11
// //20
// //21

// //Output
// //i: 0 j: 0
// //i: 0 j: 1

// //j is not redefined to 0 orany other number or the thej loop is only executed once and i is incremented by there is no log to print the value final i = 3

// //2
// // let i = 0

// // while (i < 3) {
// //     let j = 0
// //     while (j < 2) {
// //         console.log('i:', i, 'j:', j)
// //         j++
// //     }
// //     i++
// //}

// //i: 0 j: 0
// //i: 0 j: 1
// //i: 1 j: 0
// //i: 1 j: 1
// //i: 2 j: 0
// //i: 2 j: 1

// //Here the jis redefined to 0 so that the nested j loop is executed each time when i is incremented

// //3
// // let i = 1

// // while (i <= 3) {
// //     let j = 1
// //     while (j <= 2) {
// //         console.log(i, 'x', j, '=', i * j)
// //         j++
// //     }
// //     i++
// // }
// //1x1=1
// //1x1=1
// //1x1=1
// //1x1=1
// //1x1=1
// //1x1=1

// //4
// // let i=0 

// // while (i<2) {
// //     let j=0
// //     while (j<3) {
// //         console.log(`Outer: ${i}, Inner: ${j}`);
// //         j++
// //     }
// //     i++
// // }

// //5
// // let i = 0

// // while (i < 2) {
// //     let j = 0
// //     while (j < 3) {
// //         console.log('*')
// //         j++
// //     }
// //     console.log('---')
// //     i++
// // }

// // *
// // *
// // *
// // ---
// // *
// // *
// // *
// // ---

// //6
// // let i = 0

// // while (i < 4) {
// //     let j = 0
// //     while (j < 3) {
// //         console.log('Hello')
// //         j++
// //     }
// //     i++
// // }
// //12
// //total of iiterations multiplied by total of j iterations

// //7
// // let i=1

// // while (i<5) {
// //     let arr =[]
// //     let j = 1
// //     while (j<5) {
// //         arr.push(i*j)
// //         j++
// //     }
// //     console.log(arr);
// //     i++
// // }

// //8
// // let i = 1

// // while (i <= 2) {
// //     console.log('Outer loop:', i)
// //     let j = 1
// //     while (j <= 3) {
// //         console.log('  Inner loop:', j)
// //         j++
// //     }
// //     i++
// // }

// //Outer loop: 1
// //  Inner loop:1
// //  Inner loop:2
// //  Inner loop:3
// //Outer loop: 2
// //  Inner loop:1
// //  Inner loop:2
// //  Inner loop:3


// //9
// // let i = 0
// // while (i < 3) {      // Outer loop runs 3 times
// //     let j = 0
// //     while (j < 3) {  // Inner loop runs 3 times
// //         console.log(i, j)
// //         j++
// //     }
// //     i++
// // }
// // // Total prints: 9

// //10
// //Nested loop are loop inside loops which are exectued when there is a true condition n number of times

// //11
// // let i = 0

// // while (i < 3) {
// //     let j = 0
// //     let row = ''
// //     while (j < 5) {
// //         row = row + '* '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }
// //* * * * * 
// // * * * * * 
// // * * * * * 

// //12
// // let i = 0

// // while (i < 4) {
// //     let j = 0
// //     let row = ''
// //     while (j < 6) {
// //         row = row + '* '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }

// //13
// // let i=1
// // while (i<=3) {
// //     let j=1
// //     let str=''
// //     while (j<=4) {
// //         str=str+i+' '
// //         j++        
// //     }
// //     console.log(str);
// //     i++
// // }

// //14
// // let i = 1
// // while (i<=5) {
// //     let j=1
// //     let str=''
// //     while (j<=5) {
// //         str=str+"# "
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// //15
// // let i = 1

// // while (i <= 3) {
// //     let j = 1
// //     let row = ''
// //     while (j <= 4) {
// //         row = row + i + ' '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }
// // 1 1 1 1 
// // 2 2 2 2 
// // 3 3 3 3 

// //16
// // let i = 1

// // while (i <= 4) {
// //     let j = 1
// //     let row = ''
// //     while (j <= 5) {
// //         row = row + i + ' '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }

// //17
// // let i = 1

// // while (i <= 3) {
// //     let j = 1
// //     let row = ''
// //     while (j <= 5) {
// //         row = row + j + ' '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }

// //18
// // let i=0
// // while (i<5) {
// //     let j=0
// //     let str=''
// //     while (j<5) {
// //         if ((i+j)%2==0) {
// //             str=str+'* '            
// //         } else {
// //             str=str+'# '
// //         }
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// //19
// // let i = 1

// // while (i <= 4) {
// //     let j = 1
// //     let row = ''
// //     while (j <= i) {
// //         row = row + '* '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }
// // * 
// // * * 
// // * * * 
// // * * * * 

// //20
// // let i = 1

// // while (i <= 5) {
// //     let j = 1
// //     let row = ''
// //     while (j <= i) {
// //         row = row + '* '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }

// //21
// // let i = 1

// // while (i <= 5) {
// //     let j = 1
// //     let row = ''
// //     while (j <= i) {
// //         row = row + j+' '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }

// //22
// // let i = 1

// // while (i <= 5) {
// //     let j = 1
// //     let row = ''
// //     while (j <= i) {
// //         row = row + i+' '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }

// //23
// // let i = 5

// // while (i >= 1) {
// //     let j = 1
// //     let row = ''
// //     while (j <= i) {
// //         row = row + '* '
// //         j++
// //     }
// //     console.log(row)
// //     i--
// // }
// // * * * * * 
// // * * * * 
// // * * * 
// // * * 
// // * 

// //24
// // let i = 5

// // while (i >= 1) {
// //     let j = 1
// //     let row = ''
// //     while (j <= i) {
// //         row = row + '* '
// //         j++
// //     }
// //     console.log(row)
// //     i--
// // }

// //25
// // let i = 1

// // while (i <= 5) {
// //     let j = 5
// //     let row = ''
// //     while (j >= i) {
// //         row = row + j +' '
// //         j--
// //     }
// //     console.log(row)
// //     i++
// // }

// // 26
// // let i=0
// // while (i<5) {
// //     let j=0
// //     let str=''
// //     while (j<=i) {
// //         str=str+ String.fromCharCode(65+j)+' '
// //         j++
// //     }
// //     console.log(str);

// //     i++
// // }

// //27

// // let i=0
// // while (i<6) {
// //     let j=0
// //     let str=''
// //     while (j<=i) {
// //         str=str+'# '
// //         j++
// //     }
// //     console.log(str);

// //     i++
// // }

// //28

// // let i=1
// // while (i<7) {
// //     let j=0
// //     let str=''
// //     while (j<i) {
// //         str=str + i + ' '
// //         j++
// //     }
// //     console.log(str);

// //     i++
// // }

// //29
// // let i = 1

// // while (i <= 4) {
// //     let j = 1
// //     let row = ''
// //     while (j <= i) {
// //         row = row + j + ' '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }
// // 1 
// // 1 2 
// // 1 2 3 
// // 1 2 3 4 

// //30

// // let i=0
// // let x=1
// // while (i<4) {
// //     let j=0
// //     let str = ''
// //     while (j<=i) {
// //         str=str+x+' '
// //         x++
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// //31
// // let i = 1

// // while (i <= 5) {
// //     let j = 1
// //     let row = ''
// //     while (j <= i) {
// //         row = row + j + ' '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }

// //32
// // let i = 5

// // while (i >= 1) {
// //     let j = 5
// //     let row = ''
// //     while (j >= i) {
// //         row = row + j + ' '
// //         j--
// //     }
// //     console.log(row)
// //     i--
// // }

// //33
// // let i = 1
// // let num = 1

// // while (i <= 3) {
// //     let j = 1
// //     let row = ''
// //     while (j <= i) {
// //         row = row + num + ' '
// //         num++
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }
// // 1 
// // 2 3 
// // 4 5 6 

// //34
// // let i = 1
// // while (i<=4) {
// //     let j=2
// //     let str=''
// //     while (j<=i*2) {
// //         str=str+j+' '
// //         j+=2
// //     }
// //     console.log(str);    
// //     i++
// // }

// //35
// // let i = 1
// // while (i<=5) {
// //     let j=1
// //     let str=''
// //     while (j<=i*2) {
// //         str=str+j+' '
// //         j+=2
// //     }
// //     console.log(str);    
// //     i++
// // }

// //36
// // let i = 1
// // while (i<=4) {
// //     let j=5
// //     let str=''
// //     while (j<=i*5) {
// //         str=str+j+' '
// //         j+=5
// //     }
// //     console.log(str);    
// //     i++
// // }

// //37
// // let i=5
// // while (i>=1) {
// //     let j=10
// //     let str=''
// //     while (j>=i+5) {
// //         str=str+j+' '
// //         j--
// //     }
// //     console.log(str);

// //     i--
// // }

// //38
// // let i = 1
// // while (i<=4) {
// //     let j = 1
// //     let str = ''
// //     while (j<=i) {
// //         str=str+j**2+' '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// //39
// // let i = 1

// // while (i <= 3) {
// //     let j = 1
// //     while (j <= 5) {
// //         console.log(i + ' x ' + j + ' = ' + (i * j))
// //         j++
// //     }
// //     console.log('---')
// //     i++
// // }
// // 1 x 1 = 1
// // 1 x 2 = 2
// // 1 x 3 = 3
// // 1 x 4 = 4
// // 1 x 5 = 5
// // ---
// // 2 x 1 = 2
// // 2 x 2 = 4
// // 2 x 3 = 6
// // 2 x 4 = 8
// // 2 x 5 = 10
// // ---
// // 3 x 1 = 3
// // 3 x 2 = 6
// // 3 x 3 = 9
// // 3 x 4 = 12
// // 3 x 5 = 15
// // ---

// //40
// // import readlineSync from'readline-sync'
// // let i = 1
// // let n=readlineSync.questionInt("Enter a number:")
// // while(i<=n){
// //     let j=1
// //     while (j<=5) {
// //         console.log(`${i} x ${j} = ${i*j}`);
// //         j++
// //     }
// //     console.log('----------');
// //     i++
// // }

// //41
// // let i = 1
// // while(i<=5){
// //     let j=1
// //     while (j<=10) {
// //         console.log(`${i} x ${j} = ${i*j}`);
// //         j++
// //     }
// //     console.log('------------');
// //     i++
// // }

// //42
// // let i = 1

// // while (i<=4) {
// //     let j = 1
// //     let str = ''
// //     while (j<=i) {
// //         str = str + j**2 + ' '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// //43
// // let i = 1

// // while (i <= 3) {
// //     let j = 1
// //     let row = ''
// //     while (j <= 4) {
// //         row = row + (i * j) + ' '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }
// // 1 2 3 4 
// // 2 4 6 8 
// // 3 6 9 12 

// //44
// // let i = 1

// // while (i <= 5) {
// //     let j = 1
// //     let row = ''
// //     while (j <= 5) {
// //         row = row + j*i+ ' '
// //         j++
// //     }
// //     console.log(row)
// //     i++
// // }

// //45
// // let i = 10

// // while (i<=30) {
// //     let j =1

// //     while (j<=5) {
// //         console.log(`${i} / ${j} = ${i/j}`);
// //         j++
// //     }
// //     console.log();
// //     i+=10
// // }

// //46
// // let i = 1

// // while (i<=4) {
// //     let j=i
// //     let str = ''
// //     while (j<=i+2) {
// //         str = str + j + ' '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// //47
// // let i = 1

// // while (i <= 3) {
// //     let spaces = 3 - i
// //     let j = 0
// //     let row = ''

// //     while (j < spaces) {
// //         row = row + '  '
// //         j++
// //     }

// //     j = 0
// //     while (j < i) {
// //         row = row + '* '
// //         j++
// //     }

// //     console.log(row)
// //     i++
// // }
// //     * 
// //   * * 
// // * * * 

// //48
// // let i = 1
// // while (i<=5) {
// //     let spaces = 5-i
// //     let str = ''
// //     let j = 0
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// //49
// // let i = 5
// // while (i>=1) {
// //     let spaces = 5-i
// //     let str = ''
// //     let j = 0
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i--
// // }

// //50
// // let i = 1
// // while (i<=5) {
// //     let spaces = 5-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+j+' '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// //51
// // let i = 1

// // while (i <= 4) {
// //     let j = 1
// //     let row = ''

// //     while (j < i) {
// //         row = row + '  '
// //         j++
// //     }

// //     j = i
// //     while (j <= 4) {
// //         row = row + '* '
// //         j++
// //     }

// //     console.log(row)
// //     i++
// // }
// // * * * * 
// //   * * * 
// //     * * 
// //       * 

// //52
// // let i = 4

// // while (i>0) {
// //     let j=i
// //     let str=''
// //     while (j<4) {
// //         str=str+ ' '
// //         j++
// //     }
// //     j=i
// //     while (j<=4) {
// //         str=str+ '* '
// //         j++
// //     }
// //     console.log(str);


// //     i--
// // }

// //53
// // let i = 1
// // while (i<=3) {
// //     let spaces = 3-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }
// // i = 2
// // while (i>=1) {
// //     let spaces = 3-i
// //     let str = ''
// //     let j = 0
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i--
// // }

// //54
// // let i = 1
// // while (i<=5) {
// //     let spaces = 5-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+i+' '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// //55
// // let i = 1
// // while (i<=5) {
// //     let spaces = 5-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+'  '
// //         spaces-=1
// //     }
// //     while(j<i*2){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// //56
// // let i = 5
// // while (i>=1) {
// //     let spaces = 5-i
// //     let str = ''
// //     let j = 0
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i--
// // }


// //57

// // let i = 1
// // while (i<=3) {
// //     let spaces = 3-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }
// // i = 2
// // while (i>=1) {
// //     let spaces = 3-i
// //     let str = ''
// //     let j = 0
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i--
// // }


// //58

// // let i = 1
// // while (i<=3) {
// //     let spaces = 3-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+j+' '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }
// // i = 2
// // while (i>=1) {
// //     let spaces = 3-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+j+' '
// //         j++
// //     }
// //     console.log(str);
// //     i--
// // }


// //59
// // let i = 1
// // while (i<=4) {
// //     let spaces = 4-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }
// // i = 3
// // while (i>=1) {
// //     let spaces = 4-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i--
// // }


// // //60
// // let i = 1
// // let n = 5
// // while (i<=n) {
// //     let j = 1
// //     let str = ''
// //     while (j<=2*n) {
// //         if((i+j)==n+1 || i == (j-n+1)){
// //             str = str + '*'
// //         }
// //         else{
// //             str= str + ' '
// //         }
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }
// // // i=6
// // // n=5
// // // while (i<2*n) {
// // //     let str = ''
// // //     let j = 1
// // //     while (j<=2*n) {
// // //         if((i+j)==14 || i==(n-j+1)){
// // //             str = str + '*'
// // //         }
// // //         else{
// // //             str = str + ' '

// // //         }
// // //         j++
// // //     }
// // //     console.log(str);

// // //     i++
// // // }

// // i=1
// // n=4
// // while (i<=n) {
// //     let x =11-(i-1)*2
// //     let str = ''
// //     let j = 1
// //     while (j<=10) {
// //         if((j==i+1)|| (10-i-1 == j)){
// //             str = str + '*'
// //         }
// //         else{
// //             str = str + ' '
// //         }

// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }



// //61
// // let i = 1
// // while (i<=3) {
// //     let spaces = 3-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+i+' '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }
// // i = 2
// // while (i>=1) {
// //     let spaces = 3-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+i+' '
// //         j++
// //     }
// //     console.log(str);
// //     i--
// // }

// //62
// // let i = 1
// // while (i<=5) {
// //     let spaces = 5-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }
// // i = 4
// // while (i>=1) {
// //     let spaces = 5-i
// //     let str = ''
// //     let j = 0
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i--
// // }


// //63
// // import readlineSync from 'readline-sync'

// // let rows = readlineSync.questionInt("Enter the number of rows: ")
// // let cols = readlineSync.questionInt("Enter the number of columns: ")
// // for (let i = 0; i < rows; i++) {
// //     let str = ''
// //     for (let j = 0; j < cols; j++) {
// //         str = str + '* '        
// //     }
// //     console.log(str);
// // }

// //64
// // import readlineSync from 'readline-sync'

// // let rows = readlineSync.questionInt("Enter the number : ")

// // for (let i = 0; i < rows; i++) {
// //     let str = ''
// //     for (let j = 0; j <= i; j++) {
// //         str = str + '* '        
// //     }
// //     console.log(str);
// // }

// //65
// // import readlineSync from 'readline-sync'

// // let num = readlineSync.questionInt("Enter the number : ")

// // for (let i = 1; i <= num ; i++) {
// //     for (let j = 0; j <= num; j++) {
// //         console.log(`${i}x${j}=${i*j}`);

// //     }
// //     console.log();

// // }

// //66
// // import readlineSync from 'readline-sync'

// // let num = readlineSync.questionInt("Enter the number : ")
// // let x = readlineSync.question("Enter a character: ")
// // for (let i = 0; i < num; i++) {
// //     let str = ''
// //     for (let j = 0; j <= i; j++) {
// //         str = str + x + ' '        
// //     }
// //     console.log(str);
// // }

// //67

// // import readlineSync from 'readline-sync'

// // let num = readlineSync.questionInt("Enter the number : ")

// // let i = 1
// // while (i<=num) {
// //     let spaces = num-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+j+' '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// //68
// // import readlineSync from 'readline-sync'

// // let rows = readlineSync.questionInt("Enter the number of rows: ")

// // for (let i = 0; i < rows; i++) {
// //     let str = ''
// //     for (let j = 0; j < rows; j++) {
// //         str = str + '* '        
// //     }
// //     console.log(str);
// // }

// //69
// // import readlineSync from 'readline-sync'

// // let num = readlineSync.questionInt("Enter the number : ")

// // for (let i = 1; i <= num ; i++) {
// //     for (let j = 0; j <= num; j++) {
// //         console.log(`${i}x${j}=${i*j}`);

// //     }
// //     console.log();

// // }


// //70
// // import readlineSync from 'readline-sync'

// // let num = readlineSync.questionInt("Enter the number : ")

// // let i = 1
// // while (i<=num) {
// //     let spaces = num-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }
// // i = num-1
// // while (i>=1) {
// //     let spaces = num-i
// //     let str = ''
// //     let j = 0
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i--
// // }

// //71
// // for (let i = 1; i <= 5; i++) {
// //     let str = ''
// //     for (let j = i; j <= 5; j++) {
// //         str = str + j + " "
// //     }
// //     console.log(str);

// // }

// //72
// // for (let i = 1; i <= 5; i++) {
// //     let str = ''
// //     for (let j = i; j <= 5; j++) {
// //         str = str + String.fromCharCode(64+j) + " "
// //     }
// //     console.log(str);

// // }

// //73
// // let x = 0
// // for (let i = 0; i < 5; i++) {
// //     let str = ''
// //     for (let j = 0; j <= i; j++) {
// //         x++
// //         str = str + x + ' ' 
// //     }
// //     console.log(str);
// // }

// //74
// // for (let i = 1; i <= 5; i++) {
// //     let str = ''
// //     for (let j = i; j <= 5; j++) {
// //         str = str + "* "
// //     }
// //     console.log(str);
// // }
// // for (let i = 1; i < 5; i++) {
// //     let str = ''
// //     for (let j = 0; j <= i; j++) {
// //         str = str + '* ' 
// //     }
// //     console.log(str);
// // }

// //75
// // for (let i = 1; i <= 5; i++) {
// //     let str = ''
// //     for (let j = 1; j <= 5; j++) {
// //         if(i == 1 || j == 1 || i == 5 || j == 5)
// //             str = str + '* '  
// //         else
// //             str = str + '  '      
// //     }
// //     console.log(str);
// // }

// //76
// // for (let i = 5; i >= 1; i--) {
// //     let x = 5-i+1
// //     let str = ''
// //     for (let j = 5; j >= i; j--) {
// //         str = str + x + ' '
// //         x--
// //     }   

// //     console.log(str);
// // }

// //77
// // for (let i = 5; i >= 1; i--) {
// //     let x = 5-i+1
// //     let str = ''
// //     for (let j = 5; j >= i; j--) {
// //         if(j==5)
// //             str = str + '1 '
// //         else
// //         str = str + x + ' '
// //         x--
// //     }   

// //     console.log(str);
// // }

// //78
// // let n=5
// // for (let i = 1; i <= n; i++) {
// //     let str = ''
// //     for (let j = 1; j <= n; j++) {
// //         if(i == j || (i+j)==n+1)
// //             str = str + '*'
// //         else
// //             str = str + ' '
// //     }
// //     console.log(str);
// // }

// //79
// // function isPrime(n) {
// //     if (n < 2) return false
// //     for (let i = 2; i <= Math.sqrt(n); i++) {
// //         if (n % i === 0) return false
// //     }
// //     return true
// // }

// // let num = 2
// // let count = 0
// // let row = 1
// // let str = ""

// // while (row <= 3) {
// //     if (isPrime(num)) {
// //         str += num + " "
// //         count++

// //         if (count === 4) {
// //             console.log("Row " + row + ": " + str.trim())
// //             str = ""
// //             count = 0
// //             row++
// //         }
// //     }
// //     num++
// // }

// //80
// // let n = 7
// // for (let i = 1; i <= 4 ; i++) {
// //     let str = ''
// //     for (let j = 1; j <= 7 ; j++) {
// //         if(i >= j)
// //             str = str + '* '
// //         else if(!(i+j-1 == n || i+j-1 > n))
// //             str = str + '  '
// //         else
// //             str = str + '* '
// //     }
// //     console.log(str);
// // }
// // for (let i = 3; i >= 1 ; i--) {
// //     let str = ''
// //     for (let j = 7; j >= 1 ; j--) {
// //         if(i >= j)
// //             str = str + '* '
// //         else if(!(i+j-1 == n || i+j-1 > n))
// //             str = str + '  '
// //         else
// //             str = str + '* '
// //     }
// //     console.log(str);
// // }

// //81
// // for (let i = 0; i <= 5; i++) {
// //     let str = ''
// //     for (let j = 0; j < 5; j++) {
// //         if (j == 0) {
// //             if (i == 0)
// //                 str = str + '  '
// //             else
// //                 str = str + i + ' '
// //         }
// //         if (i == 0)
// //             str = str + (j+1) + ' '
// //         else
// //             str = str + (i * (j+1)) + ' '
// //     }
// //     console.log(str);
// // }

// //82
// // let i = 5
// // while (i>=1) {
// //     let spaces = 5-i
// //     let str = ''
// //     let j = 0
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i--
// // }

// // i = 2
// // while (i<=5) {
// //     let spaces = 5-i
// //     let str = ''
// //     let j = 1
// //     while(spaces>0){
// //         str=str+' '
// //         spaces--
// //     }
// //     while(j<i+1){
// //         str=str+'* '
// //         j++
// //     }
// //     console.log(str);
// //     i++
// // }

// // //83
// // console.log('M T W T F S');
// // let i =1
// // for (let j = 1; j <= 4; j++) {
// //     let str = ''
// //     for (let i = 1; i <= 7; i++) {
// //         str =str +(i*j)+' '
// //     }
// //     console.log(str);
// // }




// //84
// // let n=9
// // for (let i = 1; i <= n; i++) {
// //     let str = ''
// //     for (let j = 1; j <= n; j++) {
// //         if(i == j || (i+j)==n+1)
// //             str = str + '*'
// //         else
// //             str = str + ' '
// //     }
// //     console.log(str);
// // }

// //85
// let n = 3;
let matrix = Array.from({ length: n }, () => Array(n).fill(0));

// let num = 1;
// let top = 0, bottom = n - 1;
// let left = 0, right = n - 1;

// while (num <= n * n) {

//     // left → right
//     for (let i = left; i <= right; i++) {
//         matrix[top][i] = num++;
//     }
//     top++;

//     // top → bottom
//     for (let i = top; i <= bottom; i++) {
//         matrix[i][right] = num++;
//     }
//     right--;

//     // right → left
//     for (let i = right; i >= left; i--) {
//         matrix[bottom][i] = num++;
//     }
//     bottom--;

//     // bottom → top
//     for (let i = bottom; i >= top; i--) {
//         matrix[i][left] = num++;
//     }
//     left++;
// }

// // Print
// for (let row of matrix) {
//     console.log(row.join(' '));
// }

console.log(Array);
