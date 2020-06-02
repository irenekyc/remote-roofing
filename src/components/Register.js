import React, {useState} from 'react'
import {register} from '../actions/auth'
import {useDispatch} from 'react-redux'

const Register = ()=>{
    const dispatch = useDispatch()
    const [regData, setRegData] = useState({
        regUsername: null,
        regPassword: null,
    })
    const [error, setError] = useState({
        username: {
            error: false,
            msg: null
        },
        password: {
            error: false,
            msg: null
        }
    })
    const onChangeHandler = (e)=>{
        setRegData({
            ...regData,
            [e.target.id]: e.target.value
        })
    }

    const {regUsername, regPassword} = regData

    const onClickHandler = ()=>{
        const regex = /(?=.*\d)(?=.*[a-z]).{4}/
        if (regUsername === null){
            setError((prevState=>({
                ...prevState,
                username:{
                    error: true,
                    msg: "username should not be empty"
                }
            })))
        }
        if (regPassword === null){
            setError((prevState=>({
                ...prevState,
                password:{
                    error: true,
                    msg: "password should not be empty"
                }
            })))
        }
        if (regUsername !==null && regUsername.length < 6){
            setError((prevState=>({
                ...prevState,
                username:{
                    error: true,
                    msg: "username is too short. should be at least 6 characters"
                }
            })))
        }
        if (regPassword!==null && regPassword.length < 4){
            return setError((prevState=>({
                ...prevState,
                password:{
                    error: true,
                    msg: "password is too short. should be at least 4 characters"
                }
            })))
        } else if (regPassword.length >=4 && !regex.test(regPassword)){
            //check password regex
            return setError((prevState=>({
                ...prevState,
                password:{
                    error: true,
                    msg: "please include at least one alphabet and one number"
                }
            })))
        } 
        dispatch(register(regUsername))

        
    }

    return(
        <div className="registerContainer">

       
        <div className="registerForm">
            <div id="regUserField">
                <label for="regUserName"> Username:</label>
                <input type="text" className="inputField" id="regUsername"  
                            placeholder="username" onChange={(e)=>onChangeHandler(e)}/>
                {error.username.error && (<small className="alert"> {error.username.msg}</small>)}

            </div>
            <div id="regPasswordField">
                <label for="regPassword"> Password:</label>
                <small> minimum 4 characters and combination of number and alphabet </small>
                <input id="regpassword" type="password" className="inputField" id="regPassword"  
                            placeholder="password" onChange={(e)=>onChangeHandler(e)}/>
                {error.password.error && (<small className="alert"> {error.password.msg}</small>)}
                
            </div>
            <button className="btn-gray" onClick={()=>onClickHandler()}> Register</button>
        </div>
        </div>
    )
}

export default Register