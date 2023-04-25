//Object.entries retorna tudo enumeravel
const receberMelhorEstudante = (estudantes) =>{
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {
        const chave = 0,
         valor = 1
        return {nome: estudante[chave] , media: media(estudante[valor])}
    })

    const estudantesOrdenados = estudantesComMedias.sort((estA, estB)=>estB.media - estA.media)
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}

const obj = {
    joao: [8,7,5,2],
    mariana: [9,1,5,2],
    carla: [3,7,4,2]
}
values = Object.values(obj)
const soma = arr => arr.reduce((acc, value) => acc+value)
const media = arr => soma(arr)/arr.length

console.log(receberMelhorEstudante(obj))