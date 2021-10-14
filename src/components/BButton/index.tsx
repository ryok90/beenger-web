import { Button, ButtonProps } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, VStack } from '@chakra-ui/layout'

export type BButtonProps = {
  label: string
} & ButtonProps

export const BButton = ({ label, ...props }: BButtonProps) => {
  const lightMode: ButtonProps = {
    bgColor: 'primary.500',
    color: 'neutral.600',
    borderColor: 'neutral.600',
    _hover: {
      bgColor: 'primary.400'
    },
    _active: {
      bgColor: 'primary.600'
    }
  }
  const darkMode: ButtonProps = {
    bgColor: 'primary.600',
    color: 'neutral.100',
    borderColor: 'primary.800',
    _hover: {
      bgColor: 'primary.500'
    },
    _active: {
      bgColor: 'primary.700'
    }
  }
  const colorProps = useColorModeValue(lightMode, darkMode)

  return (
    <VStack w="full" spacing="0" alignItems="stretch">
      <Button
        h={{ base: 9, sm: 12 }}
        fontSize={{ base: 'sm', sm: 'xl' }}
        fontWeight={{ base: 'medium', sm: 'medium' }}
        borderRadius="none"
        _focus={{
          outline: 'none'
        }}
        _hover={{
          bgColor: 'primary.400'
        }}
        {...colorProps}
        {...props}
      >
        {label}
      </Button>
      <Box
        borderTop="solid"
        borderColor={colorProps.borderColor}
        borderLeft="solid transparent"
        borderRight="solid transparent"
        borderTopWidth={{ base: '5px', sm: '6px' }}
        borderLeftWidth={{ base: '5px', sm: '6px' }}
        borderRightWidth={{ base: '5px', sm: '6px' }}
      />
    </VStack>
  )
}
