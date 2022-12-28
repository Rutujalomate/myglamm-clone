// Product actions here
//import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types"


import axios from 'axios'
import { GET_PRODUCTS_SUCCESS ,GET_PRODUCTS_LOADING,GET_PRODUCTS_ERROR, GET_SINGLEPRODUCTS_LOADING, GET_SINGLEPRODUCTS_SUCCESS, GET_SINGLEPRODUCTS_ERROR, ADDTOCART_REQUEST, ADDTOCART_SUCCESS, ADDTOCART_FAILURE, GETCART_REQUEST, GETCART_SUCCESS, GETCART_FAILURE, GET_PRODUCTS_SUCCESS2} from './actionTypes'

export const getFeedsAPI=(name,page)=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
if(page==undefined){
    page=10
}
    try {
        let response=await axios.get(`https://kind-gold-deer-gear.cyclic.app/products?cetegory=${name}&_limit=${page}`)
    //let data=response.data
    return dispatch({type:GET_PRODUCTS_SUCCESS,payload:response.data})
//console.log(data)
    } catch (error) {
        dispatch({type:GET_PRODUCTS_ERROR})

    }
   
}


export const getFeedsAPI2=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})

    try {
        let response=await axios.get(`https://kind-gold-deer-gear.cyclic.app/products`)
    let data=response.data
    return dispatch({type:GET_PRODUCTS_SUCCESS2,payload:response.data})
//console.log(data)
    } catch (error) {
        dispatch({type:GET_PRODUCTS_ERROR})

    }
   
}





export const getSingleproducts=(name,id)=>async(dispatch)=>{
    dispatch({type:GET_SINGLEPRODUCTS_LOADING})

    try {
        let response=await axios.get(`https://kind-gold-deer-gear.cyclic.app/products?cetegory=${name}&_id=${id}`)
    //let data=response.data
    return dispatch({type:GET_SINGLEPRODUCTS_SUCCESS,payload:response.data})
//console.log(data)
    } catch (error) {
        dispatch({type:GET_SINGLEPRODUCTS_ERROR})

    }
   
}

