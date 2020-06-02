const initialState = {
    curPage: "home",
    mobileMenu: false
}

const webReducer = (state=initialState, {type})=>{
    switch(type){
        case "LOGINSUCCESS":
        case "REGSUCCESS":
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
                mobileMenu: false,
                curPage: "login"
            };
        case "OPENREGISTER":
            return state={
                mobileMenu: false,
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