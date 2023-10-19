import { FormControl, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { Field } from 'formik'
import React from 'react'

const SubscribeInput = ({name, type = 'text', icon, placeholder, errors, onChange }) => {

  // função handle
  const handleChange = e => onChange(e)

  return (
    <FormControl isRequired flexGrow={1} flexBasis={250}>
      <InputGroup size={['md', 'lg']}>
        <InputLeftElement pointerEvents='none' color='gray.600'>
          {icon}
        </InputLeftElement>
        <Input
          as={Field}
          name={name}
          type={type}
          placeholder={placeholder}
          focusBorderColor='green.200'
          bgColor='white'
          borderRadius='none'
          onChange={handleChange}
        />
      </InputGroup>
      <Text fontStyle='italic' fontSize='sm' color='white'>{errors}</Text>
    </FormControl>
  )
}

export default SubscribeInput