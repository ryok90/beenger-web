import { BButton } from '@/components/BButton'
import { IconLogo, IconLogoText } from '@/components/Icons'
import { Center, VStack } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <Center bgColor="#282828" h="100vh">
      <VStack alignItems="center" spacing="5">
        <IconLogo w="20" />
        <IconLogoText />
        <Link to="/signup">
          <BButton w="10rem" as="a" label="Login" />
        </Link>
      </VStack>
    </Center>
  )
}
