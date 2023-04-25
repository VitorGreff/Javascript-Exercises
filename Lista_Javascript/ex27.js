function check(h1, t1, h2, t2) {
    if (h1 === h2) {
        if (t1 > t2) {
            console.log(`The fist kid will surpass the second kid's height in 1 year.`)
        }
        else if (t2 > t1) {
            console.log(`The second kid will surpass the first kid's height in 1 year.`)
        }
        else console.log(`Both of the children have the same height and the same growth rate`)
    }
    else {
        if (h1 > h2) {
            if (t2 > t1) {
                console.log(`The second kid will surpass the second kid's height in ${calculateYears(h1, h2, t1, t2)} years.`)
            }
            else console.log(`The second kid wont surpass the first kid's height.`)
        }
        else {
            if (t1 > t2) {
                console.log(`The first kid will surpass the second kid's height in ${calculateYears(h2, h1, t2, t1)} years.`)
            }
            else console.log(`The first kid wont surpass the second kid's height.`)

        }
    }
}


function calculateYears(greater_height, smaller_height, greater_rate, smaller_rate) {
    let years = 0
    while (greater_height > smaller_height) {
        greater_height += greater_rate
        smaller_height += smaller_rate
        years++
    }
    return years
}

check(150, 2, 130, 4);

