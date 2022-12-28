// TODO: use this store variable to create a store.

// Note: you can delete the line below, but remember to create a new store variable
//export const store = {};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks




import{legacy_createStore ,compose,applyMiddleware, combineReducers}
from "redux"
import thunk from 'redux-thunk'
//import {authReducer} from './auth/auth.reducer'
//import { cartReducer } from "./cart/cart.reducer";
//import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./AppReducer/reducer";
import { authReducer } from "./AuthReducer/Authreducer";
import { cartReducer } from "./CartReducer/reducer";
//import {postReducer} from './post/post.reducer'
//import {feedReducer} from './feed/feed.reducer'
// if (window.Cypress) {
//   window.store = store;
// }

const composecreater=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose

 const rootReducer=combineReducers({
     auth:authReducer,
 product:productReducer,
 bag:cartReducer,
//count:cartReducer
 })

// const logger=(state)=>(next)=>(action)=>{

//         console.log("action", typeof action)
//         if(typeof action=="function"){
//             return action(state.dispatch,state.getState)
//         }
//        return next(action)
//     }


export const store =legacy_createStore
(rootReducer,composecreater(applyMiddleware(thunk)))