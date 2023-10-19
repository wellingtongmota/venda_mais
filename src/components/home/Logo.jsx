import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export const Logo = () => {
  return (
    <Flex
      px={3}
      py={1}
      bg='#52ff03'
      w='full'
      justify='center'
      boxShadow='base'
    >
      <Heading fontSize={['2xl','3xl', '4xl']} textAlign='center' fontWeight='semibold' color='gray.800'>WhatsApp Venda Mais</Heading>
    </Flex>
  )
}
