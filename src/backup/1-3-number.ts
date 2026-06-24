const calculateCircleArea = (radius: number): number => {

    if(radius<0){
        return "반지름은 0보다 커야 합니다."
    }

    let result = Math.PI * radius * radius
    return Number(result.toFixed(2))
}

let radius: number = -5


console.log(`Area: ${calculateCircleArea(radius)}`)