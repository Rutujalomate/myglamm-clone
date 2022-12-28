import {Routes,Route,useRoutes,Router} from "react-router-dom"
//import Home from "./Home"
//import Login from "./Login"
import React, { useEffect } from "react";
import HomePage from "./HomePage";
import About from "../Components/Home/About";
import SingleProduct from "./SingleProduct";
import { getcart } from "../Redux/CartReducer/action";
import { useDispatch } from "react-redux";
import { getFeedsAPI } from "../Redux/AppReducer/action";
import Payment from "../Components/Home/Payment";
import PrivateRoute from "./PrivateRoute";
import Cart from "./Cart";
//import Dashboard from "./Dashboard";
//import SingleRestaurantPage from "./SingleRestaurantPage";
//import { BrowserRouter } from "react-router-dom";
//import Login from "./Login";
//import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch(getcart())

  // },[])
  useEffect(()=>{
    dispatch(getFeedsAPI())

  },[])
  return (
    <div>




      <Routes>
        <Route path="/" element={<HomePage />}/> 
         <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} /> 
         <Route path="/products/:type" element={<About />} /> 
         <Route path="/cart" element={<Cart />}/> 


         <Route path="/products/:type/:_id" element={<SingleProduct/>} /> 

        {/* <Route path="/restaurants/:id" element={<PrivateRoute><SingleRestaurantPage /></PrivateRoute>} /> */}
        
        
        
      </Routes>


    </div>
  );
}

export default AllRoutes;
