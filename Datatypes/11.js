// comparision of var, let , const
// Hoisting

// var

// a = 3

// var a;
// var a=3;
// a=4;

// var a=3;
// var a=4;
// console.log(a)

// var a=3
// console.log(a)
// {
//     console.log(a)
// }


// var a=3
// console.log(a)
// {    
//     var a=4
//     console.log(a)
// }

// var a=3
// console.log(a)
// {    
//     var a=4
//     console.log(a)
//     a = 5
// }
// console.log(a)

// By default initialization is var
// var is global
// Redeclaring is possible
// Redefining is possible

// let

// let a;
// a=6


// let a=7;
// a=8;
// console.log(a)


// let a;
// let a=8;
// cannot be redeclared as let
// console.log(a)


// let a=7;
// let a=8;
// error because cannot be redeclared as let
// console.log(a)

// let a=3
// console.log(a)
// {
//     console.log(a)
// }

// let a=3
// console.log(a)
// { 
//     let a=4
//     console.log(a)
// }
// console.log(a)


// let a=3
// console.log(a)
// { 
//     a=4
//     console.log(a)
// }
// a=6
// console.log(a)

// let is global
// Redeclaring is not possible
// Redefining is possible

// let a=3
// console.log(a)
// { 
//     let a=4
//     console.log(a)
// }
// a=6
// console.log(a)


// let a=3
// console.log(a)
// { 
//     let a=4
//     console.log(a)
// }
// let a=6
// console.log(a)
