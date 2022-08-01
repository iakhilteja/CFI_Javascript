// 1 10
// 2  9
// 3  8
// 4  7
// 5  6
// 6  5
// 7  4
// 8  3
// 9  2
// 10 1
// for (let i=1;i<=10;i++){
//     console.log(i,11-i)
// }
// // console.log(i)
// for (;i<=50;i++){
//     console.log(i,11-i)
// }

// for (let i=1,j=10; i<=10,j>=1;i++,j--){
//    console.log(i,j)
// }

// 1
// 12
// 123 
// 1234
// 12345
// 123456
// 1234567
// 12345678
// let a=''
// count=0
// for (let i=1;i<=8;i++){
//     a = a + i // ''+1
//     console.log(a)
    // count++
// }
// console.log(count)

// Iteration 1: i=1; 1<=8; ''+1; 1
// Iteration 2: i=2; 2<=8; '1'+2 ; '12'
// ...


// a = ''
// a = a+1 // ''+1 = '1'
// a=a+2 // '1' +2 = '12'
// console.log(a)

// 1
// 11
// 111
// 1111
// 11111
// a=''
// for (let i=1;i<=5;i++){
//     a = a + 1
//     console.log(a)
// }


// * * * * *
// * * * *
// * * * 
// * *
// *

// a=''
// for (let i=5;i>=1;i--){
    
//     for (let j=i;j>=1;j--){
//         a = a+'* '
//         console.log(a)
//     }
//     a=''
// }

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
// star = ''
// for (var i=1; i<=5;i++){
//     space = ''
    
//     for (var j=1; j<=5-i; j++){
//         space+='  ' 
//     }
//     star += '* '
    
//     console.log(space,star)
// }



//     *
//    **
//   ***
//  ****
// *****

// star = ''
// for (var i=1; i<=5;i++){
//     space = ''
    
//     for (var j=1; j<=5-i; j++){
//         space+=' ' 
//     }
//     star += '*'
    
//     console.log(space,star)
// }


//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 

// star = ''
// for (var i=1; i<=5;i++){
//     space = ''
    
//     for (var j=1; j<=5-i; j++){
//         space+=' ' 
//     }
//     star += '* '
    
//     console.log(space,star)
// }

// a='';
// let spaces = 4;
// for(let i=1; i<=spaces+1; i++){
//     for(let j=spaces; j>=i; j--){
//        a= a+' ';
//     }
//     for(let k=1;k<=i;k++){
//         a = a + "*"
//     }
//     console.log(a);
//     a='';
// }



// a=''
// for (let i=1;i<=10;i++){
//     for (let j=4;j>=i;j--){
//         a = a + " "
//     }
//     for (let k=1;k<=i;k++){
//         a = a+'*'
//     }
//     console.log(a)
//     a=''
// }


// a='';
// let spaces = 4;
// for(let i=1; i<=spaces+1; i++){
//     for(let j=spaces; j>=i; j--){
//        a= a+' ';
//     }
//     for(let k=1;k<=i;k++){
//         a = a + "*"
//     }
//     console.log(a);
//     a='';
// }

// 1
// 2 4
// 3 6 9
// 4 8 12 16
// 5 10 15 20 25
// 6 12 18 24 30 36
// 7 14 21 28 35 42 49
// 8 16 24 32 40 48 56 64
// 9 18 27 36 45 54 63 72 81
// 10 20 30 40 50 60 70 80 90 100


// for (let i=1;i<=10;i++){
//     temp=''
//     for (let j=1;j<=i;j++){
//         temp = temp+ (i*j) + " "
//     }
//     console.log(temp)
// }

// ASCII number to character
// a = 67
// console.log(String.fromCharCode(67))

// Character to ASCII
// console.log('C'.charCodeAt())

