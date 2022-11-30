import {
  Box,
  Text,
  Heading,
  Link,
  Tag
} from '@chakra-ui/react'

import { tagEnum } from '../../enums/tagEnums'

type cardInputs = {
  title: string;
  description: string;
  url:string;
  tags?: Array<tagEnum>;
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

      <Box
        margin="1em 0 1em 0"
      >
        {props.tags?.includes(tagEnum.typescript) &&
          <Tag 
          marginRight={"0.5em"} 
          size={"lg"} 
          key={tagEnum.typescript} 
          variant='solid' 
          colorScheme='blue'>
          Typescript
        </Tag>
        }

        {props.tags?.includes(tagEnum.javascript) && <Tag 
          marginRight={"0.5em"} 
          size={"lg"} 
          key={tagEnum.javascript} 
          variant='subtle' 
          colorScheme='yellow'>
          Javascript
        </Tag>}

        {props.tags?.includes(tagEnum.dotnet) && <Tag 
          marginRight={"0.5em"} 
          size={"lg"} 
          key={tagEnum.dotnet} 
          variant='solid' 
          colorScheme='purple'>
          .NET
        </Tag>
        }
        {props.tags?.includes(tagEnum.angular) && <Tag 
          marginRight={"0.5em"} 
          size={"lg"} 
          key={tagEnum.angular} 
          variant='solid' 
          colorScheme='red'>
          Angular
        </Tag>
        }
        {props.tags?.includes(tagEnum.react) && <Tag 
          marginRight={"0.5em"} 
          size={"lg"} 
          key={tagEnum.react} 
          variant='subtle' 
          colorScheme='blue'>
          React
        </Tag>
        }
        {props.tags?.includes(tagEnum.node) && <Tag 
          marginRight={"0.5em"} 
          size={"lg"} 
          key={tagEnum.node} 
          variant='solid' 
          colorScheme='green'>
          Node
        </Tag>
        }
        {props.tags?.includes(tagEnum.vercel) && <Tag 
          marginRight={"0.5em"} 
          size={"lg"} 
          key={tagEnum.vercel} 
          variant='solid' 
          colorScheme='gray'>
          Vercel
        </Tag>
        }
        {props.tags?.includes(tagEnum.web) && <Tag 
          marginRight={"0.5em"} 
          size={"lg"} 
          key={tagEnum.web} 
          variant='solid' 
          colorScheme='orange'>
          Web
        </Tag>
        }
        {props.tags?.includes(tagEnum.mobile) && <Tag 
          marginRight={"0.5em"} 
          size={"lg"} 
          key={tagEnum.mobile} 
          variant='solid' 
          colorScheme='cyan'>
          Mobile
        </Tag>
        }   
        {props.tags?.includes(tagEnum.MQL) && <Tag 
          marginRight={"0.5em"} 
          size={"lg"} 
          key={tagEnum.MQL} 
          variant='solid' 
          colorScheme='yellow'>
          MQL
        </Tag>
        }   
        {props.tags?.includes(tagEnum['Mercado financeiro']) && <Tag 
          marginRight={"0.5em"} 
          size={"lg"} 
          key={tagEnum['Mercado financeiro']} 
          variant='solid' 
          colorScheme='pink'>
          Mercado Financeiro
        </Tag>
        }     

      </Box>

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