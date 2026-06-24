
const getFirstElement =<T>(arr:T[]):T=>{
    return arr[0]
}

const firstNum = getFirstElement([10,20,30])
const firstStr = getFirstElement(["a","b","c"])

console.log(firstNum);
console.log(firstStr);