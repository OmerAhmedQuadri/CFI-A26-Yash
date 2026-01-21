console.log('1',true && true)//true
console.log('2',false || false)//false
console.log('3',!true)//false
console.log('4',true && false)//false
console.log('5',false || true)//true
console.log('6',!false)//true
console.log('7',true && !false)//true
console.log('8',false || true && false)//false
console.log('9',!(true && false))//true
console.log('10',!(false || false) && true)//true
console.log('11',true || false && !true)//true
console.log('12',!(true || false) && false)//false
console.log('13',false || !(true && false))//true
console.log('14',!(false || true && false))//true
console.log('15',true && !(false || true && false))//true
console.log('16',!(true && (false || true)) || false)//false
console.log('17',false || !(!(true && false) || false))//false
console.log('18',!(false && (true || false)) && true)//true
console.log('19',!((true || false) && !(false && true)))//false
console.log('20',false || !(true && !(false || true && false)))//false
console.log('21',!(!true || (false && !(true || false))))//true
console.log('22',!(false || !(!(true && false) && (false || true))))//true
console.log('23',!((false || true) && !(!(false && true) || !(true || false && true))))//true
console.log('24',(true && false) || true)//true
console.log('25',false || !(!(false || true) && false))//true
console.log('26',100 && 40 && 30)//30
console.log('27',100 && 40 && 0 && 15)//0
console.log('28',100 && 40 && "" && 15)//''
console.log('29',100 && 40 && undefined && 15)//undefined
console.log('30',100 && 40 && null && 15)//null
console.log('31',undefined && null && NaN && "hello")//undefined
console.log('32',100 || 40 || 30)//100
console.log('33',0 || 40 || 30)//40
console.log('34',0 || "" || 30)//30
console.log('35',0 || "" || undefined || null)//null
console.log('36',false || 0 || "" || undefined)//undefined
console.log('37',"" || "hello" || 0)//hello
console.log('38',null || undefined || false || 50)//50
console.log('39',false || true || false)//true
console.log('40',0 || NaN || "JS")//JS
console.log('41',undefined || null || 0 || "")//''
console.log('42',"" || 0 || undefined || null || NaN || "hello")//hello
console.log('43',"" || "7")//7
console.log('44',"hello" && 100 && 50)//50
console.log('45',10 && 20 && 30 && false)//false
console.log('46',25 || 0 || "")//25
console.log('47',50 && NaN && 100)//NaN
console.log('48',0 || 10 && 20)//20
console.log('49',false && 10 || 30)//30
console.log('50',"" || 0 && 50 || "end")//end