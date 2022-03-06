const initialState = {
    isfromsubmitted: false,
};

const loginReducer = (state = initialState, action)=>{
    switch(action.type){
        case "REQUEST":
            return {
                ...state,
                isfromsubmitted: false,
            };

        case "LOGIN":
            console.log("login reducer",action.payload.email)
            return{
                ...state,
                isfromsubmitted: action.payload,
            };
        
        case "LOGOUT":
            return{
                ...state,
                isfromsubmitted:false,
            };

        default:
            return state;
    }
}
export default loginReducer;