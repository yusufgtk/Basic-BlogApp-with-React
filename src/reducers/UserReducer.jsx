const initialState = {
    userName:"",
    userId:null,
    isAuthentication:false
};

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN_USER":
            return { 
                ...state,
                userName:action.payload.user.userName,
                id:action.payload.user.id,
                isAuthentication:true
            };
        case "LOGAUT_USER":
            return {
                ...state,
                userName:"",
                id:null,
                isAuthentication:false
            }
        default:
            return state;
    }
}

export default UserReducer