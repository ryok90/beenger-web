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
  InputRightElement
} from '@chakra-ui/react'
import { forwardRef, HTMLInputTypeAttribute } from 'react'
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
            _placeholder={{
              color: 'neutral.500'
            }}
            ref={ref}
            type={type}
            fontSize="lg"
            color="neutral.600"
            border="1px solid"
            borderColor="primary.500"
            borderRadius="none"
            padding="2"
            height="10"
            _focus={{
              outline: 'none',
              borderColor: 'primary.500'
            }}
            {...inputProps}
          />
          {rightElement && (
            <InputRightElement h="full">{rightElement}</InputRightElement>
          )}
        </InputGroup>
        <Box
          borderTop="6px solid"
          borderColor={inputProps?.borderColor ?? 'primary.500'}
          borderLeft="6px solid transparent"
          borderRight="6px solid transparent"
        />
        <FormErrorMessage {...formErrorMessage}>
          {errorMessage}
        </FormErrorMessage>
        {!errorMessage && <FormErrorMessage>{helperMessage}</FormErrorMessage>}
      </FormControl>
    )
  }
)

BInput.displayName = 'BInput'
