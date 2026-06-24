const logItems =(items : string[] | string):void=>{

    if(Array.isArray(items)){
        items.forEach((item)=>console.log(`${item}, `)   )
    }else{
        console.log(items);
        
    }

}

logItems(["apple", "grape", "orange"])
logItems("orange")