export const  fetchData = (page=0, sort="asc", filter) => async dispatch=>{
    dispatch({
        type: "LOADING",
        loading: true,
    })
    if (filter === "series"){
        dispatch({
            type: "OPENSERIES"
        })
    } else if (filter === "movie"){
        dispatch({
            type: "OPENMOVIE"
        })
    }
    const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
    const movies = await response.json()
    const startFrom = page*21;
    const endAt = page*21 + 21;
    
    try{
        const filteredMovies = movies.entries.filter(e=> e.programType === filter)
        const sortedMovies = filteredMovies.sort(function(a,b) {
            return a.title > b.title ? 0 : -1
        }).slice(startFrom, endAt)

        

        dispatch({
            type: "LOADMOVIE",
            payload: sortedMovies,
        })
        dispatch({
            type: "LOADING",
            loading: false,
        })
    
    }
    catch(err){
        console.error(err)
        dispatch({
            type: "LOADFAIL",
            error: true,
        })
    }
}