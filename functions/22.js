// Functions
// 1. Pre-defined / built-in functions
// 2. User defined functions
// 3. Recursive functions

// SYNTAX

// Function declaration
// function function_name( parameters ){
//     Task/Statements
// }

// Function definition
// function_name( arguments ) // Function call back


// Function without parameters
function add(){
    console.log(2+3)
}
// console.log(add())

// add()


// add(6,7)
// Function with parameters
function add(a,b){
    // console.log(a)
    // console.log(b)
    console.log(a+b)
}
// console.log(add())

// add()
// add(6,7)
// add(7,7)
// add(8,9)
// add(8,19)

// function even(a){
//     if ((a%2)==0){
//         console.log(a,'is even')
//     }
// }

// for (i=5;i<=15;i++){
//     even(i)
// }


// function even(a){
//     for (i=1;i<=a;i++){
//     if ((i%2)==0){
//         console.log(i,'is even')
//     }
// }
// }

// even(15)
// function even(a){
//     for (i=1;i<=a;i++){
//     if ((i%2)==0){
//        return i,'is even'
//     }
// }
// }

// even(15)


// function test(a){
    // return a
    // console.log(1)
    // console.log(2)
    // console.log(3)
// }
// c = test(2)
// console.log(c)
// console.log(test(2))


// a = {1:'a', 2:'b', 3:'c',2:'d',1:'e',3:'f'}
// a = {'1':'a'}
// console.log(a)

// a = {1:'a', 2:'b', 3:'c',2:'c',1:'a',2:'f',3:'c'}
// a = {'a':1,b:2,b:3,'c':4}
// console.log(a)
// console.log(Object.keys(a))
// console.log(Object.values(a))
// console.log(a[b])
// console.log(a['b'])
// console.log(a.b)

// ADDING an item
// a['b'] = 4
// a['d']=6
// a.b=7

// removal of an item
// delete a['b']
// console.log(a)

// WAP to find the biggest/greatest number in the given array?
// a = [23,1,25,16,19,6,9,10]
// console.log(a.sort())
// console.log(a.sort())
// console.log(Math.max(a))
// function max(a){

// }
// console.log(max(a))




a = [23,1,25,16,190,6,9,10]
// a[0]=24
// console.log(a)
function max(a){
    b = a[0] //23
    for (i=1;i<=(a.length-1);i++){ 
        console.log(a[i]>b)
        if (a[i]>b){ //1>23, 25>23, 16>25,19>25,6>25,9>25,10>25
            b = a[i] //25
            // console.log(a)
        }
    }
    return b
}
console.log(max(a))