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

import { DevCard } from "./devCard"

type cardInputs = [{
  title: string;
  description: string;
  url:string;
},
{
  title: string;
  description: string;
  url:string;
},
{
  title: string;
  description: string;
  url:string;
}]

export function DevSection(){
  const [devArticle, setDevArticle] = useState<cardInputs>([{
    title: 'Título',
    description: 'Descrição',
    url: '404'
  },
  {
    title: 'Título',
    description: 'Descrição',
    url: '404'
  },
  {
    title: 'Título',
    description: 'Descrição',
    url: '404'
  }])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('https://dev.to/api/articles?username=abraaom')  
      .then(resp => {
        setDevArticle(resp.data)
      })
      .catch(error => {
        setError(error.message)
      })
  }, [])

  return(
    <Container
      maxW="full"
      bg="#282a36" 
      paddingTop="2%"
      paddingBottom="5%"
    >
      <Center>
        <Text
          bgGradient="linear(to-r, #50fa7b,#6272a4)"
          bgClip="text"
          fontSize={{
            base:"2em",
            md:"3em"
          }}
          fontWeight="extrabold"
          lineHeight="2em"
        >
          Artigos publicados
        </Text>
      </Center>
      <Center>
        <Stack
          spacing={10}
          w="container.lg"
        >
          <DevCard
            title={ devArticle[0].title}
            description={devArticle[0].description}
            url={devArticle[0].url}
          />

          <DevCard
            title={devArticle[1].title}
            description={devArticle[1].description}
            url={devArticle[1].url}
          />

          <DevCard
            title={devArticle[2].title}
            description={devArticle[2].description}
            url={devArticle[2].url}
          />
        </Stack>
      </Center>
      
    </Container>
  )
}


