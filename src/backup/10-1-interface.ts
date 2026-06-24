interface User {
    readonly id: number,
    name: string,
    age?: number
}

const user1:User={id:1,name:"Alice"}
const user2:User={id:2,name:"Bob",age:30}


console.log(user1,user2);