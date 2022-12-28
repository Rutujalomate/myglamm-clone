import { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actionTypes"

const init={
    isAuth:false,
    token:'',
    isLoading:false,
    isError:false,
    user:[]
}


export const authReducer=(state=init,{type,payload})=>{
    console.log('payload',payload);
    let user1 = state.user;

switch(type){
    case AUTHENTICATION_REQUEST:{
        return{...state,isLoading:true};
    }
    case AUTHENTICATION_SUCCESS:{
        localStorage.setItem("userData",payload);
        user1.push(payload);

        return {
            ...state,   
             isAuth:true,
        }    }
    case LOGOUT_REQUEST:{
        return{...state,isLoading:true};

    }
    
    case LOGOUT_SUCCESS:{
        localStorage.removeItem("userData");
        return{...state,isLoading:false,isAuth:false}
    }
    default:{
        return state
    }
}
}