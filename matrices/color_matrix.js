import readlineSync from "readline-sync"
import color from 'colors-cli'

function MatrixInput(name){
    let rows = readlineSync.questionInt(color.magenta_bbt(`Enter ${name} number of rows: `))
    let cols = readlineSync.questionInt(color.magenta_bbt(`Enter  ${name} number of columns: `))
    console.log(`Given matrix is ${name} which has ${rows} x ${cols} dimension`)
    
    let Matrix = new Array(rows) //[_ _ _]
    // console.log(MatrixA.length)
    for (let i=0;i<Matrix.length;i++){
        Matrix[i] = new Array(cols)
    } //[[][][]]
    // console.log(Matrix)

    for (let i=0;i<rows;i++){
        for (let j=0;j<cols;j++){
            Matrix[i][j] = readlineSync.questionInt(color.cyan(`Enter element of ${name} ${color.green(i)},${color.green(j)}: `))
        }
    }
    return Matrix

}
// console.log(MatrixInput())
// MatrixInput()
// let mat = MatrixInput()
function PrintMatrix(matrix){
    for (let i=0;i<matrix.length;i++){
        var res = ""
        for (let j=0;j<matrix[i].length;j++){
            res+=(color.cyan(matrix[i][j]))+' '
        }
        console.log(res)
    }
}
// PrintMatrix(mat)


// export default MatrixInput;
export {MatrixInput, PrintMatrix}