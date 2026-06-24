type Shape={
    area:()=>number
}

type Circle = Shape & {
    radius:number
}


const circle:Circle={
    radius:5,
    area:function(){
        return (Math.PI*this.radius**2).toFixed(2)
    }
}

console.log(`Circle area: ${circle.area()}`);