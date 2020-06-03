
export const  fetchData = (page=0, sortTitle="asc", year=2010, filter) => async dispatch=>{
    dispatch({
        type: "LOADING",
        loading: true,
        payload: null
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
        const filteredMovies = movies.entries.filter(e=> e.programType === filter && e.releaseYear >= year)
        const totalPage = Math.ceil(filteredMovies.length / 21)
        let sortedMovies = []
        if (sortTitle === "asc"){
            sortedMovies = filteredMovies.sort(function (a,b){
                return a.title> b.title? 0 : -1;
        } )}else if (sortTitle === "desc"){
            sortedMovies = filteredMovies.sort(function (a,b){
                return a.title> b.title? -1 : 0;
        })}
        sortedMovies = sortedMovies.slice(startFrom, endAt)
        console.log(page)
        console.log(sortedMovies)

        dispatch({
            type: "LOADMOVIE",
            payload: sortedMovies,
            filter: filter,
            sortTitle: sortTitle,
            year: year,
            curPage: page,
            totalPage,
        })
        dispatch({
            type: "LOADING",
            loading: false,
            payload: sortedMovies,
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