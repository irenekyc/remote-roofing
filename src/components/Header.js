import React, {Fragment} from 'react'
import {openRegister, openLogin, openMobileMenu} from '../actions/openPage'
import {logout} from '../actions/auth'
import {useDispatch, useSelector} from 'react-redux'

const Header = ()=>{
    const dispatch = useDispatch()
    const curPage = useSelector(state=> state.web.curPage)
    const isAuth = useSelector(state=> state.auth.auth)
    return(
        <nav className="header">
            <div className="wrapper">
                <div className="header-content">
                    <h2> DEMO Streaming</h2>
                    <div className="show-m" onClick={()=>dispatch(openMobileMenu())}>
                       {/* { (<i className="fas fa-bars"></i>)  (<i className="fas fa-times"></i>)} */}
                    </div>
                        <div className="hide-m">
                            {isAuth ? <span onClick={()=>dispatch(logout())}> Log Out </span> 
                                    :(<Fragment>
                                            <span onClick={()=>dispatch(openLogin())}> Log In</span>
                                            <button onClick={()=>dispatch(openRegister())}className="btn-gray"> Start your free trial</button>
                                    </Fragment>)}
                        </div> 
                        {/* {showMenu && ( <div className="mobile-menu">
                            <span onClick={dispatch(openLogin())}> Log In</span>
                            <button onClick={dispatch(openRegister())} className="btn-white"> Start your free trial</button>
                        </div>)} */}
                                
                </div>
                
            </div>
        <div className="title-tiles">
                    <div className="wrapper">
                        
                        <h3>{isAuth && <span> Hi User! You are currently at</span>}  
                            {curPage === "home"? "Home" : 
                            curPage ==="series"? "Popular Series": 
                            curPage==="movie"? "Popular Movies" : 
                            curPage==="register"? "Register Page" :null}</h3>
                    </div>
        </div>
        </nav>
    )
}

export default Header