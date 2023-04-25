const removerVogais = (string) => {

    return string.replace(/[aeiou]/ig, '')
}
console.log(removerVogais('AAWAEAEEt'))
console.log(removerVogais('aaaAEEt'))