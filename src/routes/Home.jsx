import { AspectRatio, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Logo } from '../components/home/Logo'
import Banner from '../components/home/Banner'
import { userData } from '../utils/Data'
import Propertie from '../components/Propertie'
import PolarChart from '../components/PolarChart'
import Banner3 from '../components/home/Banner3'
import Banner4 from '../components/home/Banner4'

const Home = () => {

  const [properties, setProperties] = useState([{}]);

  useEffect(() => {
    setProperties(userData)
  }, [])

  const user = {
    labels: properties.map(data => data.propertie),
    legend: {
      display: false
    },
    datasets: [{
      label: 'Nível',
      data: properties.map(data => data.value),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(0, 0, 227, 0.5)',
      ],
      borderWidth: 1,

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
      <Banner />

      {/* Container Video e chart */}
      <Flex
        mt={3}
        mb={6}
        gap={[2, 4]}
        px={2}
        maxW='5xl'
        w='full'
        flexWrap='wrap'
        justify='center'
        align='stretch'
      >
        {/* Container Chart e Propertie */}
        <Flex
          w='2xl'
          flexDirection={['column', 'column', 'row']}
          flex={1}
          p={2}
          gap={2}
          bg='blackAlpha.500'
          borderRadius='lg'
          color='white'
        >

          {/* Container Propriedades */}
          <Flex
            flexDirection={['column', 'row', 'column']}
            flexWrap='wrap'
            gap={[3, 2, 3]}
            // px={2}
            align='center'
            justify={['flex-start', 'space-around', 'center']}
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

          {/* Container Chart */}
          <Flex
            border='1px solid #D8D9DA'
            borderRadius='lg'
            minH='330px'
            flex={1}
            justify='center'
            align='center'
          >
            <PolarChart data={user} />
          </Flex>
        </Flex>

        {/* Container Video */}
        <Flex flexBasis={300}>
          <AspectRatio w='full' maxW='300px' ratio={9 / 16} borderRadius='3xl' overflow='hidden'>
            <iframe
              title='Davis'
              src="https://www.youtube.com/embed/aY39ZVQ46tI?si=7SgUAf_jGQloKDbT"
              allowFullScreen
            />
          </AspectRatio>
        </Flex>
      </Flex>

      <Banner3 />

      <Banner4/>
    </Flex >
  )
}

export default Home