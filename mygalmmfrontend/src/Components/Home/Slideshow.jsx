import { Box } from '@chakra-ui/react';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
//import "./Slideshow.css"

const slideImages = [
    'https://files.myglamm.com/site-images/original/kv1920x527.gif',
    'https://files.myglamm.com/site-images/original/Homepage-1920-x-527---CTA.jpeg',
    'https://files.myglamm.com/site-images/original/Homepage-1920x527_3.jpg',
    'https://files.myglamm.com/site-images/original/lip1920x527.jpg'
  ];

const Slideshow = () => {
    return (
      <Box>
        <Slide easing="ease">
          <Box className="each-slide">
            <Box style={{'backgroundImage': `url(${slideImages[0]})`}}>

            </Box>
          </Box>
          <Box className="each-slide">
            <Box style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </Box>
          </Box>
          <Box className="each-slide">
            <Box style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </Box>
          </Box>
          <Box className="each-slide">
            <Box style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </Box>
          </Box>

            
          
          
        </Slide>
      </Box>
    )
};

export default Slideshow;