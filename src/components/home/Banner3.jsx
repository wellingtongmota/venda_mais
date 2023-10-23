import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SubscribeForm from '../SubscribeForm'

const Banner3 = () => {
  return (
    <Flex
      maxW='5xl'
      w='full'
      flexDirection={['column']}
      align='center'
      gap={2}
      pb={4}
      // border='1px solid red'
    >
      <Flex
        flexDirection='column'
      >
        <Text
          color='white'
          fontWeight='bold'
          textTransform='uppercase'
          fontSize={['xl', '2xl']}
          textAlign='center'
        // letterSpacing={-1}
        // border='1px solid red'
        >
          Clique no botão abaixo e receba grátis a análise do seu gráfico
        </Text>
      </Flex>

      <Flex w='full'>
        <SubscribeForm />
      </Flex>
    </Flex>
  )
}

export default Banner3