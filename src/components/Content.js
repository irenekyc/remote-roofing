import React, {Fragment} from 'react'
import Home from './Home'
import MovieCard from './MovieCard'

import { useSelector, useDispatch} from 'react-redux'
import { backHome} from '../actions/openPage'

const Content = ()=>{
    // const [movieData, setMovieData] = useState(null)
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    const curPage = useSelector(state => state.web.curPage)
    const movieData = useSelector(state => state.data.movieData)
    const dispatch = useDispatch()

    // const fetchData = async(curPage)=>{
        // const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        // const movies = await response.json()
        // try{
        //     const filteredMovies = movies.entries.filter(e=> e.programType === curPage && e.releaseYear >=2010)
        //     const sortedMovies = filteredMovies.sort(function(a,b) {
        //         return a.title > b.title ? 0 : -1
        //     }).slice(0, 21)
        //     setMovieData(sortedMovies)
        //     setLoading(false)
        // }
        // catch(err){
        //     console.error(err)
        //     setError(true)
        // }
    // }
    
    // useEffect(()=>{
    //     if(curPage === "home"){
            
    //     } else if(curPage === "series" || curPage === "movie"){
    //         //  fetchData(curPage)
    //     } 
    // }, [curPage])


    return(
        <Fragment>

    
                {curPage === "series" || curPage ==="movie" ? 
                        (<div className="goBack" onClick={()=>dispatch(backHome())}> Back </div>): null}


                   <div className="movie-cards-container">

                    {curPage === "home" && (
                        <Home />
                    )}
 
                    {/* {loading && (<h3> Loading...</h3>)}
                    {error && (<h3> Oops. Something went wrong</h3>)} */}

                    {movieData !==null && (
                        movieData.map(e=> <MovieCard key={e.title} data={e} />)
                    )}
                  </div>
        
         </Fragment>
 
    )

}

export default Content