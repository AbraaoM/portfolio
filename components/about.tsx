import { Container, 
  Box, 
  Flex, 
  Wrap,
  WrapItem,
  Center,
  Grid,
  GridItem,
  Text,
  IconButton 
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
      h="500px"
      bg="tomato"
    >

    </Container>
  )
}