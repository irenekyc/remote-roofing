import React from 'react'

const Header = ({curPage})=>{
    return(
        <nav className="header">
            <div className="wrapper">
                <div className="header-content">
                    <h2> DEMO Streaming</h2>
                    <a href="#"> Log In</a>
                    <button className="btn-gray"> Start your free trial</button>
                </div>
                
            </div>
        <div className="title-tiles">
                    <div className="wrapper">
                        <h3>Popular {curPage === "home"? "Titles" : curPage ==="series"? "Series": curPage==="movie"? "Movies" : null}</h3>
                    </div>
        </div>
        </nav>
    )
}

export default Header