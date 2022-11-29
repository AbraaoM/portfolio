import {
  Box,
  Text,
  Heading,
  Link
} from '@chakra-ui/react'

type tags = {

}

type cardInputs = {
  title: string;
  description: string;
  url:string;
  tags?: tags;
}

export function GhCard (props: cardInputs){
  return(
    <Box
      padding="1em 2em 1em 2em"
      bgGradient="linear(to-r, #282a36, #6272a4)"
      bgClip="border-box"
      borderRadius="lg"
      shadow="lg"
    >
      <Heading
        fontSize="2em"
        color="#50fa7b"
        fontWeight="bold"
        lineHeight="2em"
      >
        {props.title}
      </Heading>

      <Text
        fontSize="1.2em"
        color="#f8f8f2"
      >
        {props.description}
      </Text>

      <Link
        href={props.url}
        isExternal
        color="#ff79c6"
        fontSize="1.3em"
        fontWeight="black"
        lineHeight="2em"
      >
        Leia Mais...
      </Link>
      

    </Box>
  )
}