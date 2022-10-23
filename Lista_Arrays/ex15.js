const even = (arr) => {
    let res = []
    for (let i in arr) {
        if (i % 2 === 0 && arr[i] % 2 === 0) {
            res.push(arr[i])
        }
    } return res
}

console.log(even([1,2,3,4]))
console.log(even([10,70,22,43]))