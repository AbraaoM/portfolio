import { Container, 
  Box, 
  Flex, 
  Wrap,
  WrapItem,
  Center,
  Grid,
  GridItem,
  Text 
} from "@chakra-ui/react"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import { FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaDev, 
  FaJs, 
  FaHtml5, 
  FaCss3, 
  FaReact, 
  FaNode 
} from "react-icons/fa"

import styles from '../../styles/Hero.module.css'

export function Hero (){
  return(
  
    <Container
      maxW="full"
      bg="#282a36"
    >

      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#7a6ded" offset="0%" />
          <stop stopColor="#591885" offset="100%" />
        </linearGradient>
      </svg>

      <Grid
        h={{
          base: "full",
          lg: "90vh"
        }}
        templateRows={{
          base: "repeat(100, 1fr)",
          lg: "repeat(10, 1fr)"
        }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(5, 1fr)"
        }}
        gap={2}
      >
        <GridItem
          id="navbar"
          rowSpan={{
            base: 10,
            lg: 1
          }}
          colSpan={{
            base: 1,
            lg: 5
          }} 
        >
          <Flex  
            className={styles.logo}
            fontSize="3.5rem"
            color="white"
            alignContent="center"
            paddingLeft="2rem"
            >
            AM.
          </Flex>

        </GridItem>
        <GridItem
          id="wellcome"
          rowSpan={{
            base: 35,
            lg: 7
          }} 
          colSpan={{
            base: 1,
            lg: 3
          }} 
        >
          <Center 
              className={styles.hero}
              h="full"
              w="full"
          >
            <Text
              bgGradient="linear(to-r, #50fa7b,#6272a4)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              Resolvendo problemas com código! 
            </Text>
          </Center>

        </GridItem>
        <GridItem
          id="socials"
          rowSpan={{
            base: 35,
            lg: 7
          }} 
          colSpan={{
            base: 1,
            lg: 2
          }} 
        >
          <Center
            h="full"
            w="full"
          >
            <Wrap
              spacing="2rem"
              color="white"
            >
              <WrapItem>
                <a href="https://twitter.com/abraaomoreira_">
                  <FaTwitter size="100"/>
                </a>
              </WrapItem>
              <WrapItem>
                <a href="https://github.com/abraaom">
                  <FaGithub size="100"/>
                </a>
              </WrapItem>
              <WrapItem>
                <a href="https://dev.to/abraaom">
                  <FaDev size="100"/>
                </a>
              </WrapItem>
              <WrapItem>
                <a href="https://www.linkedin.com/in/abraao-moreira/">
                  <FaLinkedin size="100"/>
                </a>
              </WrapItem>
            </Wrap>
          </Center>
        </GridItem>

        <GridItem
          id="skills"
          rowSpan={{
            base: 20,
            lg: 2
          }} 
          colSpan={{
            base: 1,
            lg: 5
          }} 
        >
          <Center
            h="full"
            w="full"
            alignContent="center"
            justifyContent="space-between"
            color="white"
            paddingLeft={{
              base:0,
              md: '10%',
              lg:"20%"
            }}
            paddingRight={{
              base:0,
              md: '10%',
              lg: "20%"
            }}
          >
            <FaHtml5 size="60"/>
            <FaCss3 size="60"/>
            <FaJs size="60"/>
            <FaReact size="60"/>
            <FaNode size="60"/>
          </Center>

        </GridItem>
      </Grid>
        
    </Container>
  )
}


      {/* <Box>
        
      </Box>
      <Flex  
        className={styles.logo}
        w="100%" 
        h="10vh"
        fontSize="3.5rem"
        color="white"
        display="flex"
        alignItems="center"
        paddingLeft="2rem"
        >
        AM.
      </Flex>

      <Flex>
        <Flex>
          <Box 
            className={styles.hero}
            w="60%" 
            h="70vh"
            color="#50fa7b"
            fontSize="3.5rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingLeft= "5%"
            paddingRight="5%"
            >
            Resolvendo problemas com código! 

          </Box>
          <Box  
            w="40%" 
            h="70vh"
            color="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingLeft= "5%"
            paddingRight="5%"
            >
              <Flex>
                <Box padding="2rem">
                  <Box padding="2rem">
                    <a href="https://twitter.com/abraaomoreira_">
                      <FaTwitter size="100"/>
                    </a>
                  </Box>
                  <Box padding="2rem">
                    <a href="https://github.com/abraaom">
                      <FaGithub size="100"/>
                    </a>
                  </Box>
                </Box>
                <Box padding="2rem">
                  <Box padding="2rem">
                    <a href="https://dev.to/abraaom">
                      <FaDev size="100"/>
                    </a>
                  </Box>
                  <Box padding="2rem">
                    <a href="https://www.linkedin.com/in/abraao-moreira/">
                      <FaLinkedin size="100"/>
                    </a>
                  </Box>
                </Box>
              </Flex>
          </Box>

        </Flex>
        <Box
          h="15vh"
          maxW="container.md"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="3rem"
        >
          <FaHtml5 size="50"/>
          <FaCss3 size="50"/>
          <FaJs size="50"/>
          <FaReact size="50"/>
          <FaNode size="50"/>
        </Box>
      </Flex> */}