const avg = (arr)=>{
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        sum+=arr[i]
    }
    const avg = sum/arr.length
    console.log(`The average number of the array is: ${avg}`)
}
const arr = [2, 56, 34, 12, 23, 21, 20, 10, 2, 5, 7, 9]
avg(arr)