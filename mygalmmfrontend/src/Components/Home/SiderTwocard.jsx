import { Box, Flex, Img, SimpleGrid ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SiderTwocard = ({img,name,description,actualPrice,count,offer}) => {
  return (
    <Flex >
        
        {/* <Link to={`/products/${type}/${e._id}`} textDecoration={'none'} > */}

<Box className="per_product_card">
            <Box className="per_prod_img">
              <Img src={img} alt="" />
            </Box>
            <Box className="center" backgroundColor={''}>
              <Text className="name"  noOfLines={3} backgroundColor={''} >{name}</Text>
             </Box>
             <Box className='center2'> <Text className="description" noOfLines={2}>{description}</Text></Box> 
            <Box className="shade_wrapper">
              <Box>
                <Img
                  src="https://www.myglamm.com/images/plus-icon.png"
                  alt=""
                />
              </Box>
              <Text className="count">{count}</Text>
            </Box>
            <Box className={actualPrice?"price_wrapper" :"center" }>
              <Text>₹ {offer}</Text>
              <Text className="mrp">
              {actualPrice? <s>₹ {actualPrice}</s>:""}
              </Text>
            </Box>
          </Box>

  {/* </Link> */}
</Flex >
    
  )
}

export default SiderTwocard