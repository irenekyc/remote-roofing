import React, {Fragment} from 'react'
import { fetchData } from '../actions/movieData'
import {useDispatch, useSelector} from 'react-redux'

const FilterContainer = ()=>{
    const dispatch = useDispatch()
    const {filter, sortTitle,year} = useSelector(state=> state.data)
    return(
    <Fragment>
        <div className="filterContainer">
            <div><span> Release Year : </span> 
                    <span onClick = {()=> dispatch(fetchData(0, sortTitle, 1994, filter))}> 1994 and later </span>
                    <span onClick = {()=> dispatch(fetchData(0, sortTitle, 2000, filter))}>  2000 and later </span>
                    <span onClick = {()=> dispatch(fetchData(0, sortTitle, 2010, filter))}>  2010 and later </span>
                    <span onClick = {()=> dispatch(fetchData(0, sortTitle, 2015, filter))}>  2015 and later </span>
                    </div>
            <div><span> Sort by: </span> 
                    <span onClick = {()=> dispatch(fetchData(0, "asc", year, filter))}> From A-Z</span> 
                    <span onClick = {()=> dispatch(fetchData(0, "desc", year, filter))}> From Z -A</span></div>
        </div>
    </Fragment>
    )
}

export default FilterContainer