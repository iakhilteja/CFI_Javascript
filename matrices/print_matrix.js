import readlineSync from "readline-sync"

function MatrixInput(){
    let rows = readlineSync.questionInt("Enter number of rows: ")
    let cols = readlineSync.questionInt("Enter number of columns: ")
    console.log(`Given matrix is ${rows} x ${cols} dimension`)
    
    let MatrixA = new Array(rows) //[_ _ _]
    // console.log(MatrixA.length)
    for (let i=0;i<MatrixA.length;i++){
        MatrixA[i] = new Array(cols)
    } //[[][][]]
    // console.log(MatrixA)

    for (let i=0;i<rows;i++){
        for (let j=0;j<cols;j++){
            MatrixA[i][j] = readlineSync.questionInt(`Enter element of ${i} ,${j}: `)
        }
    }
    return MatrixA

}
console.log(MatrixInput())
// MatrixInput()

