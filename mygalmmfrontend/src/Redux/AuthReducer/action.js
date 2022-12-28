import axios from "axios";
import { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILURE,LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actionTypes"

//export const loginuser = (params)  => {
    export const loginuser=(params)=>async(dispatch)=>{
console.log('params',params);
    dispatch({ type:  AUTHENTICATION_REQUEST ,payload:params});
    return await axios.post("https://real-gold-bull-hat.cyclic.app/eyeliner",params)
.then(res=>{
        return dispatch({type:AUTHENTICATION_SUCCESS,payload:params})
       }).catch(err=>dispatch({type:AUTHENTICATION_FAILURE}))
      };

      export const logoutuser=()=>(dispatch)=>{
        dispatch({type:LOGOUT_REQUEST});
        dispatch({type:LOGOUT_SUCCESS});
        }
        