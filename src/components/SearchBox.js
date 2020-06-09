import React, {Component, Fragment} from 'react'
import {debounce} from 'lodash'
import {fetchData} from '../actions/movieData'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class SearchBox extends Component{
    constructor(props){
        super(props)
        this.state={
            searchQuery: null,
            loading: null}
        this.changeHandler = this.changeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.fetchData = this.props.fetchData
        this.filter = this.props.filter
        this.search = this.props.searchQuery
        this.clearSearch =  ()=>{
            this.fetchData(0, "asc", null, this.filter, null)
        }
    }
        changeHandler = (e)=>{
            const input = e.target.value
            this.setState((prevState)=>({
                ...prevState,
                searchQuery: input
            }))
        }
        onSubmitHandler =  (e)=>{
            e.preventDefault()
            console.log(this.state.searchQuery)
            this.fetchData(0, "asc", null, this.filter, this.state.searchQuery)
        }

        
        



    render(){
        return(
            <div className="searchbox-container">
                 {this.search === null &&(<form onSubmit={this.onSubmitHandler}>
                    <label for ="searchInput"> Search: </label><input id="searchInput" type="text" value={this.state.SearchQuery} onChange={this.changeHandler}/>
                </form>)}
                {this.search !==null && (<Fragment>
                        <p> Search Result of <span className="search-em">{this.search}</span></p>
                        <p><span className="search-no-em" onClick={this.clearSearch}> Clear Search</span></p>
                        </Fragment>)}
                
            </div>
           
            
        )

    }

}
SearchBox.propTypes = {
    fetchData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,

}

const mapStateToProps = state=>({
    filter: state.data.filter,
    searchQuery: state.data.searchQuery,
})
   

export default connect(mapStateToProps,{fetchData})(SearchBox)