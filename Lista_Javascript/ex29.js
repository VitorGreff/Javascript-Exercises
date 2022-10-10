function count(arr) {
    let ret = 0
    let ret2 = 0
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] >= 10 && arr[i] <= 20) {
            ret++
        }
        else ret2++
    }
    console.log(`There are ${ret} numbers equal or greater than 10 or equal and smaller than 20\nAnd other ${ret2} numbers.`)
}

const arr = [2, 56, 34, 12, 23, 21, 20, 10, 2, 5, 7, 9]
count(arr)