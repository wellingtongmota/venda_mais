import React from 'react'
import { Button, Flex, useToast } from '@chakra-ui/react'
import { LuPhone, LuUser } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { resultUser } from '../utils/ResultUser';
import SubscribeInput from './SubscribeInput';

const SubscribeForm = ({ properties }) => {

  const toast = useToast()

  const messageServer = (response, statusCode, message) => {
    if (response.ok) {
      toast({
        title: 'Sucesso',
        description: `${message}`,
        status: 'success',
        variant: 'top-accent',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: `Erro ${statusCode}`,
        description: `${message}`,
        status: 'error',
        variant: 'top-accent',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const writeMessage = () => {
    let message = ''

    // retorna array com resultados de acordo com o value
    const array = resultUser(properties)
    console.log(array)

    // escreve a mensagem que será enviada ao usuário pelo WhatsApp
    array.map(item => {
      message += `${item.propertie}, nota: ${item.value}\n${item.result}\n\n`
    })
    return message
  }

  const subscribeSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Muito curto!')
      .max(50, 'Muito longo!'),
    phone: Yup.string()
      .matches(/^\d{11}$/, 'Número inválido', { excludeEmptyString: true })
  });

  return (
    <Formik
      initialValues={{
        name: '',
        phone: ''
      }}

      validationSchema={subscribeSchema}

      onSubmit={async (values, { resetForm }) => {
        const options = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: '47d1c2ad1aa5afe0b8ba471b42f68a97'
          },
          body: JSON.stringify({
            number: `${values.phone}`,
            message:
              `Resultado da sua avaliação: ${values.name}\n\n${writeMessage()}`
          })
        };

        try {
          const response = await fetch('https://v5.chatpro.com.br/chatpro-44c2fc7403/api/v1/send_message', options)

          if (response.ok)
            resetForm()

          const { statusCode, message } = await response.json()
          messageServer(response, statusCode, message)

        } catch (err) {
          console.log("Erro: ", err)
        }
      }}

    >
      {({ isSubmitting, errors, touched, handleChange }) => (
        <Flex
          as={Form}
          gap={3}
          p={2}
          flexWrap='wrap'
          flexDirection={['row']}
          w='full'
          align='flex-start'
        >
          <SubscribeInput
            name='name'
            icon={<LuUser />}
            onChange={handleChange}
            placeholder='Digite seu nome'
            errors={errors.name}
          />

          <SubscribeInput
            name='phone'
            type='number'
            icon={<LuPhone />}
            onChange={handleChange}
            placeholder='Digite seu número'
            errors={errors.phone}
          />

          <Button
            size={['md', 'lg']}
            flexGrow={1}
            flexBasis={250}
            type='submit'
            isLoading={isSubmitting}
            loadingText='Enviando'
            colorScheme='whatsapp'
            textTransform='uppercase'
            borderRadius='none'
            rightIcon={<BsWhatsapp />}
          >
            Receba no WhatsApp
          </Button>
        </Flex>
      )}
    </Formik>
  )
}

export default SubscribeForm