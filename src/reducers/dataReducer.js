const initialState ={
    loading: false,
    error: false,
    movieData: null,
    filter: null,
    curPage: 0,
    sort: null
}

const dataReducer = (state = initialState, {type, payload, loading, page, error})=>{
    switch(type){
        case "LOADMOVIE":
            return state = {
                ...state,
                movieData: payload,
                curPage:page,
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