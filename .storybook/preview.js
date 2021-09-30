import { ChakraProvider } from '@chakra-ui/react'
import { MemoryRouter } from 'react-router'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'white'
      },
      {
        name: 'dark',
        value: '#282828'
      },
      {
        name: 'primary',
        value: '#FBBB1B'
      }
    ]
  },
  layout: {
    default: 'fullscreen'
  }
}

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    </ChakraProvider>
  ),
];
