import React, {Fragment} from 'react'
import {useDispatch} from 'react-redux'
import {openSeries, openMovie} from '../actions/openPage'

const Home = ()=>{
    const dispatch = useDispatch()
    return(
        <Fragment>
                        <div className="movie-card home-page-card" onClick={()=>dispatch(openSeries())}>
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

                         <div className="movie-card home-page-card" onClick={()=>dispatch(openMovie())}>
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
                    </Fragment>
    )
}

export default Home;