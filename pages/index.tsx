import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box } from "@chakra-ui/react"
import { Hero } from '../components/hero'

export default function Home() {
  return (
    <Box 
      maxW="100vw"   
      bg="tomato"

    >
      <Head>
        <title>Abraão Moreira</title>
        <meta name="description" content="Portfólio Abraão Moreira" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero/>

    </Box>
  )
}
