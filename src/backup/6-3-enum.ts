enum Role{
    Admin,
    User,
    Guest
}

const canAccessDashboard=(role:Role):boolean=>{

    return role==Role.Admin || role==Role.User
}

console.log(canAccessDashboard(Role.Guest))