function add(arr,arr2){
    let original = []
    original = arr.slice()
    for(let element of arr2){
        console.log(`Added element: ${element}`)
        arr.push(element)
    }
    console.log(`Original array; ${original}\nArray added: ${arr2}\nArray after adding operations: ${arr}`)
}


let vetorPilha = [1,2,3,4,5]
let vetorAdiciona = [6,7,8,9,10]
add(vetorPilha,vetorAdiciona)