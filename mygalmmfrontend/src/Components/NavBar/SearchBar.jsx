import React, { useEffect, useState } from 'react'
import { 
Input,
Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getFeedsAPI, getFeedsAPI2 } from '../../Redux/AppReducer/action'
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS } from '../../Redux/AppReducer/actionTypes'
import { useNavigate } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'
//import {useDispatch} from "react-redux";
//import { getdata } from '../reducer/AppReducer/action';
//import { GET_DATA_FAILURE, GET_DATA_SUCCESS } from '../reducer/AppReducer/type';



export const SearchBar = () => {
  const [search,setSearch]=useState("")
  //const data=useSelector((store)=>store.product.data)
  const dispatch=useDispatch()
  const data=useSelector((store)=>store.product.data)
  //console.log('be',data);
  const navigate=useNavigate();
  //const dispatch=useDispatch()

console.log('data',data);
const onValueChange = (e) => {
  if(e.target.value!==Number)
  {
    setSearch(e.target.value);
  }
}
  console.log('ser',search);
const handleSearch =(e)=>{
  if(e.keyCode===13){
  var lower="abcdefghijklmnopqrstuvwxyz";
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let tag="";
  for(let i=0;i<search.length; i++)
  {
    for(let j=0; j<lower.length; j++)
    {
      if(search[i]===lower[j] || search[i]===upper[j])
      {
        tag=tag+lower[j];
      }
    }
  }
console.log('bag',tag);
for(var i=0;i<data.length;i++){
  if(data[i].cetegory.includes(tag)){
    console.log('hello');
  }
  else{
    console.log('bye bye');
  }
}


  dispatch(getFeedsAPI(tag)).then(res=>{
    if(res.type===GET_PRODUCTS_SUCCESS)
    {
      console.log(res.payload);
      navigate(`/products/${search}`);
    }else if(res.type===GET_PRODUCTS_ERROR)
    {
      navigate("*");
    }
  })
  
}
 }

useEffect(()=>{
  dispatch(getFeedsAPI2())
  
},[dispatch])



  return (
    <Box className='media' display="flex" border={"1px solid #e8e8e9"} borderRadius="5px" >
   <Box width={"60px"} bgColor="#f5f5f6">
   <SearchIcon 
      //backgroundColor='rgb(245,245,246)' 
      // border='1px' 
       borderColor='gray.200' 
      p='1px' 
      height={{ base: '30px',
      md: '41px',
      lg: '40px',
      xl: '35px',
      '2xl': '400px'
      }}      
      width={{ base: '20px',
      md: '21px',
      lg: '30px',
      xl: '25px',
      '2xl': '40px'
      }}       // margin={"15px"}
      borderRadius='6px 0px 0px 6px' 
      borderRight='none' 
      color={"#c3c5cc"}
    /> 
    </Box>    
    <Input 
    // cursor={"pointer"}
    
    //value={'search'}
      onChange={onValueChange}
      variant='unstyled' 
      backgroundColor='rgb(245,245,246)'
      onKeyUp={(e)=>handleSearch(e)}
      borderRadius='0px 6px 6px 0px'
      fontFamily={"Roboto"}
      fontWeight={"400"} 
      color='#333333'
      width={{ base: '120px',
      md: '410px',
      lg: '400px',
      xl: '350px',
      '2xl': '400px'
      }} 
      height={{ base: '30px',
      md: '41px',
      lg: '45px',
      xl: '35px',
      '2xl': '400px'
      }} 

      outline={'none'}
      fontSize={{ base: '10px',
      md: '18px',
      lg: '20px',
      xl: '15px',
      '2xl': '14px'
      }}       border={'none'}
      placeholder='Find Lipstick, Eyeliner, Makeup Tutorial, etc'
    />
    </Box>
  )
}
