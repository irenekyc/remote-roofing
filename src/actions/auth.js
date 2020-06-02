
export const login = (data)=>{
    if (data.username === "helloworld" && data.password ==="hw123"){

        return {
            type: "LOGINSUCCESS"
        }
    } else {
  
        return{
            type: "LOGINFAIL"
        }
    }
}

export const logout = ()=>{
    return{
        type: "LOGOUT"
    }
}
