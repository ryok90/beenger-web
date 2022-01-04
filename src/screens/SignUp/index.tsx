import { BButton } from '@/components/BButton'
import { BInput } from '@/components/BInput'
import { IconLogo, IconLogoText } from '@/components/Icons'
import { IconButton } from '@chakra-ui/button'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { useBoolean } from '@chakra-ui/hooks'
import Icon from '@chakra-ui/icon'
import { Text, VStack } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  MdNightlight,
  MdOutlineWbSunny,
  MdVisibility,
  MdVisibilityOff
} from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom'

type SignUpBody = {
  name: string
  username: string
  email: string
  password: string
  passwordConfirmation: string
}

const schema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.min': 'Mínimo de 3 caracteres',
    'string.empty': 'Nome é obrigatório'
  }),
  username: Joi.string().min(3).required().messages({
    'string.min': 'Mínimo de 3 caracteres',
    'string.empty': 'Usuário é obrigatório'
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'E-mail inválido',
      'string.empty': 'E-mail é obrigatório'
    }),
  password: Joi.string().required().messages({
    'string.empty': 'Senha é obrigatória'
  }),
  passwordConfirmation: Joi.any()
    .equal(Joi.ref('password'))
    .required()
    .messages({
      'any.empty': 'Confirmação de senha é obrigatória',
      'any.only': 'Senhas não correspondem'
    })
})

export const SignUp = () => {
  const breakpoint = useBreakpointValue({ base: false, sm: true })
  const [visible, { toggle }] = useBoolean()
  const { toggleColorMode } = useColorMode()
  const router = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUpBody>({ resolver: joiResolver(schema) })

  const onSubmit: SubmitHandler<SignUpBody> = async (body) => {
    const sleep = (ms: number) => {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }
    await sleep(2000)
    console.log(body)
    router.push('/')
  }

  const reg = (name: keyof SignUpBody) => ({
    ...register(name),
    isDisabled: isSubmitting,
    isInvalid: Boolean(errors?.[name]),
    errorMessage: errors?.[name]?.message
  })

  return (
    <VStack
      bgColor={useColorModeValue('neutral.100', 'neutral.500')}
      justifyContent={{ base: 'start', sm: 'center' }}
      h="100vh"
    >
      <VStack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w="full"
        py="10"
        px={{ base: 6, sm: 10 }}
        spacing={{ base: 8, sm: '2.675rem' }}
        maxW="30rem"
        shadow={{ base: 'none', sm: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}
      >
        <VStack>
          {breakpoint ? <IconLogoText w="44" /> : <IconLogo w="16" />}
          <IconButton
            aria-label="toggle-color-mode"
            bgColor="primary.500"
            _hover={{ bgColor: 'primary.400' }}
            color={useColorModeValue('neutral.100', 'neutral.500')}
            icon={useColorModeValue(<MdNightlight />, <MdOutlineWbSunny />)}
            onClick={toggleColorMode}
          />
        </VStack>
        <BInput {...reg('name')} placeholder="Nome" />
        <BInput {...reg('username')} placeholder="Usuário" />
        <BInput {...reg('email')} placeholder="E-mail" />
        <BInput
          {...reg('password')}
          type={visible ? 'text' : 'password'}
          placeholder="Senha"
          rightElement={
            <Icon
              role="button"
              as={visible ? MdVisibility : MdVisibilityOff}
              onClick={toggle}
              color={errors.password ? 'danger.400' : 'primary.400'}
              w="8"
              h="6"
            />
          }
        />
        <BInput
          {...reg('passwordConfirmation')}
          type={visible ? 'text' : 'password'}
          placeholder="Confirmar senha"
        />
        <VStack w="full">
          <BButton isLoading={isSubmitting} type="submit" label="Cadastrar" />
          <Text
            fontSize={{ base: 'xs', sm: 'lg' }}
            color={useColorModeValue('neutral.400', 'neutral.300')}
          >
            Já tem cadastro?{' '}
            <Link to="/">
              <Text as="span" textDecorationLine="underline">
                Fazer login.
              </Text>
            </Link>
          </Text>
        </VStack>
      </VStack>
    </VStack>
  )
}
