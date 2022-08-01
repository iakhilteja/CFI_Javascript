// continue, break

// break - Stops next iterations
// continue - skips current iteration

// for (i=1;i<=10;i++){
//     // console.log(i)
//     if (i==6){
//         // break;
//         continue;
//     }
//     console.log(i)
    
// }

let i=1
while (i<=10){
    // console.log(i)
    if (i==5){
        // break;
        i++
        continue;
    }
    console.log(i)
    i++
}