function concatena(arr1,arr2,arr3){
    let ret = ''
    let ret2 = ''
    ret = arr1.concat(arr2,arr3)
    console.log(ret)

    ret2 = arr3.concat(arr2,'oiii',arr1)
    console.log(ret2)
}

const integerArray = [2,6,5,4]
const stringArray = ['2','8','0','9']
const doubleArray = [2.7,5.6,4.9,3.2]
concatena(integerArray,stringArray,doubleArray)