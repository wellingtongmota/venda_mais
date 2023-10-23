import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

const LoadingPage = () => {
  return (
    <Flex
      w='full'
      h='100dvh'
      justify='center'
      align='center'
      bg='gray.800'
    >
      <Spinner
        thickness='4px'
        speed='0.80s'
        emptyColor='gray.200'
        color='green.500'
        size='xl'
      />
    </Flex>
  )
}

export default LoadingPage