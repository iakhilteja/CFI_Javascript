// // 0 1 1 2 3 5 8 13 21 . .. ... ....

// function fibinocci(num){
//     let n1 = 0
//     let n2 = 1
//     let sum = 0
//     output = ''
//     for (i=1;i<=num;i++){
//             output += `${n1} `
//             sum = n1 + n2 
//             n1 = n2
//             n2 = sum
//     }
//     // console.log(output)
//     return output
// }
// // fibinocci(15)
// console.log(fibinocci(10))

// a = 5.324
// console.log((a)-(a%1)) //Math.floor

let num=12
n =  ('' + num).length
sum=0
temp = num
// n = a.length
// console.log(n)
while (num>0){ //0
   sum += (num%10)**n //0+27 = 27
//    console.log(sum,num)
   num = (num/10)-(num/10)%1 
//    console.log(num)
}
if(sum==temp){
    console.log('armstrong')
}
else{
    console.log('not an armstrong')
}