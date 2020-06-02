const initialState = {
    auth: false,
    failed: 0,
}

const authReducer = (state=initialState, {type})=>{
    switch(type){
        case "LOGINSUCCESS":
            return state={
                failed: 0,
                auth: true
            };
        case "LOGINFAIL":
            return state={
                auth: false,
                failed: state.failed+1,
            }
        case "LOGOUT":
            return state={
                failed: 0,
                auth: false
            };
        default:
            return state;
    }

}

export default authReducer;