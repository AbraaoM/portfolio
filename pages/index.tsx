import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box } from "@chakra-ui/react"
import { Hero } from '../components/hero'
import { About } from '../components/about'
import { DevSection } from '../components/devSection/devSection'

export default function Home() {
  return (
    <Box 
      maxW="100vw" 
    >
      <Head>
        <title>Abraão Moreira</title>
        <meta name="description" content="Portfólio Abraão Moreira" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero/>
      <About/>
      <DevSection/>

    </Box>
  )
}
