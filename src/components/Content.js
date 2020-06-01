import React, {useEffect, useState} from 'react'
import Home from './Home'
import MovieCard from './MovieCard'

const Content = ({curPage, changePage})=>{
    const [movieData, setMovieData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = async(curPage)=>{
        setLoading(true)
        setMovieData(null)
        const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        const movies = await response.json()
        try{
            const filteredMovies = movies.entries.filter(e=> e.programType === curPage && e.releaseYear >=2010)
            const sortedMovies = filteredMovies.sort(function(a,b) {
                return a.title > b.title ? 0 : -1
            }).slice(0, 21)
            setMovieData(sortedMovies)
            setLoading(false)
        }
        catch(err){
            console.error(err)
            setError(true)
        }
    }
    
    useEffect(()=>{
        if(curPage === "home"){
            setMovieData(null)
        } else if(curPage === "series" || curPage === "movie"){
             fetchData(curPage)
        } 
    }, [curPage])


    return(
        <main className="main-content-container">

                <div className="wrapper">

                {curPage === "series" || curPage ==="movie" ? 
                        (<div className="goBack" onClick={()=>{changePage("home")}}> Back </div>): null}


                   <div className="movie-cards-container">

                    {curPage === "home" && (
                    <Home changePage={(e)=>changePage(e)}/>
                    )}
 
                    {loading && (<h3> Loading...</h3>)}
                    {error && (<h3> Oops. Something went wrong</h3>)}

                    {movieData !==null && (
                        movieData.map(e=> <MovieCard key={e.title} data={e} />)
                    )}
                  </div>
                </div>
        </main>
    )

}

export default Content