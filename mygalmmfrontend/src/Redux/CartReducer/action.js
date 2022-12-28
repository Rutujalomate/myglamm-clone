import axios from 'axios'
import { ADDTOCART_FAILURE, ADDTOCART_REQUEST, ADDTOCART_SUCCESS, DELETE_CARTDATA_FAILURE, DELETE_CARTDATA_REQUEST, DELETE_CARTDATA_SUCCESS, GETCART_FAILURE, GETCART_REQUEST, GETCART_SUCCESS } from './actionTypes'

export const addtocart=(payload)=>async(dispatch)=>{
    dispatch({type:ADDTOCART_REQUEST})

//    try {
//      return await axios.post("https://busy-gray-toad-yoke.cyclic.app/cartdata",payload)
// //let data=response.data
// return dispatch({type:ADDTOCART_SUCCESS})
// //console.log(data)
// } catch (error) {
//     dispatch({type:ADDTOCART_FAILURE})

// }

return await axios.post("https://busy-gray-toad-yoke.cyclic.app/cartdata",payload)
.then(res=>{
        return dispatch({type:ADDTOCART_SUCCESS})
       }).catch(err=>dispatch({type:ADDTOCART_FAILURE}))


}

export const getcart=()=>async(dispatch)=>{
    dispatch({type:GETCART_REQUEST})

try {
    let response=await axios.get(`https://busy-gray-toad-yoke.cyclic.app/cartdata`)
//let data=response.data
return dispatch({type:GETCART_SUCCESS,payload:response.data})
//console.log(data)
} catch (error) {
    dispatch({type:GETCART_FAILURE})

}

}

export const detelecart=(_id)=>async(dispatch)=>{

    dispatch({type:DELETE_CARTDATA_REQUEST});
    return  await axios.delete(`https://busy-gray-toad-yoke.cyclic.app/cartdata/${_id}`)
    .then(res=>dispatch({type:DELETE_CARTDATA_SUCCESS}))
    .catch(err=>dispatch({type:DELETE_CARTDATA_FAILURE}))
}



