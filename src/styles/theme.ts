import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
    primary: {
      '100': '#FCF4CE',
      '200': '#FAE79F',
      '300': '#F1D26D',
      '400': '#E4BB48',
      '500': '#D39A13',
      '600': '#B57E0D',
      '700': '#976409',
      '800': '#7A4D06',
      '900': '#653C03'
    },
    success: {
      '50': '#E2F4CB',
      '100': '#D5EFB3',
      '200': '#BBE585',
      '300': '#B5DB85',
      '400': '#87CE2C',
      '500': '#6BB70B',
      '600': '#508908',
      '700': '#476E17',
      '800': '#375412',
      '900': '#273B0D'
    },
    danger: {
      '100': '#FAE0D1',
      '200': '#F6BBA6',
      '300': '#E68975',
      '400': '#CE5B50',
      '500': '#AE2020',
      '600': '#951722',
      '700': '#99212C',
      '800': '#640A21',
      '900': '#530620'
    },
    neutral: {
      '100': '#F4F4F4',
      '200': '#E9E9E9',
      '300': '#BEBEBE',
      '400': '#7E7E7E',
      '500': '#282828',
      '600': '#1A1A1A',
      '700': '#161313',
      '800': '#120D0E',
      '900': '#0C0407'
    }
  },
  fonts: {
    body: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    heading:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  }
}

export const theme = extendTheme(customTheme)

export type Theme = typeof customTheme & typeof theme
