const isEqual =<T>(a:T,b:T):boolean=>{
    return a===b
}

console.log(isEqual<number>(5,5));
console.log(isEqual<string>("5",5));