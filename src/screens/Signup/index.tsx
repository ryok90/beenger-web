import { BInput } from '@/components/BInput'
import { IconLogo } from '@/components/Icons'
import { Center, VStack } from '@chakra-ui/layout'

export const Signup = () => {
  return (
    <Center>
      <VStack pt="12" spacing="7" maxW="50">
        <IconLogo w="16" />
        <BInput />
      </VStack>
    </Center>
  )
}
