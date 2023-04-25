const despesasTotais = (arr) => arr.reduce((acc, value) => acc.preco + value.preco)

console.log(despesasTotais([{ nome: 'jornal online', categoria: 'informação', preco: 89.99 },
{ nome: 'cinema', categoria: 'entretenimento', preco: 150 }]))