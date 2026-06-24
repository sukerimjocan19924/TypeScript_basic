const calculate = (radius: number): number => {

    let result = Math.PI * radius * radius
    return Number(result.toFixed(2))
}

let radius: number = 5


console.log(`Area: ${calculate(radius)}`)