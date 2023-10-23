import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <Flex
      mt={4}
      flexDirection='column'
      w='full'
    >
      <Flex
        gap={4}
        flexGrow={1}
        align='center'
        justify='center'
      >
        <Text
          color='white'
          fontWeight='extrabold'
          textTransform='uppercase'
          fontSize={['xl', '3xl']}
          textAlign='center'
        >
          Você é um bom vendedor com o WhatsApp?
        </Text>

        <Flex>
          <Image
            boxSize={['100px']}
            objectFit='contain'
            src='/whatsapp_icon.png'
            alt='Logo whatsapp'
          />
        </Flex>
      </Flex>

      <Flex
        p={0}
        bg='#4bed00'
        w='full'
        justify='center'
        shadow='2xl'
      >
        <Text
          fontSize='lg'
          textAlign='center'
          fontWeight='bold'
          color='gray.800'
          textTransform='uppercase'
        >
          ∙∙∙ Faça o teste abaixo ∙∙∙
        </Text>
      </Flex>
    </Flex>
  )
}

export default Banner