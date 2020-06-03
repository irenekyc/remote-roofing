import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchData} from '../actions/movieData'

const PaginationContainer = ()=>{
    const dispatch = useDispatch()
    const {curPage, totalPage, filter, sortTitle, year} = useSelector(state=> state.data)
return(
        <div className="paginationContainer">
            {curPage === 0 ? null :
                 <div className="prev"> 
                     <span  onClick={()=>dispatch(fetchData(curPage - 1, sortTitle, year, filter))}> Prev </span>
                </div>
            }
            {totalPage > 1 && curPage !==totalPage-1 && 
                (<div className="next"> 
                    <span onClick={()=>dispatch(fetchData(curPage + 1, sortTitle, year, filter))}> Next</span>
                </div>)}
            
        </div>)
}

export default PaginationContainer