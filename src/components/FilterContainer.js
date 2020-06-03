import React, {Fragment} from 'react'
import { fetchData } from '../actions/movieData'
import {useDispatch, useSelector} from 'react-redux'

const FilterContainer = ()=>{
    const dispatch = useDispatch()
    const {filter, sort} = useSelector(state=> state.data)
    return(
    <Fragment>
        <div className="filterContainer">
            <div><span> Release Year : </span> <span onClick = {()=> dispatch(fetchData(0, sort, "<2015", filter))}> before 2015 </span> <span onClick = {()=> dispatch(fetchData(0, sort, ">=2015", filter))}>  2015 or later </span></div>
            <div><span> Sort by: </span> <span>oldest </span> <span> latest</span> <span> From A-Z</span> <span> From Z -A</span></div>
        </div>
    </Fragment>
    )
}

export default FilterContainer