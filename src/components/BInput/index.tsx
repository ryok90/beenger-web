import {
  Box,
  FormControl,
  FormControlProps,
  FormLabelProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react'
import { forwardRef, HTMLInputTypeAttribute } from 'react'
import { MdWarning } from 'react-icons/md'
import ReactInputMask from 'react-input-mask'

type CustomProps = {
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
  label?: string
  name: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  errorMessage?: string
  helperMessage?: string
}

type ChakraProps = {
  formControlProps?: FormControlProps
  formErrorMessage?: FormErrorMessageProps
  formLabelProps?: FormLabelProps
  inputProps?: {
    mask?: string
    maskChar?: string | null
  } & InputProps
}

export type BInputProps = CustomProps & ChakraProps & FormControlProps

export const BInput = forwardRef<HTMLInputElement, BInputProps>(
  (
    {
      leftElement,
      rightElement,
      formControlProps,
      helperMessage,
      errorMessage,
      inputProps,
      name,
      label,
      placeholder = '',
      formErrorMessage,
      type = 'text',
      formLabelProps,
      ...props
    },
    ref
  ) => {
    const borderColor = useColorModeValue('primary.500', 'primary.600')

    return (
      <FormControl {...props} {...formControlProps}>
        {label && (
          <FormLabel {...formLabelProps} htmlFor={name}>
            {label}
          </FormLabel>
        )}
        <InputGroup>
          {leftElement && <InputLeftElement>{leftElement}</InputLeftElement>}
          <Input
            as={inputProps?.mask ? ReactInputMask : undefined}
            variant="outline"
            id={name}
            name={name}
            placeholder={placeholder}
            _placeholder={{ color: 'neutral.400' }}
            errorBorderColor="danger.500"
            ref={ref}
            type={type}
            fontSize={{ base: 'xs', sm: 'xl' }}
            fontWeight="normal"
            color={useColorModeValue('neutral.500', 'neutral.100')}
            border={'1px solid'}
            borderColor={borderColor}
            shadow="none"
            borderRadius="none"
            padding="2"
            height={{ base: 9, sm: 10 }}
            _focus={{
              outline: 'none',
              borderColor: 'primary.500'
            }}
            _invalid={{
              boxShadow: 'none',
              borderColor: 'danger.500'
            }}
            {...inputProps}
          />
          {rightElement && (
            <InputRightElement h="full">{rightElement}</InputRightElement>
          )}
        </InputGroup>
        <Box
          borderTop="6px solid"
          borderColor={errorMessage ? 'danger.500' : borderColor}
          borderLeft="6px solid transparent"
          borderRight="6px solid transparent"
        />
        <FormErrorMessage
          position="absolute"
          top={{ base: 9, sm: '2.875rem' }}
          color="danger.500"
          {...formErrorMessage}
        >
          <MdWarning width="6px" />
          &nbsp;{errorMessage}
        </FormErrorMessage>
        {!errorMessage && <FormErrorMessage>{helperMessage}</FormErrorMessage>}
      </FormControl>
    )
  }
)

BInput.displayName = 'BInput'
