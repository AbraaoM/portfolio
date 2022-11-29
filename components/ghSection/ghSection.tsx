import { 
  useState, 
  useEffect } from "react"

import { 
  Container, 
  Stack,
  Center,
  Text
} from "@chakra-ui/react"
import axios from 'axios'

import { GhCard } from "./ghCard"

type cardInputs = {
  name: string;
  description: string;
  html_url:string;
}

export function GhSection(){
  const [ghProject1, setghProject] = useState<cardInputs>({
    name: 'Título',
    description: 'Descrição',
    html_url: '404'
  })

  const [ghProject2, setghProject2] = useState<cardInputs>({
    name: 'Título',
    description: 'Descrição',
    html_url: '404'
  })

  const [ghProject3, setghProject3] = useState<cardInputs>({
    name: 'Título',
    description: 'Descrição',
    html_url: '404'
  })
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/abraaom/portfolio')  
      .then(resp => {
        setghProject(resp.data)
      })
      .catch(error => {
        setError(error.message)
      })
  }, [])

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/abraaom/be-the-hero')  
      .then(resp => {
        setghProject2(resp.data)
      })
      .catch(error => {
        setError(error.message)
      })
  }, [])
  useEffect(() => {
    axios
      .get('https://api.github.com/repos/HommaTech/MQL5Simplify')  
      .then(resp => {
        setghProject3(resp.data)
      })
      .catch(error => {
        setError(error.message)
      })
  }, [])
  return(
    <Container
      maxW="full"
      bg="#44475a" 
      paddingTop="2%"
      paddingBottom="5%"
    >
      <Center >
        <Text
          bgGradient="linear(to-l, #ff79c6,#bd93f9)"
          bgClip="text"
          fontSize={{
            base:"2em",
            md:"3em"
          }}
          fontWeight="extrabold"
          lineHeight="2em"
        >
          Projetos Github
        </Text>
      </Center>
      <Center>
        <Stack
          spacing={10}
          w="container.lg"
        >
          <GhCard
            title={ ghProject1.name.toUpperCase()}
            description={ghProject1.description}
            url={ghProject1.html_url}
          />
          <GhCard
            title={ ghProject2.name.toUpperCase()}
            description={ghProject2.description}
            url={ghProject2.html_url}
          />
          <GhCard
            title={ ghProject3.name.toUpperCase()}
            description={ghProject3.description}
            url={ghProject3.html_url}
          />
        </Stack>
      </Center>
      
    </Container>
  )
}


