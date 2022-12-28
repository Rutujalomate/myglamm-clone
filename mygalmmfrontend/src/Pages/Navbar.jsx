import React, { useEffect } from 'react'
//import { Input ,Stack} from '@chakra-ui/react'
import { FaShoppingBag } from "react-icons/fa";

import { 
  Spacer,
  Flex,
  Box } from '@chakra-ui/react'
import {SearchBar} from '../Components/NavBar/SearchBar'
import Logo from '../Components/NavBar/Logo'
import { AiOutlineUser} from "react-icons/ai";
import {NavbarItems} from '../Components/NavBar/NavbarItems';
import { useDispatch, useSelector } from 'react-redux';
import { getcart } from '../Redux/CartReducer/action';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import User from './User';
import { OfferBar } from '../Components/NavBar/OfferBar';


const Navbar = () => {
   const dispatch=useDispatch()
   const isAuth=useSelector((store)=>store.auth.isAuth)
   const bag=useSelector((store)=>store.bag.bag)

 console.log('baged',isAuth)
const navigate=useNavigate()
const handleCart=()=>{
   navigate("/cart")
  
}


useEffect(()=>{
  dispatch(getcart())

},[dispatch])


  return (
    <Box className='navbar-sticky'   width='100%' >
    <OfferBar/>
    <Flex width='80%' direction='row' height='60px' margin='auto' pt='12px' backgroundColor='' justifyContent={'space-between'} gap={'9px'}>
      <Box> <Logo/> </Box>
      <Box className='searchbar' background={''} > <SearchBar /> </Box>
      <Spacer/>
      <Flex justifyContent={"space-between"} width="100px" backgroundColor={''} marginRight={'30px'} >

      {/* <Box  cursor={"pointer"} > <FaShoppingBag style={{color: 'black', border:'1px', fontSize: '25px'}}/> </Box>
      <Box cursor={"pointer"} > <AiOutlineUser style={{color: 'black', fontSize: '25px'}}/> </Box> */}

      <Box cursor={"pointer"} display="flex" > <FaShoppingBag  style={{color: 'black', border:'1px', fontSize: '25px'}} onClick={handleCart}/> 
      <span style={{"position":"relative","right":"10px","backgroundColor":"#fee8e8","border-radius":"50%","height":"20px","width":"20px","textAlign":"center"}}  >{bag.length}</span> </Box>
      
      <Box cursor={"pointer"} > {isAuth ? <User/>:<SignUp/>} </Box>

      </Flex>

    </Flex>
    <NavbarItems/>
    
  </Box>
  )
}

export default Navbar