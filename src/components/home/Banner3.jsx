import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SubscribeForm from '../SubscribeForm'

const Banner3 = () => {
  return (
    <Flex
      w='full'
      flexDirection={['column']}
      align='center'
      gap={2}
      pb={4}
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