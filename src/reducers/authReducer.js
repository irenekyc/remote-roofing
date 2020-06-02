const initialState = {
    auth: false,
    failed: 0,
    username: null,
}

const authReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case "LOGINSUCCESS":
            return state={
                failed: 0,
                username: "Hello World",
                auth: true
            };
        case "LOGINFAIL":
            return state={
                ...state,
                auth: false,
                failed: state.failed+1,
            }
        case "LOGOUT":
            return state={
                username: null,
                failed: 0,
                auth: false
            };
        case "REGSUCCESS":
            return state={
                username: payload,
                failed: 0,
                auth: true
            }
        default:
            return state;
    }

}

export default authReducer;