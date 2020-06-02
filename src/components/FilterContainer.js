import React, {Fragment} from 'react'

const FilterContainer = ()=>{
    return(
    <Fragment>
        <div className="filterContainer">
            <div><span> Release Year : </span> <span> before 2015 </span> <span>  2015 or later </span></div>
            <div><span> Sort by: </span> <span>oldest </span> <span> latest</span> <span> From A-Z</span> <span> From Z -A</span></div>
        </div>
    </Fragment>
    )
}

export default FilterContainer