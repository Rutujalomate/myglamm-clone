import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Select,
    Input,
    ModalFooter,
    Flex,
    Image,
    Text,
    Box,
    Divider,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { AiOutlineUser} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
  
import GetOtp from "./GetOtp";
//   import OtpChakra from "./OtpChakra";
  function SignUp() {
    const { isOpen, onOpen,onClose } = useDisclosure({ defaultIsOpen: true });
  const [mobile,setMobile]=useState();
  const navigate = useNavigate();

  //  const onClose=()=>{
  // //   console.log("lko")
  // // useDisclosure()
  //    navigate("/");

  //  }
  
  
  
    return (
      <>
         <AiOutlineUser onClick={onOpen} style={{color: 'black', fontSize: '25px'}}/> 
        <Modal
        width="500px"
        border="1px solid red"
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <Box marginTop="20px">
              <Text width={"80%"} textAlign="center" margin="auto">
                Get 15% Good Points back on every order
              </Text>
            </Box>
            <Image
              margin={" 20px 100px 20px 100px"}
              width={{base:'40%'}}
              // display={{base:'none'}}
              src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"
            ></Image>
            <Text
              marginLeft="80px"
              paddingBottom="value"
              borderBottomStyle="solid"
              fontWeight="bold"
              fontSize="14px"
            >
              *Mobile Number
            </Text>
            <Divider borderColor={"black"}></Divider>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Select width={"150px"}>
                  <option value="91">IND +91</option>
                  <option value="971">UAR +971</option>
                  <option value="44">UK +44</option>
                  <option value="1">US +1</option>
                </Select>
                <Input type="text" value={mobile}  onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile Number" />
              </Flex>
            </ModalBody>
            <ModalFooter display={"flex"} alignItems={"center"}>
              {mobile?.length==10 && <GetOtp cursor="pointer" onClickClose={onClose} />}
               {/* <Button margin={"30px 0 0 0"}  width={"1000%"} color="white" bgColor="black" >
                Continue
              </Button>  */}
            </ModalFooter>
            <Flex><Text fontSize={"12px"} margin={"0px 0px 20px 60px"} >By Signing up you agree to our <span  style={{fontWeight:"bold", cursor:"pointer"}} >Term {"&"} Conditions</span></Text></Flex>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default SignUp;
  