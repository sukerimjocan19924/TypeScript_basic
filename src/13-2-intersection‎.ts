type Logger ={
    log:()=>void
}

type TimeStamp ={time:Date}


const printLog =(item:Logger & TimeStamp)=>{

    item.log()
    console.log("Logged at",item.time);
    
}

printLog({
    log:()=>console.log("Logging......"),
    time:new Date().toLocaleDateString()
})