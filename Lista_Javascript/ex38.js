function printEven(begin=0, end=100){
    if(begin>end){
        let intermediate = begin
        begin = end
        end = intermediate
    }

    while(begin<=end){
        if(begin%2!==0){
            console.log(`Even: ${begin}`)
        }
        begin++
    }
}

//printEven(0,10)
printEven(7,3)