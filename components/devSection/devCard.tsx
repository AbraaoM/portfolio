import {
  Box
} from '@chakra-ui/react'

type cardInputs = {
  cover: string;
  title: string;
  descripton: string;
}

export function DevCard (props: cardInputs){
  return(
    <Box
      bg="sandybrown"
    >
      {props.title}

    </Box>
  )
}