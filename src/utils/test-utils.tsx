import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'

type CustomRenderProps = RenderOptions

export const customRender = (
  ui: ReactElement,
  renderOptions: CustomRenderProps = {}
) => render(<ChakraProvider>{ui}</ChakraProvider>, renderOptions)
