import React from 'react'

const MovieCard = ({data})=>{
    console.log("load")
    return(
        <div className="movie-card">
            <div className="card-content">
                <div className="movie-card-image">
                    <img src={data.images["Poster Art"].url} alt={data.title}/>
                </div>
            </div>
            <div className="card-title">
                 <h5> {data.title}</h5>
            </div>    
        </div>
    )

}

export default MovieCard