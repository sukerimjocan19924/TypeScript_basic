type Status = "success" | "error" | "loading"

type ApiResponse ={
    status: Status,
    data?: any,
    error?: string
}


const handleResponse = (response: ApiResponse):void=>{
    if(response.status=="success"){
        console.log(`Id: ${response.data.id}, Name: ${response.data.name}`);
        
    }else if(response.status=="error") {
        console.log(`Data: ${response.error}`);
        
    }else{
        console.log("loading....");
    }
}

handleResponse({
    status:"success",
    data:{
        id:1,
        name:"Alice"
    }
})
handleResponse({
    status:"error",
    error:"Something went wrong"
})