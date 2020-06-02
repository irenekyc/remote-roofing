import React, {Fragment} from 'react'
import Home from './Home'
import MovieCard from './MovieCard'
import { useSelector, useDispatch} from 'react-redux'
import { backHome} from '../actions/openPage'

const Content = ()=>{
    const curPage = useSelector(state => state.web.curPage)
    const {loading, movieData, error} = useSelector(state => state.data)
    const dispatch = useDispatch()
    return(
        <Fragment>

    
                {curPage === "series" || curPage ==="movie" ? 
                        (<div className="goBack" onClick={()=>dispatch(backHome())}> Back </div>): null}


                {curPage === "home" && (<Home />)}
 
                {curPage === "series" || curPage==="movie" ?
                (<div className="movie-cards-container">
                    {loading && (<h3> Loading...</h3>)}
                    {error && (<h3> Oops. Something went wrong</h3>)}
                    {movieData !==null && (
                        movieData.map(e=> <MovieCard key={e.title} data={e} />)
                    )}
                    </div>) : null}
                    

         </Fragment>
 
    )

}

export default Content