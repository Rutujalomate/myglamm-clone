import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Carousel from './Carousel'
import SiderTwocard from './SiderTwocard'

const BestSellers = ({data}) => {
  // const data=useSelector((store)=>store.product.data)
//console.log('b',data);

    function getMultipleRandom(data, num) {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
      
        return shuffled.slice(0, num);
      }
      
    //  const arr = ['b', 'c', 'a', 'd'];
      console.log(getMultipleRandom(data, 16)); // 👉️ ['d', 'a'];
      //console.log(getMultipleRandom(data, 3)); 


  return (
    <div >
    <Carousel
      show={5}
      infiniteLoop
    >
<Flex>
      {data.map((item, index) => (
        <SiderTwocard
          className="image"
          img={item.img}
          name={item.name}
          description={item.description}
          count={item.count}
          offer={item["offerPrice"]}
          actualPrice={item.actualPrice}
          key={index}
        />
      ))}
</Flex>
    </Carousel>
  </div>
  )
}

export default BestSellers