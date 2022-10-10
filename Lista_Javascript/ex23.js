const boletim  = (cod,p1,p2,p3)=>{
    let notas = [p1,p2,p3]
    let media
    //notas.sort((a,b)=>a<b?1:-1)
    notas.sort((a,b)=>a-b)
    //console.log(notas)

    if(cod>0){
        media = (notas[0] * 4 + notas[1]*3 + notas[2]*3)/10
        if(media>=5){
            console.log(`Aluno nº ${cod} aprovado com media: ${media}`)
        }
        else console.log(`Aluno nº ${cod} reprovado com media: ${media}`)

    }
    else console.log(`Código inválido.`)
}


boletim(1,2,3,4)
boletim(2,9,10,5)