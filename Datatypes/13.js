// var a = {
//     1:'hi',
//     2:'hello',
//     3:'hey'
// }

// console.log(a, typeof a)
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])

// var a = {
//     'a':'hi',
//     'b':'hello',
//     'c':'hey'
// }

// console.log(a['a'])
// console.log(a['b'])
// console.log(a['c'])

// console.log(a.a)
// console.log(a.b)
// console.log(a.c)

var abc = {
    a: [9, 99, 999],
    b: [1, 2, 3, 4, 5],
    c: ["abc", { a: 11, b: 12 }]
}

// console.log(abc.c)
// console.log(abc['c'])

console.log(abc.c[1].a)