const initialState ={
    movieData: null,
    filter: null,
    curPage: 0,
    sort: null
}

const dataReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case "filter":
            return state = {
                movieData: payload,
                filter: null,
                curPage:0,
                sort:null
            }
        default:
            return state;
    }
}

export default dataReducer;