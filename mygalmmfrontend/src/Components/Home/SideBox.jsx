import { Box, Img } from '@chakra-ui/react'
import React from 'react'

const SideBox = ({img}) => {
  return (
    <Box className='sidebox'>
        <Img  marginTop={'60px'} src={img} width={{ base: '100%', sm: '100%', md: '100%',lg:'100%' }} 
/>
    </Box>
  )
}

export default SideBox