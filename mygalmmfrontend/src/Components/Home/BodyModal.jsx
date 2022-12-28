import { Box, Button, Img,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ArrowForwardIcon,CloseIcon } from "@chakra-ui/icons";
import { DELETE_CARTDATA_SUCCESS } from '../../Redux/CartReducer/actionTypes';
import { detelecart, getcart } from '../../Redux/CartReducer/action';
import { useNavigate } from 'react-router-dom';


const BodyModal = () => {
    const dispatch=useDispatch()
    const [remove,setRemove]=useState(false)
    const [data,setData]=useState([]);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    //const data=useSelector((store)=>store.product.data)
    const bag=useSelector((store)=>store.bag.bag)
console.log("bagofmodal",bag)
    const handleDelete=(ele)=>{
      dispatch(detelecart(ele.id)).then(res=>{
        if(res.type===DELETE_CARTDATA_SUCCESS)
        {
          dispatch(getcart())
          setRemove(true);
          setTimeout(()=>{
            setRemove(false)
          },3000)
        }
      })
    let amount=data.reduce((sum,ele)=>{
      return sum+=ele.offerPrice*Number(ele.total)
      },0)
       setTotal(amount)
    }


  return (
<Box>
  {bag.map((item)=>{
    return(
      <Box className='modalproduct2'>
      <Box className='modalproduct'>
      <Img src={item.img} width={'30%'}/>
      
  <Box>
  <Text as='b'>{item.name}</Text>

  </Box>
  <Button cursor="pointer" onClick={()=>handleDelete(item)}>  <CloseIcon/>
</Button>

  </Box>
  <Box className='quantity'>
    <Text as='b'>₹{item.offerPrice}</Text>
    <Box className='subquantity'>
      <Text>QTY.</Text>
      <Text>-</Text>
      <Text>1</Text>
      <Text>+</Text>


    </Box>
  </Box>
  </Box>
    )
  })}
</Box>
  )
}

export default BodyModal