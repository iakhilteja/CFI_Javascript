import {MatrixInput,PrintMatrix} from './print_matrix.js'

function MatrixSum(){
    let MatrixA = MatrixInput('Matrix A')
    // console.log(MatrixA)
    console.log(`Matrix A is : `)
    PrintMatrix(MatrixA)

    let MatrixB = MatrixInput('Matrix B')
    // console.log(MatrixB)
    console.log(`Matrix B is : `)
    PrintMatrix(MatrixB)

    if ((MatrixA.length === MatrixB.length) && (MatrixA[0].length === MatrixB[0].length)){
        let Sum = new Array(MatrixA.length)
        for (let i=0;i<Sum.length;i++){
            Sum[i]= new Array(MatrixA[0].length)
        }

        for (let i=0;i<Sum.length;i++){
            for (let j=0;j<Sum[0].length;j++){
                Sum[i][j] = MatrixA[i][j] - MatrixB[i][j]
        }
        
    }
    console.log(`The summation of the two matrices is: `)
        PrintMatrix(Sum)
    }else{
        console.log('Matrix Addition is not possible')
    }

}
MatrixSum()