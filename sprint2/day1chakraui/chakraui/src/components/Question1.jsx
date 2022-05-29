import React from 'react'
// import './chkraui.css'
import { Flex,Center, Text, Square, Box,  } from '@chakra-ui/react'




export const Question1 = () =>{
  return(
    <Flex color='white' border='50px solid white' marginTop='100'marginLeft='150'>
  <Center w='350px'h='400' bg='blue'>
    <Text fontSize='44px'>NAV</Text>
  </Center>
  <Square bg='orange' w='550px' h='400' size='150px'>
    <Text fontSize='44px'>CONTENT</Text>
  </Square>
  <Center w='350px'h='400' bg='red'>
    <Text fontSize='44px'>WIDGET</Text>
  </Center>
</Flex>
  
  )
}



