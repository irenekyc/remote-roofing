import React, {Fragment} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { backHome} from '../actions/openPage'
import FilterContainer from './FilterContainer'
import PaginationContainer from './PaginationContainer'
import MovieCard from './MovieCard'

const Movie = ()=>{
    const {loading, movieData, error} = useSelector(state => state.data)
    const dispatch = useDispatch()

    return (
        <Fragment>
            <div className="contentHead">
                   <div className="goBack" onClick={()=>dispatch(backHome())}> Back Home </div>
                </div>
                
                
                    {loading && (<h3> Loading...</h3>)}
                    {error && (<h3> Oops. Something went wrong</h3>)}
                    {movieData !==null && (
                        <Fragment>
                            <FilterContainer />
                            <div className="movie-cards-container">
                                {movieData.map(e=> <MovieCard key={e.title} data={e} />)}
                            </div>
                            <div className="contentFoot">
                                 <PaginationContainer />
                             </div>
                        </Fragment>)}
            
        </Fragment>
    )
    
}

export default Movie