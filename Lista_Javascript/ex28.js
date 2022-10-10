const classify = (arr) => {
    let len = arr.length
    let count = 0
    let even = 0
    let odd = 0
    while (count < len) {
        if (arr[count] % 2 == 0) {
            even++
        }
        else {
            odd++
        }
        count++
    }
    console.log(`Number of evens: ${even}\nNumber of odds: ${odd}`)
}

const arr = [2, 6, 7, 3, 1, 2, 3]
classify(arr)