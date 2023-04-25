const negatives = (arr) => {
    let negatives = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<0){
            negatives++
        }
    }
    console.log(`There are ${negatives} negative numbers in this array!`)
}

const array = [-1,-5,-8,8,5,3,2,-19]
negatives(array)