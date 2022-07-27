// Iterations

// while loop

// SYNTAX

// INITIALIZATION (Start value)
// while (Condition till termination){
            // Task/statement
            // Increment / Decrement (Step value)
// }

// Write a program to Print 1-10
// i=1
// while (i<=5){
//     console.log(i)
//     // i++
//     // i = i+1
//     i+=1
// }
// console.log(i)

// Iteration-1: i=1; 1<=5 ; 1 ; (2)
// Iteration-2: i=2; 2<=5 ; 2 ; (3)
// Iteration-3: i=3; 3<=5 ; 3 ; (4)
// Iteration-4: i=4; 4<=5 ; 4 ; (5)
// Iteration-5: i=5; 5<=5 ; 5 ; (6)
// Iteration-6: i=6; 6<=5 ; stop

// Write a program to Print 10-1
// i=10
// while (i>=1){
//     console.log(i)
//     i--
//     // i = i-1
//     // i-=1
// }

// Write a program to print even numbers between 50-100?
i=50
while (i<=100){
   if ((i%2)==0){
    console.log(i)
   }         
    i++;
}
// Iteration-1: i=50; 50<=100 ; 50 (51)
// Iteration-2: i=51; 51<=100 ; (52)
// Iteration-3: i=52; 52<=100 ; 52 (53)
// ...
// iteration-51: i=100; 100<=100 ; 100 (101)
// iteration-52 ; false


// i=50
// while (i<=100){ //
//    if ((i%2) !=0){ //
//     console.log(i)
//    }         
//     i++; 
// }


// Alternative even numbers ; 
i=50
while (i<=100){ //
    console.log(i)      
    i+=2; 
}

// Alternative odd numbers ; 
i=51
while (i<=100){ //
    console.log(i)      
    i+=2; 
}


// Number of iterations
// count = 0

// i=50
// while (i<=100){ //
//     count++
//     console.log(i)      
//     i+=2; 
//     // console.log(`count is ${count}`)
// }
// console.log(`count is ${count}`)