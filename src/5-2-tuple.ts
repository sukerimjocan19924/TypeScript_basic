const getPersonInfo=():[string, number]=>{

    return ["Bob",25]
}

let person: [string, number] = getPersonInfo()


console.log(`Name: ${person[0]}, Age: ${person[1]}`)