function mercado(fruta){
    switch(fruta){
        case 'maça':
            return 'Não vendemos esta fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Erro'
    }
}

console.log(mercado('maça'))
console.log(mercado('kiwi'))
console.log(mercado('melancia'))
console.log(mercado('maa'))