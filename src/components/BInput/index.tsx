import { Input, InputProps } from '@chakra-ui/input'

export type BInputProps = InputProps

export const BInput = (props: BInputProps) => {
  return (
    <Input
      variant="unstyled"
      borderRadius="base"
      borderWidth="1px"
      borderColor="#D39A13"
      borderBottom=""
      {...props}
    />
  )
}
