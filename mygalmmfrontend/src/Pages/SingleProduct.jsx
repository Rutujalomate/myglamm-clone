import { Box, Button, Heading, Img,Modal,SimpleGrid,Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Textmodal from '../Components/Home/Textmodal';
import {  getSingleproducts } from '../Redux/AppReducer/action';
import { addtocart, getcart } from '../Redux/CartReducer/action';
import { ADDTOCART_SUCCESS } from '../Redux/CartReducer/actionTypes';

const SingleProduct = () => {
    const {type,_id}=useParams();
    //const parm=useParams();
  
    //const [page,setPage]=useState(5)
      const dispatch=useDispatch()
      const data=useSelector((store)=>store.product.data)
      //const bag=useSelector((store)=>store.product.bag)
  //console.log('baged',bag)
  console.log(data);


    useEffect(()=>{
        dispatch(getSingleproducts(type,_id))

        
      },[dispatch,type,_id])

      
      const addToCart=()=>{
        
      //   var data = bag.find(function(ele) {
      //     return ele._id === item._id;
      // });
      
      
          console.log('notfound');
          console.log(data[0]); // This is entire object i.e. `item` not boolean
      dispatch(addtocart(data[0]))
      .then(res=>{
        if(res.type===ADDTOCART_SUCCESS)
        {
            dispatch(getcart())
        }
      })
        
        
        
      }
  
  return (
    <SimpleGrid gap={15} justifyContent={'center'} marginTop={'30px'} backgroundColor=''>

{data.map((item)=>{
    return(
      <SimpleGrid columns={[1, 1,2, 2]} gap={15} justifyContent={'center'} marginTop={'30px'} backgroundColor=''>
      <Box className='singleproduct1'><Img src={item.img} alt='' width={'80%'}/></Box>
        <Box className='singleproduct2'>
            <Heading as='h2' size='lg' style={{textAlign: 'left',marginTop:'20px'}}>{item.name}</Heading>
            <Text as='b' style={{textAlign: 'left',marginTop:'20px',color:'red'}}>{item.description}</Text>
            <Box className='rating'>
          <Text className="">4.9 ⭐</Text>
          <Text className="">|</Text>
          <Text className="">1200  ratings</Text>
        </Box>
<Box className='price'>
<Box className={item.actualPrice?"price_wrapper1" :"center5" }>
              <Text>₹ {item["offerPrice"]}</Text>
              <Text className="mrp">
              {item.actualPrice? <s>₹ {item.actualPrice}</s>:""}
              </Text>
            </Box>    <Text>(MRP incl. of all taxes)</Text>
</Box>
<Box className='price'>
    <Text backgroundColor={'gray'}>You will receive cashback worth ₹45 as myglammPOINTS on this purchase</Text>
</Box>

<Box className='btn'>
    <Box backgroundColor={'black'} color={'white'}   onClick={addToCart}>

     <Textmodal/> 
    </Box>
</Box>
        </Box>
        
            </SimpleGrid>
)})}</SimpleGrid>
  )
}

export default SingleProduct