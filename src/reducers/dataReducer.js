const initialState ={
    loading: false,
    error: false,
    movieData: null,
    filter: null,
    curPage: 0,
    sort: "asc",
    year: null,
    totalPage: null
}

const dataReducer = (state = initialState, {type, payload, loading, page, error, filter, sort, year, totalPage})=>{
    switch(type){
        case "LOADMOVIE":
            return state = {
                ...state,
                movieData: payload,
                curPage:page,
                filter: filter,
                totalPage: totalPage,
                year: year,
                sort: sort

            }
        case "LOADING": 
            return state = {
                ...state,
                loading: loading
            }
        case "LOADFAIL":
            return state = {
                ...state,
                error: error,
            }
        default:
            return state;
    }
}

export default dataReducer;