import React, { useEffect, useState } from 'react'
import { AspectRatio, Button, Divider, Flex, Text } from '@chakra-ui/react'
import { userData } from '../utils/Data.js'
import { Logo } from '../components/home/Logo'
import Propertie from '../components/Propertie'
import PolarChart from '../components/PolarChart'
import Banner from '../components/home/Banner'
import Banner3 from '../components/home/Banner3'
import Banner4 from '../components/home/Banner4'
import LoadingPage from '../components/LoadingPage.jsx'
import { Container } from '../components/Container.jsx'

const Home = () => {

  const [properties, setProperties] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProperties(userData)
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }, [])

  const user = {
    labels: properties.map(data => data.propertie),
    datasets: [{
      label: 'Nível',
      data: properties.map(data => data.value),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(175, 175, 175, 0.5)',
        'rgba(0, 0, 227, 0.5)',
      ],
      borderWidth: 1,
      color: '#fff',
    }],
  };

  const handleIncrement = (id) => {
    setProperties(properties.map(item => {
      if (item.id === id) {
        return { ...item, value: item.value < 5 ? item.value + 1 : item.value }
      } else {
        return item
      }
    }))
  }

  const handleDecrement = (id) => {
    setProperties(properties.map(item => {
      if (item.id === id) {
        return { ...item, value: item.value > 0 ? item.value - 1 : item.value }
      } else {
        return item
      }
    }))
  }

  return (
    isLoading ?
      <LoadingPage />
      :

      <Flex
        // bgGradient='linear(to-r, #022737, teal.900, #022737)'
        bgImage='/background.png'
        flexDirection='column'
        align='center'
        overflowY='auto'
        style={{
          width: '100%',
          height: '100dvh',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <Logo />

        <Container>
          <Banner />

          {/* Container Chart, Video e Form */}
          <Flex
            mt={3}
            mb={6}
            gap={[2, 4]}
            w='full'
            flexWrap='wrap'
            justify='center'
            align='stretch'
          // border='1px solid red'
          >
            {/* Container Chart e Propertie */}
            <Flex
              w='2xl'
              flexDirection={['row']}
              flexWrap='wrap'
              flexBasis={600}
              flexGrow={1}
              order={[1, 1, 1]}
              p={2}
              gap={2}
              bg='blackAlpha.200'
              borderRadius='lg'
              color='white'
            >
              {/* Container Propriedades */}
              <Flex
                flexDirection={['column']}
                flexGrow={1}
                flexBasis={250}
                gap={2}
                align='center'
                justify={['space-evenly']}
              // border='1px solid pink'
              >
                <Text fontSize='2xl' fontWeight='bold' textAlign='center'>Você pratica com <br /> seus Clientes?</Text>

                <Flex
                  flexDirection='column'
                  align='center'
                  gap={2}
                  w='full'
                  justify='space-between'
                >
                  {
                    properties.map((item, index) => (
                      <Propertie
                        key={index}
                        id={item.id}
                        name={item.propertie}
                        value={item.value}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                      />
                    ))
                  }
                </Flex>
              </Flex>

              {/* Container Chart */}
              <Flex
                border='1px solid #9DB2BF'
                borderRadius='lg'
                minH={350}
                flexGrow={1}
                flexBasis={350}
                justify='center'
                align='center'
              >
                <PolarChart data={user} />
              </Flex>
            </Flex>

            {/* Container Video */}
            <Flex
              flexBasis={300}
              order={[3, 3, 2]}
              justify='center'
            >
              <AspectRatio w='full' maxW='300px' ratio={9 / 16} borderRadius='3xl' overflow='hidden'>
                <iframe
                  title='Davis'
                  src="https://www.youtube.com/embed/aY39ZVQ46tI?si=7SgUAf_jGQloKDbT"
                  allowFullScreen
                />
              </AspectRatio>
            </Flex>

            <Banner3 order={[2, 2, 3]} />
          </Flex>

          <Banner4 />

          <Divider maxW='5xl' />

          <Flex w='full' maxW='5xl' justify='center' px={2} py={6}>
            <Button
              size={['md', 'lg']}
              maxW='lg'
              flexGrow={1}
              flexBasis={250}
              colorScheme='whatsapp'
              textTransform='uppercase'
              borderRadius='none'
            >
              Comprar agora
            </Button>
          </Flex>
        </Container>

      </Flex >
  )
}

export default Home