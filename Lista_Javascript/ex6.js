const juros1 = (capital,juros,tempo)=>{
    return capital + (capital * juros * tempo)
}

const juros2 = (capital,juros,tempo)=>{
    return capital * (1 + juros) ** tempo

}

console.log(juros1(100, 10/100, 2));
console.log(juros2(100, 10/100, 2).toFixed(2));