const greaterSmaller = (arr)=>{
    let smaller = Infinity
    let greater = -Infinity
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>greater){
            greater = arr[i]
        }
        else if( arr[i]< smaller){
            smaller = arr[i]
        }
    }
    console.log(`Greater value: ${greater}\nSmaller value: ${smaller}`)
}
const arr = [2, 56, 34, 12, 23, 21, 20, 10, 2, 5, 7, 9]
greaterSmaller(arr)