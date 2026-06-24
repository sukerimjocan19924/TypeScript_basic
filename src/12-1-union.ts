const formatInput =(input:string | number):string=>{

    if(typeof input ==="string"){
        return input.toUpperCase()
    }else if(typeof input ==="number"){
        return input.toFixed(3)
    }else{
        return "숫자나 문자를 입력하세요"
    }
}


console.log(formatInput("hello"));
console.log(formatInput(456789));
console.log(formatInput(false));