import React from 'react'
import { Flex } from '@chakra-ui/react'

const Container = ({ children }) => {
  return (
    <Flex
      flexDirection='column'
      w='full'
      maxW='5xl'
      px={2}
    >
      {children}
    </Flex>
  )
}

export default Container
