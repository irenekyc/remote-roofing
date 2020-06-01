import React, {useState} from 'react'

const Header = ({curPage})=>{
    const [showMenu, setShowMenu] = useState(false)

    return(
        <nav className="header">
            <div className="wrapper">
                <div className="header-content">
                    <h2> DEMO Streaming</h2>
                    <div className="show-m" onClick={()=>setShowMenu(!showMenu)}>
                        {!showMenu ? (<i class="fas fa-bars"></i>) : (<i class="fas fa-times"></i>)}
                    </div>
                        <div className="hide-m">
                            <a href="#"> Log In</a>
                            <button className="btn-gray"> Start your free trial</button>
                        </div> 
                        {showMenu && ( <div className="mobile-menu">
                            <a href="#"> Log In</a>
                            <button className="btn-white"> Start your free trial</button>
                        </div>)}
                                
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