import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getcart } from '../../Redux/CartReducer/action'

const Headermodal = () => {
    const dispatch=useDispatch()
    const bag=useSelector((store)=>store.bag.data)
    console.log('heas',bag);
    
   
  return (
    <Box>
      <Box cursor={"pointer"} display="flex" > <FaShoppingBag  style={{color: 'black', border:'1px', fontSize: '25px'}}/> My Bag <span></span> </Box>
    </Box>
  )
}

export default Headermodal