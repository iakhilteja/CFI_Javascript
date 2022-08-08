// Complexity of the algorithms

// 1. Time Complexity - Big "O" Notation
// 2. Space Complexity

// Constant	- O(c)
// Linear	- O(n)
// Quadratic- O(n^2)
// Cubic - O(n^3)
// Exponential - O(2^n)
// Logarithmic	- O(log(n))
// Log Linear -	O(nlog(n))


// O(C) -Constant
// console.log(3) //1 ns

// console.log(3) //1 ns
// console.log(3) //1 ns\

// O(n) - Linear
// a = [1,2]
// if (1){
//     console.log(a[0]+2) //1 ns
// }

// for (i=0; i<a.length; i++){
//     console.log(a[0]+2) //1 ns
// }
// a = [1,2,3,4,5,6,7]
// var b = 7
// flag = false
// for (let i=0;i<a.length;i++){
//     if (a[i]==b){
//         flag = true
//         break
//     }
// }
// if (flag){
// console.log('Number exists')
// }else{
//     console.log('Number doesnt exist')
// }

// for (let i=0;i<a.length;i++){
//     if (a[i]==b){
//         console.log('Given Number exists')
//     }
//     else{
//         console.log('Number doesnt exist')
//     }
// }



// O(n**2) - Quadratic
// for (i=0; i<a.length; i++){
//     for (j=0;j<a.length;j++){
//         console.log(a[i],a[j]) //1 ns
//     }
// }

a = [1,2]

// O(n**3) - Cubic
// for (i=0; i<a.length; i++){
//     for (j=0;j<a.length;j++){
//         for (k=0;k<a.length;k++){
//         console.log(a[i],a[j],a[k]) //1 ns
//     }
// }
// }


// Binary Searching Technique

// Steps of the binary search:

// Calculate the middle of the list.
// If the searched value is lower than the mid value, set a new right bounder.
// If the searched value is higher than the mid value, set a new left bounder.
// If the search value is equal to the mid value, return the middle (the index).
// Repeat the steps above until the value is found or the left bounder is equal to higher the right bounder.


// Without recursion
  a = [1,22,35,44,55,66,77,88]
  n = 660

  function Binary_search (a,n){
    start_index = 0
    end_index = (a.length-1)
    // console.log(start_index, end_index, mid_index)

    while (start_index <= end_index){ //0<=7, 0<=2
        // console.log(start_index, end_index, mid_index)
        mid_index = Math.floor((start_index+end_index)/2) //3

        if (a[mid_index] == n ){
            return mid_index
        }
        else if (a[mid_index]>n){ //44>35
            end_index = mid_index -1 //end = 2
            // break
        }
        else{
            start_index = mid_index + 1
        }
    }
    return 'element not found'
  }
  console.log(Binary_search(a,n))


// With recursion
// a = [1,22,35,44,55,66,77,88]
// n = 66

// start_index = 0
// end_index = (a.length-1)
//   function Binary_search (a,n,start_index,end_index){

//         mid_index = Math.floor((start_index+end_index)/2) 

//         if (a[mid_index] == n ){
//             return mid_index
//         }
//         else if (a[mid_index]>n){ 
//             end_index = mid_index -1
//         }
//         else{
//             start_index = mid_index + 1
//         }
//         return Binary_search(a,n,start_index,end_index) 
// }
//   console.log(Binary_search(a,n,start_index,end_index))
