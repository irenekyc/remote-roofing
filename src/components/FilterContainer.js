import React, {Fragment} from 'react'
import { fetchData } from '../actions/movieData'
import {useDispatch, useSelector} from 'react-redux'

const FilterContainer = ()=>{
    const dispatch = useDispatch()
    const {filter, sortYear, sortTitle, curPage, year} = useSelector(state=> state.data)
    return(
    <Fragment>
        <div className="filterContainer">
            <div><span> Release Year : </span> 
                    <span onClick = {()=> dispatch(fetchData(0, sortYear, sortTitle, 1994, filter))}> 1994 and later </span>
                    <span onClick = {()=> dispatch(fetchData(0, sortYear, sortTitle, 2000, filter))}>  2000 and later </span>
                    <span onClick = {()=> dispatch(fetchData(0, sortYear, sortTitle, 2010, filter))}>  2010 and later </span>
                    <span onClick = {()=> dispatch(fetchData(0, sortYear, sortTitle, 2015, filter))}>  2015 and later </span>
                    </div>
            <div><span> Sort by: </span> <span>oldest </span> <span> latest</span> <span> From A-Z</span> <span> From Z -A</span></div>
        </div>
    </Fragment>
    )
}

export default FilterContainer