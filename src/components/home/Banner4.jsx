import React from 'react'
import { Flex, Image, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react'

const Banner4 = () => {

  const table1 = [
    { id: 1, text: 'Técnicas de vendas' },
    { id: 2, text: 'Como atrair novos clientes' },
    { id: 3, text: 'Abordagem persuasiva' },
    { id: 4, text: 'Atendimento estratégico' },
    { id: 5, text: 'Persuasão' }
  ];

  const table2 = [
    { id: 1, text: 'Fechamento de vendas' },
    { id: 2, text: 'Habilidade de negociação' },
    { id: 3, text: 'Estratégia de marketing' },
    { id: 4, text: 'Fortaleça seu negócio' },
    { id: 5, text: 'Cresça nas redes sociais' }
  ];

  return (
    <Flex
      maxW='5xl'
      w='full'
      flexDirection='column'
      align='center'
      gap={6}
    // border='2px solid red'
    >
      <Flex
        w='full'
        flexDirection='row'
        flexWrap='wrap'
        align='center'
        justify='space-around'
        gap={2}
        p={2}
        // border='2px solid blue'
      >

        <Flex
          flexGrow={1}
          flexBasis={200}
          justify='center'
          // border='1px solid red'
        >
          <Image
            boxSize={['full', '95%', '90%']}
            objectFit='contain'
            src='/bannerlargo2.png'
            alt='Banner largo'
            shadow='2xl'
          />
        </Flex>
      </Flex>

      <Flex
        flexDirection='column'
        maxW='3xl'
        w='full'
        gap={3}
        pb={4}
      // border='1px solid pink'
      >
        <Text
          color='white'
          fontWeight='bold'
          textTransform='uppercase'
          fontSize={['2xl', '3xl', '4xl']}
          textAlign='center'
        >
          Você vai aprender
        </Text>

        <Flex
          flex={1}
          color='white'
          w='full'
          gap={6}
          flexWrap='wrap'
          flexDirection={['row']}
          align='start'
          justify='space-around'
        // border='1px solid red'
        >
          <TableContainer flexGrow={1}>
            <Table variant='unstyled' size='sm'>
              <Tbody>
                {
                  table1.map((item, index) => (
                    <Tr key={index}>
                      <Td ><Text textTransform='uppercase' fontSize={['sm', 'md', 'lg']} fontWeight='medium'>✅ {item.text}</Text></Td>
                    </Tr>
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>

          <TableContainer flexGrow={1}>
            <Table variant='unstyled' size='sm'>
              <Tbody>
                {
                  table2.map((item, index) => (
                    <Tr key={index}>
                      <Td ><Text textTransform='uppercase' fontSize={['sm', 'md', 'lg']} fontWeight='medium'>✅ {item.text}</Text></Td>
                    </Tr>
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Banner4