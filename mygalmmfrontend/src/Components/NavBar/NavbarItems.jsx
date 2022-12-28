import React from 'react'
//import '../App.css';
import { 
    Flex,
    Box,
    Spacer,
    Heading,
    Text,
    VStack,
    IconButton,
    useDisclosure,
    Stack,
    useColorModeValue,
    HStack,

} from '@chakra-ui/react'
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
//import HairCareCards from './HairCareCards';
//import SanitizerCareCards from './SanitizerCareCards';
//import CollectionCards from './CollectionCards';
import { Link as RouteLink, NavLink} from 'react-router-dom';






export const NavbarItems = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
const Links=['HOME','MAKEUP','HAIECARE','SKINCARE','SANITIZINGCARE','COLLECTION','REWARD','MYGLAMM STUDIO','OFFERS']
 
const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );
return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
    <Flex  margin='auto' width={{base:'100%',sm:'100%',md:'100%',lg:'100%'}} overflow='hidden'>
        <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
             display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* <Box marginLeft={'20px'} margin={'auto'}>Home</Box> */}

          <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', lg: 'flex' }}>
                          {/* <Box marginLeft={'20px'} margin={'auto'}>Home</Box> */}

        <Box  className="dropdown">
<Box className="dropbtn"><Text fontSize={'15px'}><Link to='/'>HOME</Link></Text></Box>
            {/* <Box className="dropdown-content" > </Box> */}
        </Box>
        <Spacer/>  

        {/* 2      */}
        <Box className="dropdown">
    <Box  className="dropbtn"><Text fontSize={'15px'}><Link to='/products/makeup'>MAKEUP</Link></Text></Box>
            <Box className="dropdown-content" marginLeft='-60px' > 

                <Box width='1200px' >

                    <Box  width='800px'  >    

                        <Flex>
                        <VStack 
                        fontFamily="Roboto" 
                        display='flex' flexDirection='column' 
                        justifyContent='start' 
                        alignItems='flex-start' 
                        ml='20px' 
                        lineHeight='19px' 
                        gap='0px'

                        >
                        <Heading fontSize='14px' color='rgb(255,183,161)' >LIPS</Heading>
                            <Text>Lips</Text>
                            <Text>Liquid Lipstick</Text>
                            <Text>Hi-Shine Lipstick</Text>
                            <Text>Matte Lipstick</Text>
                            <Text>Lip Gloss</Text>
                            <Text>Lip Liner</Text>
                            <Text>Lip balm</Text>
                            <Text>Lip Glitter</Text>
                            <Text>Lip Stain</Text>
                            <Text>Lipstick Set</Text>
                            <Text>Lip Kit</Text>
                            <Text>Find Your Lipstick</Text>  
                        </VStack>
                        <Spacer/>

                        <VStack 
                        fontFamily="Roboto" 
                        display='flex' flexDirection='column' 
                        justifyContent='start' 
                        alignItems='flex-start' 
                        ml='20px' 
                        lineHeight='19px' 
                        gap='0px'
                        >
                        <Heading fontSize='14px' color='rgb(255,183,161)' >FACE</Heading>
                            <Text>Fixing Powder</Text>
                            <Text>Primer</Text>
                            <Text>Concealer</Text>
                            <Text>Foundation</Text>
                            <Text>Compact Powder</Text>
                            <Text>Setting Powder</Text>
                            <Text>Banana Powder</Text>
                            <Text>Sindoor</Text>
                            <Text>Highlighter</Text>
                            <Text>Blush</Text>
                            <Text>Bronzer</Text>  
                            <Text>Cheek Stain</Text>  
                        </VStack>
                        <Spacer/>
                        
                        <VStack 
                        fontFamily="Roboto" 
                         
                        display='flex' flexDirection='column' 
                        justifyContent='start' 
                        alignItems='flex-start' 
                        ml='20px' 
                        lineHeight='19px' 
                        gap='0px'
                        >
                        <Heading fontSize='14px' color='rgb(255,183,161)' >EYES</Heading>
                            <Text>Eye Shadow</Text>
                            <Text>Eyeliner</Text>
                            <Text>Eyebrows</Text>
                            <Text>Glitter</Text>
                            <Text>Mascara</Text>
                            <Text>Kajal</Text>
                            <Text>Eye Combos</Text> 
                        
                        </VStack>
                        <Spacer/>
                        
                        <VStack 
                        fontFamily="Roboto" 
                         
                        display='flex' flexDirection='column' 
                        justifyContent='start' 
                        alignItems='flex-start' 
                        ml='20px' 
                        lineHeight='19px' 
                        gap='0px'
                        >
                        <Heading fontSize='14px' color='rgb(255,183,161)' >NAILS</Heading>
                            <Text>Gel</Text>
                            <Text>Matte Nail Enamel</Text>
                            <Text>Matte Nail Polish</Text>
                            <Text>Matte Lipstick</Text>
                            <Text>Glossy Nail Enamel</Text>

                            <Heading fontSize='14px' color='rgb(255,183,161)' >KITS AND COMBOS</Heading>
                            <Text>Makeup Kits</Text>
                            <Text>Bridal Makeup Kits</Text>
                            <Text>Makeup Gift Sets</Text>

                            <Heading fontSize='14px' color='rgb(255,183,161)' >MAKEUP ACCESSORIES</Heading>
                            <Text>Makeup Brushes</Text>
                            <Text>Eyeshadow Brushes</Text>  
                        </VStack>

                        <Spacer/>
                        </Flex>

                    </Box>  

                </Box>

            </Box>
        </Box>
        <Spacer/>
{/* 3 */}
        <Box className="dropdown">
          <Box className="dropbtn"><Text fontSize={'15px'}> <Link to='/products/shampoo'>HAIRCARE</Link></Text></Box>
            <Box className="dropdown-content" marginLeft='-160px' > 

            <Box width='1200px'  >
                    <Flex >
                    <VStack 
                    fontFamily="Roboto" 
                    display='flex' flexDirection='column' 
                    justifyContent='start' 
                    alignItems='flex-start' 
                    ml='20px' 
                    lineHeight='19px' 
                    gap='0px'
                    width='300px'
                     >
                    <Heading fontSize='14px' color='rgb(255,183,161)' > HAIR CARE </Heading>
                    <Text>Shampoo</Text>
                    <Text>Conditioner</Text>
                    <Text>Hair Oil</Text>
                    <Text>Serum</Text>
                    <Text>Hair Mask</Text>
                    <Text>Combos</Text> 
                    </VStack>
                    <Spacer/>

                    <Flex display='flex' flexDirection='row' justifyContent='space-between'  width='100%' >
                        <Box>HairCareCards</Box>
                        <Box>HairCareCards</Box>
                        <Box>HairCareCards</Box>
                        <Box>HairCareCards</Box> 
                    </Flex>
                    
                    </Flex>
                </Box>

            </Box>
        </Box>
        <Spacer/> 
{/* 4 */}
        <Box className="dropdown">
        <Box  className="dropbtn"><Text fontSize={'15px'}><Link to='/products/skincare'>SKINCARE</Link></Text></Box>
            <Box className="dropdown-content" marginLeft='-298px' > 

            <Box width='1200px'  >
                    <Flex >
                    <VStack 
                    fontFamily="Roboto" 
                     
                    display='flex' flexDirection='column' 
                    justifyContent='start' 
                    alignItems='flex-start' 
                    ml='20px' 
                    lineHeight='19px' 
                    gap='0px'
                    width='300px'
                     >
                    <Text>Moisturizer</Text>
                    <Text>Night Cream</Text>
                    <Text>Eye Cream</Text>
                    <Text>Body Lotion</Text>
                    <Text>Serum</Text>
                    <Text>Sunscreen</Text>
                    <Text>Skincare Kits</Text> 

                    <Heading fontSize='14px' color='rgb(255,183,161)' >CLEANSING PRODUCTS</Heading>
                    <Text>Cleanser</Text>
                    <Text>Face Wash</Text>
                    <Text>Exfoliator & Scrub</Text>
                    
                    <Heading fontSize='14px' color='rgb(255,183,161)' >MASK</Heading>
                    <Text>Sheet Mask</Text>
                    <Text>Face Wash</Text>
                    <Text>Face Pack</Text>
                    </VStack>
                    <Spacer/>

                    <Flex display='flex' flexDirection='row' justifyContent='space-between'  width='100%' >
                
                    </Flex>
                    
                    </Flex>
                </Box>

            </Box>
        </Box>
        <Spacer/>
   {/* 5              */}
        <Box className="dropdown">
            <Box  className="dropbtn"> <Text fontSize={'15px'}> <Link to='/products/eyeliner'>SANITIZING CARE</Link></Text></Box>
            <Box className="dropdown-content" marginLeft='-425px' > 

            <Box width='1200px'  >
                    <Flex >
                    <VStack 
                    fontFamily="Roboto" 
                     
                    display='flex' flexDirection='column' 
                    justifyContent='start' 
                    alignItems='flex-start' 
                    ml='20px' 
                    lineHeight='19px' 
                    gap='0px'
                     width='300px'
                     >
                    <Heading fontSize='14px' color='rgb(255,183,161)' >SANITIZING CARE</Heading>
                        <Text>Sanitizing Wipes</Text>
                        <Text>Hand Sanitizer</Text>
                        <Text>Shower Gel</Text>
                        <Text>Body Moisturizer</Text>
                        <Text>Soaps</Text>
                        <Text>Hand Care</Text>
                        <Text>Foot Care</Text>
                        <Text>Surface Spray</Text>
                        <Text>Sanitizing Kits</Text>
                        <Text>Body Spray & Mist</Text>
                        <Text>Sanitizing Spray</Text>
                        <Text>Fragrance</Text>
                    </VStack>
                    <Spacer/>

                    <Flex display='flex' flexDirection='row' justifyContent='space-between'  width='100%' >
                        <Box>SanitizerCareCards</Box>
                        <Box>SanitizerCareCards</Box>
                        <Box>SanitizerCareCards</Box>
                        <Box>SanitizerCareCards</Box> 
                    </Flex>
                    
                    </Flex>
                </Box>

            </Box>
        </Box> 
        <Spacer/>
{/* 6                */}
        <Box className="dropdown">
           <Box  className="dropbtn"><Text fontSize={'15px'}> <Link to='/products/lipstick'> COLLECTION</Link></Text></Box>
            <Box className="dropdown-content" marginLeft='-600px' > 

            <Box width='1200px'  >
                    <Flex >
                    <VStack 
                    fontFamily="Roboto" 
                     
                    display='flex' flexDirection='column' 
                    justifyContent='start' 
                    alignItems='flex-start' 
                    ml='20px' 
                    lineHeight='19px' 
                    gap='0px'
                     width='300px'
                     >
                    <Heading fontSize='14px' color='rgb(255,183,161)' > <Link to='/products/makeup'> SHOP BY COLLECTION</Link></Heading>
                    <Text>MyGlamm</Text>
                    <Text>SUPERFOODS</Text>
                    <Text>Treat Love Care</Text>
                    <Text>Clean Beauty</Text>
                    <Text>POPxo</Text>
                    <Text>WIPEOUT</Text>
                    <Text>GLOW Iridescent Brightening Skincare</Text>
                    <Text>Manish Malhotra</Text>
                    <Text>YOUTHfull</Text>
                    <Text>LIT Collection</Text>
                    <Text>POSE</Text>
                    <Text>K.Play</Text>
                    <Text>Just Dropped</Text>
                    </VStack>

                   
                    <Spacer/>

                    {/* <Flex display='flex' flexDirection='row' justifyContent='space-between'  width='60%' >
                        <Box><CollectionCards name={"Manish Malhotra 9 in 1 Eyeshado"} image={'https://files.myglamm.com/site-images/400x400/Soiree-(1).jpg'} /></Box>
                        <Box><CollectionCards name={"Glow to Glamour Shimmer .."} image={'https://files.myglamm.com/site-images/400x400/GGM-(1).jpg'} /></Box>
                        <Box><CollectionCards name={"MyGlamm LIT Creamy Matte Lipst.."} image={'https://files.myglamm.com/site-images/400x400/Tom-Collins_6.jpg'} /></Box>
                         
                    </Flex> */}
                    
                    </Flex>
                </Box>

            </Box>
        </Box> 
        <Spacer/>       
{/* 7                */}
        <Box className="dropdown">
            <Box className="dropbtn"><Text fontSize={'15px'}>REWARDS</Text></Box>
            <Box className="dropdown-content" marginLeft='-760px' > 

            <Box width='1200px'  >
                   
            </Box>

            </Box>
        </Box>
        <Spacer/>        
{/* 8                */}
        <Box className="dropdown">
            <Box  className="dropbtn"><Text fontSize={'15px'}>MYGLAMM STUDIO</Text></Box>
            <Box className="dropdown-content" marginLeft='-890px' > 

            <Box width='1200px'  >
                    <Flex>
                    <VStack  display='flex' flexDirection='column' justifyContent='start' alignItems='flex-start' ml='20px' lineHeight='19px' gap='0px' >
                    <Heading fontSize='14px' color='rgb(255,183,161)' >Studio</Heading>
                        <Text>Blogs</Text>
                          
                    </VStack>
                    <Spacer/>                   
                    </Flex>
                </Box>

            </Box>
        </Box>
        <Spacer/>        
{/* 9                */}
        <Box className="dropdown">
            <Box  className="dropbtn"> <Text fontSize={'15px'}>OFFERS</Text></Box>
            <Box className="dropdown-content" marginLeft='-1090px' > 
        </Box>      
 
        </Box>        
        </HStack>
    </Flex>

    {isOpen ? (
          <Box pb={4} >
            <Stack as={'nav'} spacing={4}>
<Text><Link to='/'>HOME</Link></Text>
<Text><Link to='/products/makeup'>MAKEUP</Link></Text>
<Text><Link to='/products/shampoo'>HAIECARE</Link></Text>
<Text><Link to='/products/skincare'>SKINCARE</Link></Text>
<Text><Link to='/products/eyeliner'>SANITIZINGCARE</Link></Text>
<Text><Link to='/products/lipstick'>COLLECTION</Link></Text>
<Text><Link to='/products/shampoo'>REWARD</Link></Text>

            </Stack>
          </Box>
        ) : null}
   </Box> 
  )
}


//const Links=['HOME','MAKEUP','HAIECARE','SKINCARE','SANITIZINGCARE','COLLECTION','REWARD','MYGLAMM STUDIO','OFFERS']
