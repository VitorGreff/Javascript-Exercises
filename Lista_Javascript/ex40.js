function gradesEvaluation(arr) {
    for (let grade of arr) {
        if (grade >= 0 && grade <= 4.9) {
            console.log(`The student got a D`)

        }
        else if (grade <= 6.9) {
            console.log(`The student got a C`)

        }
        else if (grade <= 8.9) {
            console.log(`The student got a B`)

        }
        else if (grade <= 10) {
            console.log(`The student got a A`)

        }
        else console.log(`Invalide grade.`)
    }
}

let grades = [10, 9.5, 5.4, 2.3, 5]
gradesEvaluation(grades)