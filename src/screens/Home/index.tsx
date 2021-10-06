import { IconLogo, IconLogoText } from '@/components/Icons'
import { Center, VStack } from '@chakra-ui/layout'

export const Home = () => {
  return (
    <Center bgColor="#282828" h="100vh">
      <VStack alignItems="center" spacing="5">
        <IconLogo w="20" />
        <IconLogoText />
      </VStack>
    </Center>
  )
}
