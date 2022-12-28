// Note: Do not update/change the initial state
import { GET_PRODUCTS_SUCCESS ,GET_PRODUCTS_LOADING,GET_PRODUCTS_ERROR, GET_SINGLEPRODUCTS_LOADING, GET_SINGLEPRODUCTS_SUCCESS, GET_SINGLEPRODUCTS_ERROR, GETCART_SUCCESS, ADDTOCART_SUCCESS, ADDTOCART_FAILURE, GETCART_REQUEST, GETCART_FAILURE, ADDTOCART_REQUEST} from './actionTypes'

const productInitalState = {
  loading: false,
  error: false,
  bag:[]

};
console.log("hello")
export const cartReducer = (state = productInitalState,{type,payload}) => {
   console.log('CARTSTATE',state)
   let cart = state.bag;

  switch(type){
    case ADDTOCART_REQUEST:{
      return {
          ...state,
          loading:true,
          error:false
      }
    }

case ADDTOCART_SUCCESS:{
  cart.push(payload);

  return {
      ...state,bag:cart
  }
}
case ADDTOCART_FAILURE:{
  return {
      ...state,
      loading:false,
          error:true
  }
}
case GETCART_REQUEST:{
  return {
      ...state,
      loading:true,
          error:false

  }
}

case GETCART_SUCCESS:{
  return {
      ...state,bag:payload
  }
}
case GETCART_FAILURE:{
  return {
      ...state,
      error:true,
          loading:false
  }
}
    default:{
        return state
    }
}
};
