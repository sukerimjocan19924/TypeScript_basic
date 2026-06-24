const processInput=(value:unknown):void=>{

    if(typeof value ==="string"){

        console.log(`String - ${value.toUpperCase()}`)
    }else if(typeof value==="number"){

        console.log(`Number - ${value.toFixed(2)}`)
    }else{
        console.log("Unknown type");
        
    }
}


processInput("Hello Typescript")
processInput(123456)
processInput(true)