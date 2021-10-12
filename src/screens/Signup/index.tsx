import { BInput } from '@/components/BInput'
import { IconLogo, IconLogoText } from '@/components/Icons'
import { useBoolean } from '@chakra-ui/hooks'
import Icon from '@chakra-ui/icon'
import { Center, VStack } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

export const Signup = () => {
  const breakpoint = useBreakpointValue({ base: false, lg: true })
  const [visible, { toggle }] = useBoolean()

  return (
    <Center pt="12" px="4">
      <VStack w="full" spacing="7" maxW="96">
        {breakpoint ? <IconLogoText w="44" /> : <IconLogo w="16" />}
        <BInput name="name" placeholder="Nome" />
        <BInput name="username" placeholder="Usuário" />
        <BInput name="email" placeholder="E-mail" />
        <BInput
          type={visible ? 'text' : 'password'}
          name="password"
          placeholder="Senha"
          rightElement={
            <Icon
              role="button"
              as={visible ? MdVisibility : MdVisibilityOff}
              onClick={toggle}
              color="primary.400"
              w="8"
              h="6"
            />
          }
        />
        <BInput
          type={visible ? 'text' : 'password'}
          name="password-confirmation"
          placeholder="Confirmar senha"
        />
      </VStack>
    </Center>
  )
}
