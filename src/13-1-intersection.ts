interface Car {
    brand :string
}

interface Electric{
    battery:number
}

type ElectricCar = Car & Electric


const myCar :ElectricCar={
    brand:"Hyndai",
    battery:85
}

console.log(myCar);