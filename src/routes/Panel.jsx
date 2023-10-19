import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  WrapItem
} from '@chakra-ui/react'
import { redirect } from 'react-router-dom';

const Panel = () => {

  const [user, setUser] = useState({});
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkSession = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', Authorization: '47d1c2ad1aa5afe0b8ba471b42f68a97' }
    };

    try {
      const response = await fetch('https://v5.chatpro.com.br/chatpro-44c2fc7403/api/v1/status', options)
      const data = await response.json()

      // verifica se está conectado
      if (data.hasOwnProperty('connected')) {
        console.log('connected')
        console.log(data)
        setIsConnected(true)
        setUser(data)
      } else {
        console.log('disconnected')
        generateQrCode()
      }
    } catch (err) {
      console.log("Erro: ", err)
    }
  }

  // Gera um QR Code para conectar-se ao chatPro
  const generateQrCode = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', Authorization: '47d1c2ad1aa5afe0b8ba471b42f68a97' }
    };

    try {
      setIsLoading(true)
      const response = await fetch('https://v5.chatpro.com.br/chatpro-44c2fc7403/api/v1/generate_qrcode', options)
      const data = await response.json()
      setUser(data)
      setIsLoading(false)
      console.log(data)
    } catch (err) {
      console.log("Erro: ", err)
    }
  }

  // Remove a sessão (desconecta-se do WhatsApp)
  const removeSession = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', Authorization: '47d1c2ad1aa5afe0b8ba471b42f68a97' }
    };

    setIsLoading(true)
    await fetch('https://v5.chatpro.com.br/chatpro-44c2fc7403/api/v1/remove_session', options)
      .then(response => {
        if(response.ok) {
          console.log('disconnect')
          setIsLoading(true)
          setIsConnected(false)
          return redirect('/panel')
        }
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    checkSession()
  }, [])

  return (
    <Flex justify='center' align='center' p={2} h='100dvh'>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        maxW='4xl'
        w='full'
        p={2}
      >

        {
          isConnected ?
            <WrapItem alignItems='center' justifyContent='center' p={2}>
              <Avatar size='2xl' name={user?.info?.Pushname} bg='gray.200' />
            </WrapItem>
            :
            <Flex justify='center' align='center'>
              {
                isLoading ?
                  <Flex boxSize='200px' justify='center' align='center'>
                    <Spinner
                      thickness='4px'
                      speed='0.65s'
                      emptyColor='gray.200'
                      color='green.500'
                      size='xl'
                    />
                  </Flex>
                  :
                  <Image
                    objectFit='contain'
                    boxSize='200px'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={`${user?.qr}`}
                    alt='Código QR  '
                  />
              }
            </Flex>
        }

        <Stack>
          <CardBody>
            <Heading size='lg' pb={8} textAlign={{ base: 'center', sm: 'start' }}>
              {isConnected ? user.info.Pushname : <p>Desconectado</p>}
            </Heading>

            {isConnected ?
              <Stack spacing={0}>
                <Text fontWeight='medium'>Número WhatsApp</Text>
                <Text>{user.info.Wid}</Text>
              </Stack>
              :
              <Text>Seu smartphone não está conectado à API. Leia o QR Code no WhatsApp do seu smartphone para começar a usar.</Text>
            }

          </CardBody>

          <CardFooter>
            {isConnected &&
              <Button
                variant='solid'
                isLoading={isLoading}
                loadingText='Desconectando'
                textTransform='uppercase'
                borderRadius={0}
                colorScheme='whatsapp'
                onClick={removeSession}>
                Desconectar
              </Button>
            }
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  )
}

export default Panel