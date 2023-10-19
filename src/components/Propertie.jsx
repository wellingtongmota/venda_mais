import React from 'react'
import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text
} from '@chakra-ui/react'

const Propertie = ({ id, name, value, onIncrement, onDecrement }) => {

  const handleIncrement = () => {
    onIncrement(id)
  }

  const handleDecrement = () => {
    onDecrement(id)
  }

  return (
    <Flex w='full' gap={1} align='center' justify='space-between'>
      <Text>{name}</Text>
      <NumberInput
        name={id}
        value={value}
        maxW={['14', '16']}
        size='sm'
        max={10}
        min={0}
        focusBorderColor='gray.200'
      >
        <NumberInputField />
        <NumberInputStepper bg='blackAlpha.600'>
          <NumberIncrementStepper color='gray.300' onClick={handleIncrement} />
          <NumberDecrementStepper color='gray.300' onClick={handleDecrement} />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  )
}

export default Propertie