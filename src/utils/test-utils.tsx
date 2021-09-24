import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'

type CustomRenderProps = RenderOptions

const customRender = (
  ui: ReactElement,
  renderOptions: CustomRenderProps = {}
) => render(<ChakraProvider>{ui}</ChakraProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
