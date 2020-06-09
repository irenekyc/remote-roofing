import React, {Fragment} from 'react'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Movie from './Movie'
import { useSelector} from 'react-redux'


const Content = ()=>{
    const curPage = useSelector(state => state.web.curPage)

    return(
        <Fragment>
                {curPage === "login" && (<Login />)}
                {curPage === "register" && (<Register />)}
                {curPage === "home" && (<Home />)}
                {curPage === "series" || curPage==="movie" ? <Movie />: null}
         </Fragment>
    )
}

export default Content