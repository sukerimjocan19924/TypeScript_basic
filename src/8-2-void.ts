const printFruits=(fruits:string[]):void=>{
    fruits.forEach(frute=>{

        console.log(`🍎 ${frute}`)
    })
}
const printNewFruits = (fruits: string[]): void => {
    fruits.map(frute => console.log(`🍎 ${frute}`))
}


printNewFruits(["사과", "바나나", "오렌지"])