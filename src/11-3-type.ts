type Product={
    id:number;
    name:string;
    price:number;
}


const products:Product[]=[
    {id:1,name:"Laptop",price:1500},
    {id:2,name:"Mouse",price:200},
    {id:3,name:"Keyboard",price:500},
]

const calculateTotal =(products:Product[]):number=>{
    return products.reduce((sum,product)=>sum+product.price,0)
}

console.log(`총 합: ${calculateTotal(products)}`)