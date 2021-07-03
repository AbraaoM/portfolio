import { useState, useEffect } from "react"
import { 
  Container, 
} from "@chakra-ui/react"
import axios from 'axios'

import { DevCard } from "./devCard"

export function DevSection(){
  const [devInfo, setDevInfo] = useState("arroz")
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('https://dev.to/api/articles/me/published',{
        headers: {
          'api-key': 'qBPthS9y5r61Pb76qBko33Dm'
        }
      })
      .then(resp => {
        console.log("BUCETA")
        setDevInfo(resp.data[0].title)
      })
      .catch(error => {
        setError(error.message)
      })
  }, [])

  return(
    <Container
      h="100vh"
      bg="tomato"
    >
      {devInfo}
    </Container>
  )
}

