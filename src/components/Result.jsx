// em desuso
import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import ResultFilter from './ResultFilter'

const Result = ({ children, properties }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = useState('inside')

  return (
    <>
      <div onClick={onOpen}>
        {children}
      </div>

      <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior={scrollBehavior} size={['full', 'lg', '2xl']}>
        <ModalOverlay backdropFilter="auto" backdropBlur="6px" />
        <ModalContent borderRadius={0}>
          <ModalHeader>Resultado</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={2}>
              {
                properties.map((propertie, index) => (
                  <ResultFilter key={index} propertie={propertie.propertie} value={propertie.value} />
                ))
              }
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' borderRadius={0} colorScheme='blue' >
              IMPRIMIR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Result