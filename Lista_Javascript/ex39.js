function switchArray(arr1,arr2){
    if(arr1.length === arr2.length){
        for(let i = 0; i<arr1.length; i++){
            //arr1 represents the sum
            arr1[i] = arr1[i] + arr2[i]
            //arr2 receives the sum minus itself
            arr2[i] = arr1[i] - arr2[i]
            //arr1 receives the sum (itself) minus his original value that its stored in arr2
            arr1[i] = arr1[i] - arr2[i]
        }
        console.log(`First array: ${arr1}`)
        console.log(`Second array: ${arr2}`)
    }
    else console.log(`Arrays of different sizes!`)
}
//desestructuring approach
// let a = 4
// let b = 0
// b = [a, a = b][0];
// console.log(b)
// console.log(a)

let arr1 = [2,3,1,4,5]
let arr2 = [9,7,5,3,3]
switchArray(arr1,arr2)