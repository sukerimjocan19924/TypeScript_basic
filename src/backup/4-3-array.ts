const filterFrutes=(frutes:string[]):string[]=>{

    return frutes.filter(frute=>frute.startsWith("b"))
}



let fruitList: string[] = ["apple", "banana", "blueberry", "cherry"];

console.log(`B로 시작하는 과일 : ${filterFrutes(fruitList)}`)