import { Center, VStack } from '@chakra-ui/layout'
import { IconLogo, IconLogoText } from './components/Icons'

function App() {
  return (
    <Center bgColor="#282828" h="100vh">
      <VStack alignItems="center" spacing="20">
        <IconLogo w="5em" />
        <IconLogoText />
      </VStack>
    </Center>
  )
}

export default App
