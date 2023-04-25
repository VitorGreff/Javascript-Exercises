function multiply(arr, number) {
    let ret = []
    ret = arr.slice()
    for (let i = 0; i < ret.length; i++) {
        ret[i] *= number
    }
    console.log(`New array: ${ret}`)
}

function multiplyCondition(arr, number) {
    let ret = []
    ret = arr.slice()
    if (number > 5) {
        for (let i = 0; i < ret.length; i++) {
            ret[i] *= number
        }
        console.log(`New array: ${ret}`)
    }
    else console.log(`Since the number is smaller than 5, the array shall be the same`)
}

let integer = [2, 5, 4, 6, 7]

multiply(integer, 9)
multiplyCondition(integer, 4)
multiplyCondition(integer, 5)
multiplyCondition(integer, 6)

