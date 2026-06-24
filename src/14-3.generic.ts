// T[K]
const getProperty =<T,K extends keyof T> (obj:T, key:K):T[K]=>{

    return obj[key]
}


const user ={name:"Alice", age:24}

const name = getProperty(user,"name")
const age = getProperty(user,"age")

console.log(name);
console.log(age);