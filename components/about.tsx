import { Container, 
  Box, 
  Flex, 
  Wrap,
  WrapItem,
  Center,
  Grid,
  GridItem,
  Text,
  IconButton ,
  Image
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

import styles from '../styles/About.module.css'

export function About(){
  return(
    <Container
      className={styles.about_container}
      maxW="full"
      bg="#44475a"
    >
      <Flex
        justifyContent="center"
      >
        <Image
        borderRadius="full"
        boxSize={{
          base:"150px",
          md:"275px",
          lg:"400px"
        }}
        src="https://avatars.githubusercontent.com/u/49653939?v=4"
        alt="Abraão Moreira"
        marginBottom="3%"
        marginTop="7%"
      />
      
      </Flex>
      <Flex
        marginLeft={{
          base:"full",
          md:"15%",
          lg:"20%"
        }}
        marginRight={{
          base:"full",
          md:"15%",
          lg:"20%"
        }}
        paddingBottom="3%"
      >
        <Text
          className={styles.texto}
          fontSize={{
            base:"1em",
            md:"1.5em"
          }}
          color="white"
          fontWeight="light"
        >
          Olá, sou <span>Abraão Moreira</span>, sou desenvolvedor de 
          software, minhas especialidades são desenvolvimento de
          ferramentas para <span>análise gráfica</span> de mercados 
          financeiros em <span>mql4</span> e <span>mql5</span> e sistemas web 
          com <span>React</span> e <span>Express</span>.<br/>
          Sou <span>Técnico em informática</span> pela ETEC João Gomes de
          Araújo e atualmente sou estudante de <span>Ciência e 
          Tecnologia</span> na <span>UNIFESP</span>.
        </Text>
        
      </Flex>
      <Center
        paddingBottom="10%"
        justifyContent="space-between"
        color="white"
        fontSize={{
          base:"2.5em",
          md:"4em"
        }}
        marginLeft={{
          base:"full",
          md:"15%",
          lg:"20%"
        }}
        marginRight={{
          base:"full",
          md:"15%",
          lg:"20%"
        }}
      >     
        <a href="https://twitter.com/abraaomoreira_">
          <FaTwitter />
        </a>
          
        <a href="https://github.com/abraaom">
          <FaGithub />
        </a>
          
        <a href="https://dev.to/abraaom">
          <FaDev />
        </a>
          
        <a href="https://www.linkedin.com/in/abraao-moreira/">
          <FaLinkedin />
        </a>
      </Center>
      
    </Container>
  )
}