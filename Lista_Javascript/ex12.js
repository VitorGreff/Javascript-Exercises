const fat = (num)=> {
    let res = 1
    for(let i = num; i>0; i--){
        res = res * i
    }
    return res
}
console.log(fat(9))
console.log(fat(5))