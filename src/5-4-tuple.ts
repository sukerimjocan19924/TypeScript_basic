const displayUserInfo = (user: [string, number, string]):void=>{

    console.log(`이름: ${user[0]}, 나이: ${user[1]}, 직업: ${user[2]}`)
}


let userInfo:[string, number, string]=["Jane",28,"개발자"]


displayUserInfo(userInfo)