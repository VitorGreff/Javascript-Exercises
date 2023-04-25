const receberPrimeiroUltimo = (arr) =>{
    let res = []
    res.push(arr[0])
    res.push(arr[arr.length-1])
    return res
}
console.log(receberPrimeiroUltimo([7,14,'olá']))