// // Assignment operator

// // var a=3,b=4,c=6
// // a+=2 // a = a+2 ;a=5
// // a = a+2 //; a=7
// // b+=4 //b=b+4;4+4=8
// // c+=3 // c=c+3;6+3=9
// // console.log(b,a,c)


// // var a=3,b=4,c=6
// // a+=2 // a = a+2;3+2=5
// // a = a+b //a=5+4=9
// // b+=c //b=4+6=10
// // c+=a // c=6+9
// // console.log(c,a,b) //15,9,10


// // var a=3,b=4,c=6
// // a+=b // a=a+b;3+4=7
// // a-=2 //a=7-2=5
// // b*=c //b=4*6=24
// // c-=b // c=6-24=-18
// // console.log(b,a,c)

// // var a=3,b=4,c=6
// // a+=b-c // a=(a+(b-c)) = 3+(4-6) = 1
// // b-=b+=c // b = 4-(10);   b = (b+c)=4+6=10 ;  -6
// // a*=c+a // a = (a*(c+a)) = 1*7 = 7
// // c-=b-a // c = (c-(b-a)) = 6-(-6-7) = 6-(-13) = 19
// // console.log(b,a,c)



// // var a=4,b=3,c=5
// // a%=b // a = (a%b) = 4%3 = 1
// // b/=a+c // b = b/(a+c) = 3/(1+5) = 0.5
// // b*=c+=a // b = b*(c=(c+a)) = 0.5*(5+1) = 3
// // c-=b*a // c=c-(b*a) = 6-(3*1)=3
// // console.log(b,a,c, b+a-c)
// // console.log(c+','+b+','+a)


// // Comparision operator
// var a=5,b=6,c=8
// // console.log(a>b) //f
// // console.log(b>b) //f
// // console.log(c>b) //t
// // console.log(a>c) //f
// // console.log(a<b) //t


// // var a=5,b=6,c=-8

// // console.log(c<b<c) //-8<6 == true <-8
// // console.log(c<b<a) //-8<6 == true <5



// var a=5,b=-3,c=-6

// console.log(c<b<c) //
// console.log(c<b<a) //
// console.log(c>b<a) 
// console.log(a>b<c) 
// console.log(b<a<c) 
// console.log(c<c<c) 
// var a=5,b=-3,c=-6

// console.log(c>=a) 
// console.log(c<=b)

// var a=5,b=-3,c=-6

// console.log(c!=a) 

// //logical equality - values
// console.log(0==1) //f
// console.log(100==10) //f
// console.log(0.0==0) //t
// console.log('0'=='zero') //f
// console.log('0'=='0') //t

// console.log('0'=='0.0')
// console.log('o'=='o')
// console.log('oil'=='oil')
// console.log('oil'=='oli')

// console.log('true'=='true')
// console.log('false'=='0')

// console.log('false'==false) //f
// console.log(false==0) //t
// console.log(true==1) //t
// console.log(true==10) //t


// //Strict equality - values+type
// console.log(00===0) //t
// console.log(0.0===0) //t
// console.log(0===false) //f
// console.log('zero'===0) //f
// console.log('0'==='0') //t
// console.log(true!==1) //f
 


// logical Operators

// true - Success - pass - Active
// true - 1 - value

// false - fail - inactive
// false - 0 - empty

// logical AND - && (Find First False)
// a   b   r
// f1  f2  f1
// f   t   f
// t   f   f
// t1  t2  t2

// console.log(3 && 4)  //4
// console.log(30 && 0) //0
// console.log(0 && '') //0
// console.log(false && 4) //false
// console.log(false && 0.0) //false
// console.log('0' && '0') //'0'
// console.log('false' && 'false1') //false1

// console.log('0' && '0.0' && false && 0.0) // false                  

// console.log('true' && 'false' && true  && 1 && 0.1)

// console.log('0' && 'zero' && 1.0  && '0' )
        //                              


// logical OR - || - Find First True
// a   b   r
// f1  f2  f2
// f   t   t
// t   f   t
// t1  t2  t1
// console.log('90' || "0" || '' || 0)

// console.log('' || "t " || 'false' || 0.0)
//                

// console.log('' || "" || '1' || '23 ' || '234')
//
// console.log('01' && '' || 0.0 && ('') && {} || '0.0' && 'O' || [])
// //           t      f      f       t     t       t       t     t

// console.log('hey' && 'false' || false && 00 || '0.0' && 'zero' || 1)
//            t         t          f     f       t         t      t



// console.log( [] || (''))


// logical NOT - !
// console.log(!'false') //f
// console.log(!0.0) //t
// console.log(! [0]) //f

// Increment - Post, Pre
// Pre Increment

// var a = 4
// a = a+1
// a+=1
// ++a
// console.log(++a)
// console.log(a)
// console.log(++a +a + ++a)
// //           5 + 5 + 6
// console.log(a + ++a + ++a) //4 + 5 +6
// console.log(a) //6


// Decrement - Post, Pre
var a = 5 
// a = a-1
// a-=1
// --a
// console.log(--a) //4
// console.log(a) //4
// console.log(--a +a + --a) //(4)3 + 3 + (3)2
// console.log(a + --a + --a) //2 + (2)1 + (1)0
// console.log(a) //

var a=10
// console.log(--a) //(10)9
// console.log(a) //9
// console.log(++a) // (9)10
// console.log(--a - --a + --a +a + ++a + --a) //(10)9-(9)8+(8)7+7+(7)8+(8)7 = 30
// console.log(a - ++a - --a + --a + a) // 7-(7)8-(8)7+(7)6+6 = 4
// console.log(a) //6

// Post increment
// var a=10
// // a++
// console.log(a++) //10(11)
// console.log(a) //11
// console.log(a++ +a + a++) //11(12) + 12 +12(13) = 35
// console.log(a + a++ + a++) //13+13(14)+14(15) = 40
// console.log(a) //15
// Post Decrement -Prints and then updates
// var a=12
// a--
// console.log(a--) //12(11)
// console.log(a) //11
// console.log(a +a-- + a--) //11+11(10)+10(9) = 32
// console.log(a-- + a + a--) //9(8)+8+8(7)=25
// console.log(a-- - a) // 7(6)-6=1
// console.log(a) //6


// var a=13,b=15
// console.log(a--) //a = 13(12)
// console.log(b--) // b = 15(14)
// console.log(a + b-- + a-- -b--) //12+14(13)+12(11)-13(12) = 25; a=11,b=12
// console.log(a-- + b +b-- + a--) //11(10)+12+12(11)+10(9)=45; a=9,b=11
// console.log(a-- - b) // 9(8)-11=-2 ; a=8,b=11
// console.log(a,b) //8,11
//  ----------------------------------------------

var a=20,b=22
console.log(a,b) //20,22
console.log(++a,++b,a++,b++) //(20)21,(22)23,21(22),23(24); a=22,b=24
console.log(++a + b-- + ++a -b++) //(22)23+24(23)+(23)24-23(24)=48;a=24,b=24
console.log(a-- + b + ++a +b-- + a--) //24(23)+24+(23)24+24(23)+24(23)=120;a=23,b=23
console.log(a-- - b+ a++ -b--) // 23(22)-23+22(23)-23(22)=-1; a=23,b=22
console.log(a,b) //23,22