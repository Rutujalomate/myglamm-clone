
import { Box, Flex, Heading, useToast } from "@chakra-ui/react";





import {  Button, Spacer,Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { detelecart, getcart } from "../Redux/CartReducer/action";
import { DELETE_CARTDATA_SUCCESS } from "../Redux/CartReducer/actionTypes";
//import "./Cart.css"



const Cart = () => {
    const bag=useSelector((store)=>store.bag.bag)
    const [remove,setRemove]=useState(false)

    const [cartData,setCartData]=useState(bag)

    const dispatch=useDispatch()


 //console.log('baged',isAuth)
const navigate=useNavigate()
const orderTotal=cartData.reduce(function(acc,el){
    return acc+(el.offerPrice)
  },0)
const [total,setTotal]=useState(orderTotal)

console.log(total);

useEffect(()=>{
  dispatch(getcart())

},[dispatch])





 


//   const handleRemove=(e,i)=>{
//     cartData.splice(i,1)
//     setCartData(cartData)
//     console.log(cartData)
//     const sum=cartData.reduce(function(acc,el){
//       return acc+Number(el.offer_price)
//     },0)
//     setTotal(sum)
//   }


  // useEffect(()=>{
  //   handleRemove()
  // },[])

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
}
    if(bag.length===0)
    {
      return(
        <Box padding={"100px"} >
        <Heading>Opps Your bag is empty!</Heading>
        <Box padding={"30px"} display={"flex"} justifyContent="center"  
        width={"20%"} margin="auto">
            <Img height={"300px"} width="300px" src="https://files.myglamm.com/site-images/original/img-empty-shopping-cart.png" /></Box>
        </Box>
      )
    }





  return <div id="cartPage">
   <Text fontSize='3xl' as='b'>Your Cart</Text>

   <div id="mainCartDiv">
    <div id="CartProductDiv">
      <Text fontSize='2xl' as='b'>Shipment from KixRx</Text>
      <hr />
      <div id="upperDiv">
        <Text>Congratulations! Your order qualifies for free shipping from KixRx. </Text>
        <button>Learn More</button>
      </div>

     {
      cartData?.map((e,i)=>(
        <div id="productDiv" key={e.id}>
        <div id="leftDiv">
          <img src={e.img} alt="Product_Image" />
        </div>
        <div id="rightDiv">
          <Text fontSize='l' as='b'>{e.name}</Text>
          <Text fontSize='xs' >{e.category}</Text>
          <Text fontSize='l' >₹ {e.offerPrice}</Text>
        </div>
        <Spacer />

        <Button colorScheme='teal' size='md' onClick={()=>handleDelete(e)} >Remove</Button>
      </div>
      ))
     }


      <hr />
      <Flex>
        <Box p='4'>
          Store Total:-
        </Box>
        <Spacer />
        <Box p='4'>
        ₹ {total}
        </Box>
      </Flex>
    </div>

    {/* cart total div on left side */}
    <div id="CartTotalDiv">
      <Text fontSize='2xl' as='b'>Order Total</Text>
      <hr />
      <Flex>
        <Box p='4'>
          Subtotal:-
        </Box>
        <Spacer />
        <Box p='4'>
        ₹ {total}
        </Box>
      </Flex>

     

      <Flex>
        <Box p='4'>
          Delivery Charges:-
        </Box>
        <Spacer />
        <Box p='4'>
        ₹ 40
        </Box>
      </Flex>

      <Flex>
        <Box p='4'>
          Services Tax:-
        </Box>
        <Spacer />
        <Box p='4'>
        Free
        </Box>
      </Flex>
        <div id="checkOutDiv">
          <Button colorScheme="facebook" >
            <Link to="/payment">
            Proceed to Checkout
            </Link>
            </Button>
        </div>
    </div>
   </div>
    </div>;
};

export default Cart;
