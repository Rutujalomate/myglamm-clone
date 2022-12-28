import { Box, Flex,Text,Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { combo } from '../Components/Home/Home'

const Combo = () => {
  return (
    <SimpleGrid columns={[1, 2,2, 3]} gap={15} justifyContent={'center'} marginTop={'30px'}>
    {combo.map((item)=>{
            return(
                <Link to={`/products/${item.data}`}>

        <Box backgroundColor={''} padding={'15px'} border={''} height={'400px'} boxShadow= {'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>        <Image
        src={item.image}
        />
        <Text as='b' marginTop={'120px'} >{item.name}</Text>
<br/>
        <Text as='i'>{item.name}</Text>

    </Box>
    </Link>
    )
        })}

       
    </SimpleGrid>
  )
}

export default Combo