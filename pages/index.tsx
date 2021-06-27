import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Box, Flex } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from "react-icons/fa"

export default function Home() {
  return (
    <Container 
      maxW="full" 
      bg="black">
      <Head>
        <title>Abraão Moreira</title>
        <meta name="description" content="Portfólio Abraão Moreira" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
        Abraão Moreira
      </Flex>
      {/* <nav className={styles.nav}>
        Abraão Moreira
      </nav> */}
      <main>
        <Flex>
          <Box 
            className={styles.hero}
            w="60%" 
            h="90vh"
            color="#50fa7b"
            fontSize="3.5rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingLeft= "5%"
            paddingRight="5%"
            >
            Olá, sou programador com foco em javascript! 
          </Box>
          <Box  
            w="40%" 
            h="90vh"
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
        
      </main>
    </Container>
  )
}
