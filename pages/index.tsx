import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container } from "@chakra-ui/react"
import { Hero } from '../components/hero/hero'

export default function Home() {
  return (
    <Container 
      maxW="full"   
      h="100vh"
      bg="#282a36"    
    >
      <Head>
        <title>Abraão Moreira</title>
        <meta name="description" content="Portfólio Abraão Moreira" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero/>
    </Container>
  )
}
