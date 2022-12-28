import { AspectRatio, Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BestSellers from '../Components/Home/BestSellers'
import { SpotLightData } from '../Components/Home/Home'
import SideBox from '../Components/Home/SideBox'
import Slideshow from '../Components/Home/Slideshow'
import SpotLight from '../Components/Home/SpotLight'
import { getFeedsAPI, getFeedsAPI2 } from '../Redux/AppReducer/action'
import { getcart } from '../Redux/CartReducer/action'
import Category from './Category'
import Combo from './Combo'
import TwoImage from './TwoImage'

const HomePage = () => {
  const dispatch=useDispatch()
  const data=useSelector((store)=>store.product.data)
  //console.log('be',data);

  function getMultipleRandom(data, num) {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }
  
//  const arr = ['b', 'c', 'a', 'd'];
  console.log(getMultipleRandom(data, 16))


  
  useEffect(()=>{
    dispatch(getFeedsAPI2())
    
  },[dispatch])

  return (
    <Box>
        <Slideshow/>
        <SideBox img='https://files.myglamm.com/site-images/original/ul2240x614.png'/>
        <SpotLight/>
         <Category/> 
        <SideBox img='https://files.myglamm.com/site-images/original/GIFT-CARD-2240x614.png'/>
<Combo/>
<SideBox img='https://files.myglamm.com/site-images/original/Sleek-banner-Web.jpg'/>
<TwoImage/>
<SpotLight data={data}/>
<Box marginBottom={"100px"} className="media" width={{ base: '100%', sm: '100%', md: '100%',lg:'100%' }}>
        <AspectRatio maxW="100%" height="750px" width={{ base: '100%', sm: '100%', md: '100%',lg:'100%' }} ratio={1}>
          <iframe
            src="https://www.youtube.com/embed/GdcxfyKNiDg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=GdcxfyKNiDg"
            
            width="560"
            height="315"
            title="Shraddha Kapoor Wants You To #TellMyGlammWhatYouWant | MyGlamm TV Ad"
            frameborder="0"
          ></iframe>
        </AspectRatio>
      </Box>
    </Box>
  )
}

export default HomePage