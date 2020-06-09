const initialState ={
    loading: false,
    error: false,
    movieData: null,
    filter: null,
    curPage: 0,
    sortTitle: "asc",
    year: null,
    totalPage: null,
    searchQuery: null,
}

const dataReducer = (state = initialState, {type, payload, loading, curPage, error, filter, sortTitle, year, totalPage, searchQuery})=>{
    switch(type){
        case "LOADMOVIE":
            return state = {
                ...state,
                movieData: payload,
                curPage,
                filter,
                totalPage,
                year,
                sortTitle,
                searchQuery,

            }
        case "LOADING": 
            return state = {
                ...state,
                loading: loading,
                movieData: payload,
            }
        case "LOADFAIL":
            return state = {
                ...state,
                movieData: null,
                loading: false,
                error: error,
            }
        default:
            return state;
    }
}

export default dataReducer;