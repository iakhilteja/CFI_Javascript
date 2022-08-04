//ARRAY HELPERS

// Arrow functions

// regular function
// function hello() {
//     return "Hello World!";
//   }

// hello = function() {
//     return "Hello World!";
//   }

// hello = () => ("Hello World!")

// hello = () => {
//     return "Hello World!"}

// console.log(hello())



// for in
// for (key in object) {
    // code block to be executed
//   }

// regular for loop
// a = [1,2,3,4,5]
// for (i=0;i<a.length;i++){
//     console.log(a[i])
// }

// for (i in a) {
    // console.log(i) //indices
    // console.log(a[i]) //values
//   }

// for of
// for (variable of iterable) {
    // code block to be executed
//   }

// a = [1,2,3,4,5]
// for (i of a) {
//     console.log(i) 
//   }

// forEach()
// The forEach() method calls a function (a callback function) once for each array element.
// array.forEach(function(currentValue, index, arr));

// array.forEach(element => {
    // task on element
// });

// a = ['code', 'for' , 'india']

// n = 'code'
// function cases(n) { 
//     return n.toUpperCase()
// }
// a.forEach(i => {
//     console.log(i.toUpperCase())
// });
// console.log(a)


// map()
// array.map(function(currentValue, index, arr), thisValue)
// map() returns the value of the array.map() 
a = ['code', 'for' , 'india']
a = a.map(i => i.toUpperCase())
console.log(a)
// filter()
// reduce()
// every()
// findIndex()
// Array.keys()
// Array.values()
// Date Objects