import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getFeedsAPI } from '../../Redux/AppReducer/action'
import { Box, Button, Img,  SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";


const About = () => {
  const {type}=useParams();
  const parm=useParams();

  const [page,setPage]=useState(5)
    const dispatch=useDispatch()
    const data=useSelector((store)=>store.product.data)
console.log(parm);
console.log(type)

const addToCart = (item) => {
  //dispatche({ type: "ADD", item });
  console.log(item)
};

    useEffect(()=>{
      dispatch(getFeedsAPI(type,page))
      
    },[dispatch,type,page])

  return (
    
      <SimpleGrid  columns={[1, 2, 2, 3]} spacing="5">{data.map((e) => {
        return(
          <Link to={`/products/${type}/${e._id}`} textDecoration={'none'} >

<Box className="per_product_card" width={{ base: '100%',sm:'100%', md: '100%', lg: '100%' }}  >
            <Box className="per_prod_img">
              <Img src={e.img} alt="" />
            </Box>
            <Box className="center" backgroundColor={''} overflow={'hidden'}>
              <Text className="name"  noOfLines={3} backgroundColor={''} fontSize={{ base: '10px',sm:'10px', md: '12px', lg: '15px' }} overflow="hidden" >{e.name}</Text>
             </Box>
             <Box className='center2'> <Text className="description" noOfLines={2}>{e.description}</Text></Box> 
            <Box className="shade_wrapper">
              <Box>
                <Img
                  src="https://www.myglamm.com/images/plus-icon.png"
                  alt=""
                />
              </Box>
              <Text className="count">{e.count}</Text>
            </Box>
            <Box className={e.actualPrice?"price_wrapper" :"center" }>
              <Text>₹ {e["offerPrice"]}</Text>
              <Text className="mrp">
              {e.actualPrice? <s>₹ {e.actualPrice}</s>:""}
              </Text>
            </Box>
          </Box>

  </Link>)
})}</SimpleGrid >
    
  )
}

export default About