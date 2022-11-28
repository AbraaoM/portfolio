import { 
  Container, 
  Flex, 
  Center,
  Grid,
  GridItem,
  Text,
  Image 
} from "@chakra-ui/react"

import {
  FaNode
} from "react-icons/fa"

import {
  SiTypescript,
  SiDotnet,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAngular,
  SiReact,

} from "react-icons/si"

import styles from '../styles/Hero.module.css'

export function Hero (){
  return(
  
    <Container
      maxW="100vw"
      bg="#282a36"  
    >
      <Grid
        h={{
          base: "full",
          lg: "80vh"
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
            fontSize={{
              base: "3em",
              md:"4em"
            }}
            color="white"
            alignContent="center"
            paddingLeft="0.2em"
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
              fontSize={{
                base:"2em",
                md:"3em"
              }}
              fontWeight="extrabold"
            >
              Resolvendo problemas com código! <br/><br/>
              Entre em contato!

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
            <Image
              boxSize={{
                base:"300px",
                md:"400px",
                lg:"600px"
              }}
              src="https://raw.githubusercontent.com/AbraaoM/portfolio/2471208a96b058d6cecd9268ab44d6865af1ec3f/images/hero_image.svg"
            >
              
            </Image>
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
            fontSize={{
              base:"2.5em",
              md:"3.5em"
            }}
          >
            <SiHtml5 />
            <SiCss3 />
            <SiTypescript />
            <SiJavascript />
            <SiAngular />
            <SiReact />
            <FaNode />
            <SiDotnet />
          </Center>

        </GridItem>
      </Grid>

    </Container>
  )
}