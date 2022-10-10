function geometricProgression(n,a1,r){
    let sum = 0
    for(let i = 0; i<n; i++){
        console.log(`Number ${i+1}: ${a1}`)
        a1 *=r
        sum+=a1
    }
    console.log(`Sum: ${sum}`)
}

function arithmeticProgression(n,a1,r){
    let sum = 0
    for(let i = 0; i<n; i++){
        console.log(`Number ${i+1}: ${a1}`)
        a1 +=r
        sum+=a1
    }
    console.log(`Sum: ${sum}`)
}
//arithmeticProgression(10,3,3)
geometricProgression(10,2,5)
