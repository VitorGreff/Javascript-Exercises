function doesContain(string1, string2) {
    let variable = true
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if (string1.charAt(i).toLowerCase() === string2.charAt(j).toLowerCase()) {
                variable = true
                break
            }
            else variable = false
        }
        if (!variable) {
            return variable
        }
    }

    for (let i = 0; i < string2.length; i++) {
        for (let j = 0; j < string1.length; j++) {
            if (string2.charAt(i).toLowerCase() === string1.charAt(j).toLowerCase()) {
                variable = true
                break
            }
            else variable = false
        }
        if (!variable) {
            return variable
        }
    }
    return variable
}

let str1 = 'abgdft'
let str2 = 'adfgb'
console.log(doesContain(str1, str2))