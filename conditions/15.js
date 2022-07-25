// Write a program to decide a given number is a positive/negative/zero
// var a='hu'
// if (a<0){
//     console.log('negative')
// }
// else if (a>0){
//     console.log('positive')
// }
// else{
//     console.log('zero')
// }


// Write a program to decide given number is odd number or even number?

// var a='hi';
// if ((a%2)==0){
//     console.log('even')
// }
// else{
//     console.log('odd')
// }


// Write a program to decide which number is greater?
// var a=40,b=40;
// if (a>b){
//     console.log(`${a} is greater than ${b} `)
// }
// else if (a<b){
//     console.log(`${b} is greater than ${a} `)
// }
// else{
//     console.log(`${a} and ${b} are equal `)
// }


// Bonus - Find the greatest number among 3 inputs?


// Multiples of 3 --> Fizz
// Multiples of 5 --> Buzz

// var a=15
// if ((a%3)==0){
//     console.log('Fizz')
// }
// if ((a%5)==0){
//     console.log('Buzz')
// }
// if (((a%3)!=0) && ((a%5)!=0)){
//     console.log('Not a multiple of 3 and 5')
// }

// if (((a%3)==0) && ((a%5)==0)){
//     console.log('BOTH multipLe of 3 and 5')
// }


// var a=17
// if ((a%3)==0){
//     console.log('Fizz')
// }
// else if ((a%5)==0){
//     console.log('Buzz')
// }
// else if (((a%3)!=0) && ((a%5)!=0)){
//     console.log('Not a multiple of 3 and 5')
// }

// else if (((a%3)==0) && ((a%5)==0)){
//     console.log('BOTH multipLe of 3 and 5')
// }


a = 211
if (((a%3)==0) && ((a%5)==0)){
    console.log('Fizz Buzz')
}
else if ((a%5)==0){
    console.log('Buzz')
}
else if (((a%3)==0)){
    console.log('Fizz')
}
else{
    console.log('Not a fizz buzz')
}