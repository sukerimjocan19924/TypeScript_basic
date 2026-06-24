const handle=(value:unknown):void=>{

    if(Array.isArray(value)){

        console.log(`배열의 길이 : ${value.length}`);
    }else{
        console.log("배열이 아닙니다.");
        
    }
    

}


handle([1,2,3])
handle("hello")