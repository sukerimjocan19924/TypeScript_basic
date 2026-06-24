const handleValue =(value:any):void=>{
    console.log(value.toFixed?.(2))
}

// handleValue("typescript")


const handleSafeValue =(value:unknown):void=>{
    if(typeof value==="number"){
        console.log(value.toFixed(2))

    }else{
        console.log("숫자를 입력하세요")
    }
    
}
handleSafeValue("456")