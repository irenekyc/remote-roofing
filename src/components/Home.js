import React from 'react'
import {useDispatch} from 'react-redux'
import {fetchData} from '../actions/movieData'

const Home = ()=>{
    const dispatch = useDispatch()
    return(
        <div className="movie-cards-container">
                        <div className="movie-card home-page-card" onClick={()=>dispatch(fetchData(0, null, "movie"))}>
                            <div className="card-content">
                                <div className="card-content-bg">
                                    <i className="fas fa-film"></i>
                                </div>
                                <div className="card-content-content">
                                    <h4> SERIES</h4>
                                </div>
                            </div>
                            <div className="card-title">
                                <h5>Popular Series</h5>
                            </div>
                        </div>

                         <div className="movie-card home-page-card" onClick={()=>dispatch(fetchData(0, null, "series"))}>
                             <div className="card-content">
                                <div className="card-content-bg">
                                        <i className="fas fa-film"></i>
                                    </div>
                                    <div className="card-content-content">
                                        <h4> MOVIES</h4>
                                    </div>
                             </div>
                            <div className="card-title">
                                    <h5>Popular Movies</h5>
                            </div>
                         </div>
        </div>
    )
}

export default Home;