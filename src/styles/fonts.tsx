import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'roboto';
        src: url('/fonts/roboto-regular.woff2?#iefix') format('woff2'),
        font-weight: normal;
        font-style: normal;
      }
    `}
  />
)
