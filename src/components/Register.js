import React, {useState} from 'react'

const Register = ()=>{
    const [regData, setRegData] = useState({
        regUsername: null,
        regPassword: null,
    })
    const onChangeHandler = (e)=>{
        setRegData({
            ...regData,
            [e.target.id]: e.target.value
        })
    }

    return(
        <div className="registerForm">
            <div id="regUserField">
                <label for="regUserName">
                    Username:
                    <input type="text" className="inputField" id="regUsername"  
                            placeholder="username" onChange={(e)=>onChangeHandler(e)}/>
                </label>
            </div>
            <div id="regPasswordField">
                <label for="regPassword">
                    Password:
                    <small> should be at least four characters and combination of numbers and alphabet </small>
                    <input id="regpassword" type="password" className="inputField" id="regPassword"  
                            placeholder="password" onChange={(e)=>onChangeHandler(e)}/>
                </label>
            </div>
            <button className="btn-gray"> Register</button>
        </div>
    )
}

export default Register