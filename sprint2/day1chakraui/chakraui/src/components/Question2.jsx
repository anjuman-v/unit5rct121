import './chkraui.css'
import React from 'react'

import { Box, Text, Flex, Spacer, Grid, HStack} from '@chakra-ui/react'

export const Question2 = () =>{
  return(
    
    <Box border='50px solid white' width='60%' h='530px' marginTop='5%' marginLeft='25%'>
  
  <Flex>
    <Box w='500px' h='380' bg='purple' />
    <Box w='270px' h='270' bg='red' marginLeft='1%' />  
  </Flex>

  <Flex>
    <Box w='500px' h='140' bg='blue'marginTop='1%' />
    <Box w='270px' h='270' bg='red' marginLeft='1%' marginTop='-12%' />  
  </Flex>

  
  
</Box>


  )
}