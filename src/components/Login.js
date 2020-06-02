import React, {useState, useEffect} from 'react'
import {login} from '../actions/auth'
import {useDispatch, useSelector} from 'react-redux'
import {openRegister} from '../actions/openPage'


const Login = ()=>{
    const [loginData, setLoginData]= useState({
        username: null,
        password: null
    })
    const [error, setError] = useState({
        username: false,
        password: false
    })

    const loginFailed = useSelector(state=> state.auth.failed)

    const onChangeHandler = (e)=>{
        setLoginData({
            ...loginData,
            [e.target.id]: e.target.value,
        })
        if (loginData.username !== null){
            setError({
                ...error,
                username: false,
            })
        } 
        if (loginData.password !== null){
            setError({
                ...error,
                password: false
            })
        }
    }

    const onClickHandler = ()=>{
        if (loginData.username.length ===0 ){
            setError((prevState)=>({
                ...prevState,
                username: true,
            }))
        } 
        if (loginData.password.length===0){
            setError((prevState)=>({
                ...prevState,
                password: true,
            }))
        }
        if (loginData.username.length>=1 && loginData.password.length>=1){
            dispatch(login(loginData))
        }
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        //reset login details after failed attempted
        setLoginData({
            username: "",
            password: "",
        })
    }, [loginFailed >= 1])


    return (
   
        <div className="loginContainer">
            {loginFailed >=1 && (<div className="alert-container"> WRONG CREDENTIAL.  {loginFailed >=2 && `failed attempt: ${loginFailed} please check again`} </div>)}
            <div className="loginForm">
                <div id="usernameField">
                    <label for="username"> Username:</label>
                    <input onChange={(e)=>onChangeHandler(e)} id="username" type="text" className="inputField" placeholder="Username: helloworld" value={loginData.username}/>
                    {error.username && (<small> Username cannot be empty</small>)}

                </div>
                <div id="passwordField">
                    <label for="password"> Password: </label>
                    <input onChange={(e)=>onChangeHandler(e)} id="password" type="password" className="inputField" placeholder="Password: hw123" value={loginData.password} />
                    {error.password && (<small> Please input password</small>)}
                </div>
                <button className="btn-gray" onClick={()=>onClickHandler()}> Confirm</button>
                <p id="openRegister" onClick={()=>dispatch(openRegister())}> New to DEMO? Register for free</p>
            </div>
            
        </div>

    )

}

export default Login