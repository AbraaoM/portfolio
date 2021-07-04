import { 
  useState, 
  useEffect } from "react"

import { 
  Container, 
  Stack
} from "@chakra-ui/react"
import axios from 'axios'

import { DevCard } from "./devCard"

import { GetServerSideProps } from 'next'

export function DevSection(){
  const [devArticle, setDevArticle] = useState({})
  const [error, setError] = useState('')


  // const options = {
  //   method: 'GET',
  //   headers: { 'api-key': 'qBPthS9y5r61Pb76qBko33Dm' },
  //   url: 'https://dev.to/api/articles/me/published?per_page=3',
  //   timeout: 5000
  //   // .get('https://dev.to/api/articles?username=abraaom')
  // }

  useEffect(() => {
    axios
      .get('https://dev.to/api/articles?username=abraaom')  
      .then(resp => {
        console.log(resp.data[0])
      })
      .catch(error => {
        setError(error.message)
      })
  }, [])

  return(
    <Container
      h="100vh"
      maxW="full"
      bg="#282a36" 
      paddingTop="5%"
    >

    
        <DevCard
          title={ devArticle.title}
          description={devArticle.description}
          url={devArticle.url}
        />
{/* 
        <DevCard
          title={devArticle[0].title}
          description={devArticle[0].description}
          url={devArticle[0].url}
        />

        <DevCard
          title={devArticle[0].title}
          description={devArticle[0].description}
          url={devArticle[0].url}
        /> */}

    


    </Container>
  )
}


