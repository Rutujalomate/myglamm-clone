import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure ,
    Button
  } from '@chakra-ui/react'
import BodyModal from './BodyModal'
import Headermodal from './Headermodal'
import { useNavigate } from "react-router-dom";



const Textmodal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();

   const goPayment=()=>{
    navigate("/payment");

    }
  return (
    <div className='modaltext'>
      <Button onClick={onOpen} bgColor={"black"}
          color={"white"}>ADD TO CART</Button>

<Modal isOpen={isOpen} onClose={onClose}  >
  <ModalOverlay />
  <ModalContent bgColor={""} marginRight={'-940px'}  marginTop={'0px'}  maxW={'400px'} height={'auto'}>
    <ModalHeader><Headermodal/></ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <BodyModal/>
    </ModalBody>

    <ModalFooter>
    <Button colorScheme='blue' mr={3} onClick={goPayment}>
        Checkout
      </Button>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>


    </div>
  )
}

export default Textmodal