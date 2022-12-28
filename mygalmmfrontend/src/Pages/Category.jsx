import { Box, Flex,Image ,SimpleGrid,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { shopbycategory } from '../Components/Home/Home'

const Category = () => {
  return (
    <SimpleGrid columns={[3, 2,8, 8]} gap={15} justifyContent={'center'} marginTop={'30px'}>
{shopbycategory.map((item)=>{
    return(
        <Link to={`/products/${item.data}`}>

        <Box>
    <Image
    borderRadius='full'
    boxSize='120px'
    src={item.image}
    alt='Dan Abramov'
  />
<Text as='b'>{item.name}</Text>
  </Box>
</Link>
  )
})}
</SimpleGrid>
  )
}

export default Category