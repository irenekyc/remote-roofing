import React, {Fragment} from 'react'

const Home = ({changePage})=>{
    return(
<Fragment>
                        <div className="movie-card home-page-card" onClick={()=>{changePage("series")}}>
                            <div className="card-content">
                                <div className="card-content-bg">
                                    <i class="fas fa-film"></i>
                                </div>
                                <div className="card-content-content">
                                    <h4> SERIES</h4>
                                </div>
                            </div>
                            <div className="card-title">
                                <h5>Popular Series</h5>
                            </div>
                        </div>

                         <div className="movie-card home-page-card" onClick={()=>changePage("movie")}>
                             <div className="card-content">
                                <div className="card-content-bg">
                                        <i class="fas fa-film"></i>
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