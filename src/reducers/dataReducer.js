const initialState ={
    loading: false,
    error: false,
    movieData: null,
    filter: null,
    curPage: 0,
    sortYear: "desc",
    sortTitle: "asc",
    year: null,
    totalPage: null
}

const dataReducer = (state = initialState, {type, payload, loading, page, error, filter, sortTitle, sortYear, year, totalPage})=>{
    switch(type){
        case "LOADMOVIE":
            return state = {
                ...state,
                movieData: payload,
                curPage:page,
                filter: filter,
                totalPage: totalPage,
                year: year,
                sortTitle: sortTitle,
                sortYear: sortYear

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