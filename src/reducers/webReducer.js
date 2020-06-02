const initialState = {
    curPage: "home",
    mobileMenu: false
}

const webReducer = (state=initialState, {type})=>{
    switch(type){
        case "LOGINSUCCESS":
            return state={
                ...state,
                curPage: "home"
            }
        case "OPENMOVIE":
            return state={
                ...state,
                curPage: "movie"
            };
        case "OPENSERIES":
            return state={
                ...state,
                curPage: "series"
            };
        case "OPENLOGIN":
            return state={
                ...state,
                curPage: "login"
            };
        case "OPENREGISTER":
            return state={
                ...state,
                curPage: "register"
            }
        case "OPENRMOBILEMENU":
            return state={
                ...state,
                mobileMenu: !state.mobileMenu
            }
        case "BACKHOME":
            return state={
                ...state,
                curPage: "home"
            }
        default:
            return state;
    }

}

export default webReducer;