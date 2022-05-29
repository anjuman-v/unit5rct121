import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, SimpleGrid } from '@chakra-ui/react'

export default function Dashboard() {
  return (
        <div >
        
            


                <Box boxShadow='lg'  w='100%'  p={4} color='white'>
                    <img style={{width:"40px", height:"40px"}} src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75" alt="logo" />
                </Box>
             

    <div style={{margin:"auto",textAlign:"center",fontSize:"40px",fontWeight:"900", marginBottom:"20px"}}>
        <h1>
        Find The Right
    <br />
    <span style={{color:"blue"}}>Four-Day </span>
    <span> </span>
    Week Job
        </h1>

        <Input style={{width:"500px"}} placeholder='Type Job Title Or keyword' />
        <br />
        <ButtonGroup variant='outline' spacing='6'>
    <Button colorScheme='blue' bg='blue' border='none' h='25' color='white'>🌐 Remote</Button>
    <Button colorScheme='blue' bg='blue' border='none' h='25' color='white'>👨‍💻 Tech</Button>
    <Button colorScheme='blue' bg='blue' border='none' h='25' color='white'>⬈ Marketing</Button>
    </ButtonGroup>

    </div>




    <div>

    <div style={{margin:"auto",paddingLeft:"0%",fontWeight:"900",width:"800px", marginBottom:"20px", border:'1px solid' }}>
            <h1 style={{fontSize:"50px"}}>  Recent Jobs </h1>

            <SimpleGrid columns={1} spacing={10}>
    
            <Box border='1px solid blue' boxShadow='dark-lg'  variant='outline' height='80px'>Full-Stack JavaScript Developer (Node.js / React.js / Express.js)</Box>
    
            </SimpleGrid>
            </div>


    </div>
        </div>
  )
}