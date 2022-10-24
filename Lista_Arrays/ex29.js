const segundoMaior = (arr) => {
    const del = posMaior(arr)
    arr.splice(del, 1)
    res = arr.reduce((acc, value) => Math.max(acc, value))
    return res
}

const posMaior = (arr) => {
    let res = arr.indexOf(arr.reduce((acc, value) => Math.max(acc, value)))
    return res
}


console.log(segundoMaior([12, 16, 1, 5]))