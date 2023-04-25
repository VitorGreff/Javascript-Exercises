const buscarPalavraSemelhante = (string, arr) => {
    let res = []

    res = arr.filter(function (e) {
        if (e.includes(string)) {
            return e
        }
    })
    return res
}

console.log(buscarPalavraSemelhante('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavraSemelhante('python', ['Java', 'c++', 'javascript']))