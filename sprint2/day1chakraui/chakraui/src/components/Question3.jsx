import React from 'react'
import { Box,  Flex, Spacer, HStack} from '@chakra-ui/react'


export const Question3 = () =>{
  return(
   
    <Box w='40%' border='30px solid white' margin='5%' marginStart='450' >
 
  <HStack   spacing='24px' >
    <Box w='45%' h='140' bg='orange' />
   
    <Box w='45%' h='140' bg='orange ' />
   
  </HStack>

  
  
    <Box w='94%' h='140' bg='deeppink' marginTop='2%' marginBottom='2%'/>
    <Spacer/>


 
  <HStack spacing='24px' >
    <Box w='29%'h='140' bg='slateblue' />
    <Box w='29%' h='140' bg='slateblue' />
    <Box w='29%' h='140' bg='slateblue' />
  </HStack>
</Box>

  )
}