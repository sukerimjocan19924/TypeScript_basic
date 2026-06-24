const calculateAverage=(scores:number[]):number=>{

    let total =scores.reduce((sum,score)=>sum+score,0)

    const result = total/scores.length

    return result.toFixed(2)

}

let marks:number[]=[75,90,80]

console.log(`Average Score : ${calculateAverage(marks)}`)