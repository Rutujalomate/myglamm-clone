// Note: Do not update/change the initial state
import { GET_PRODUCTS_SUCCESS ,GET_PRODUCTS_LOADING,GET_PRODUCTS_ERROR, GET_SINGLEPRODUCTS_LOADING, GET_SINGLEPRODUCTS_SUCCESS, GET_SINGLEPRODUCTS_ERROR, GETCART_SUCCESS, GET_PRODUCTS_SUCCESS2} from './actionTypes'

const productInitalState = {
  loading: false,
  error: false,
  data: [],
  

};
console.log("hello")
export const productReducer = (state = productInitalState,{type,payload}) => {
  console.log(type)
  switch(type){

    case GET_PRODUCTS_LOADING:{
      return{
          ...state,
          loading: false,
        }
  }


    case GET_PRODUCTS_SUCCESS:{
        return{
            ...state,
            data:payload
        }
    }
    case GET_PRODUCTS_SUCCESS2:{
      return{
          ...state,
          data:payload
      }
  }
    case GET_PRODUCTS_ERROR:{
      return{
          ...state,
          loading: false,
  error: true,
      }
  }

  case GET_SINGLEPRODUCTS_LOADING:{
    return{
        ...state,
        loading: false,
      }
}

case GET_SINGLEPRODUCTS_SUCCESS:{
  return{
      ...state,
      data:payload
  }
}
case GET_SINGLEPRODUCTS_ERROR:{
return{
    ...state,
    loading: false,
error: true,
}
}



    default:{
        return state
    }
}
};
